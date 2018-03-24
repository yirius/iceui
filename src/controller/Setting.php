<?php
/**
 * User: Yirius
 * Date: 2018/1/19
 * Time: 14:22
 */

namespace icesui\controller;


use icesui\Builder\FormBuilder;
use icesui\Builder\TableBuilder;
use icesui\extend\Auth;
use icesui\extend\MgController;
use icesui\extend\Tools;
use icesui\IBuilder;
use icesui\model\AuthGroup;
use icesui\model\AuthRule;
use icesui\model\AuthUser;

class Setting extends MgController
{
    /**
     * @title 找到用户所有的角色
     * @description 找到用户所有的角色
     * @createtime: 2018/2/18 12:20
     * @return array|string
     */
    public function group(){
        if($this->request->isDelete()){
            $authgroup = new AuthGroup();
            return $authgroup->AutoDelete(null, [1]);
        }
        if($this->request->isPost()){
            $authgroup = new AuthGroup();
            return $authgroup->AutoTable();
        }
        return TableBuilder::instance()
            ->addTableColmun("编号", "id")
            ->addTableColmun("名称", "title", false)
            ->addTableColmun("状态", "status", false, <<<HTML
if(data == 1){
    return '正常状态';
}else{
    return '角色已关闭';
}
HTML
            )
            ->addTableColmun("按钮", null, false, <<<HTML
return "<a data-iframe title='角色修改' target='_blank' href='/icesui/setting/groupadd/id/"+objects.id+"' class='btn btn-info btn-sm'>角色修改</a>";
HTML
            )
            ->setPageTitle("角色设置", "后台可登录的角色权限设置")
            ->setTableBtn(<<<HTML
<a href="/icesui/setting/groupadd" target="_blank" data-iframe class="btn btn-success btn-sm" style="margin-right: 10px;">新增</a>
HTML
            )
            ->setTableBtn("delete")
            ->table();
    }

    /**
     * @title 添加用户对应的角色
     * @description 添加用户对应的角色
     * @createtime: 2018/3/24 18:51
     * @param int $id
     * @return string
     */
    public function groupadd($id = 0){
        $authGroup = new AuthGroup();
        if($this->request->isPost()){
            $post = input('post.');
            if(!empty($post['isall']) && $post['isall'] == 1){
                $post['rules'] = "all";
            }
            unset($post['isall']);
            $authGroup->AutoSave($post, $id==0?[]:['id' => $id]);
        }
        $value = $id == 0?[]:$authGroup->where('id', $id)->find();

        if(!empty($value['rules']) && $value['rules'] == "all"){
            $value['isall'] = 1;
            $value['rules'] = "";
        }

        $formBuilder = new FormBuilder();
        return $formBuilder
            ->setFormValue($value)
            ->addText("角色名称", "title")
            ->addRadio("是否开启", "status", [
                ['text' => "开启", "value" => 1],
                ['text' => "关闭", "value" => 0],
            ])
            ->addRadio("是否所有权限", "isall", [
                ['text' => "是", "value" => 1],
                ['text' => "否", "value" => 0],
            ])
            ->addZtree("权限设置", "rules", Auth::instance()->getUserMenuForTree(), !empty($value['rules'])?explode(",", $value['rules']):[])
            ->form();
    }

    /**
     * @title 菜单设置
     * @description 菜单设置
     * @createtime: 2018/3/24 18:53
     * @param int $id
     * @return string
     */
    public function menu($id = 0){
        if($this->request->isDelete()){
            if($id == 0){
                $this->error("很抱歉, 请您先选择顶部菜单名");
            }
            $authRule = new AuthRule();
            if($authRule->where('parentid', $id)->count()){
                $this->error("该菜单下有子菜单,无法删除,请您先删除子菜单");
            }
            $flag = $authRule->where('id', $id)->delete();
            if($flag){
                $this->success("删除成功");
            }else{
                $this->error("删除失败");
            }
        }
        $menus = Auth::instance()->getAuthMenus("all", 2);
//        PRINT_R($menus['sideMenus']['manage']);exit;
        $iBuilder = new IBuilder();
        return $iBuilder
            ->addLinks([
                $iBuilder->config['view_assets'] . "/vendor/nestable/nestable.css",
                $iBuilder->config['view_assets'] . "/vendor/iconpicker/iconpicker.css",
            ])
            ->addLinks([
                $iBuilder->config['view_assets'] . "/js/icesui/app.js",
                $iBuilder->config['view_assets'] . "/vendor/nestable/jquery.nestable.min.js",
                $iBuilder->config['view_assets'] . "/vendor/nodetpl/nodetpl.client.min.js",
                $iBuilder->config['view_assets'] . "/vendor/iconpicker/iconpicker.min.js",
            ], "script")
            ->assign("topMenu", $menus['topMenus'])
            ->assign("sideMenus", $menus['sideMenus'])
            ->render("setting/menu");
    }

    /**
     * @title 提交过来了一整份菜单
     * @description
     * @createtime: 2018/3/24 18:54
     * @throws \Exception
     */
    public function doMenu(){
        $post = input('post.data');
        $data = json_decode($post, true);
        $authRule = new AuthRule();
        $listOrder = 1;
        $saveAll = [];
        foreach($data as $i => $v){
            $saveAll[] = [
                'id' => $v['id'],
                'status' => $v['status'],
                'type' => $v['type'],
                'icon' => $v['icon'],
                'name' => $v['name'],
                'text' => $v['text']
            ];
            $parentId = $v['id'];
            $listOrder++;
            foreach($v['children'] as $j => $val){
                $pid = $this->_getAllMenu($authRule, $parentId, $val, $listOrder, $saveAll);
                $listOrder++;
                foreach($val['children'] as $k => $value){
                    $_pid = $this->_getAllMenu($authRule, $pid, $value, $listOrder, $saveAll);
                    $listOrder++;
                    foreach($value['children'] as $l => $values){
                        $__pid = $this->_getAllMenu($authRule, $_pid, $values, $listOrder, $saveAll);
                        $listOrder++;
                    }
                }
            }
        }
        $flag = $authRule->saveAll($saveAll);
        if($flag)
            $this->success("更新成功");
        else
            $this->error("更新出现了问题");
    }

    /**
     * @title 添加顶部菜单
     * @description 添加顶部菜单
     * @createtime: 2018/3/24 18:56
     * @param int $id
     * @return string
     */
    public function addTopMenu($id = 0){
        $authRule = new AuthRule();
        if($this->request->isPost()){
            $post = input('post.');
            if(empty($post['name'])){
                $this->error("菜单网址必须填写");
            }
            if(strpos($post['name'], "/")){
                $this->error("顶部菜单对应网址不可出现斜杠/");
            }
            if(empty($post['text'])){
                $this->error("菜单名称必须填写");
            }
            if($id == 0 && $authRule->where('name', $post['name'])->count()){
                $this->error("对不起, 该网址已经被占用, 请您确认");
            }
            $post['parentid'] = 0;
            $post['type'] = 1;
            $authRule->AutoSave($post, $id == 0?[]:['id' => $id]);
        }
        $ruleValue = $id == 0?[]:$authRule->where('id', $id)->find();

        $iBuilder = new IBuilder();
        return $iBuilder
            ->addLinks([
                $iBuilder->config['view_assets'] . "/vendor/iconpicker/iconpicker.css",
            ])
            ->addLinks([
                $iBuilder->config['view_assets'] . "/js/icesui/app.js",
                $iBuilder->config['view_assets'] . "/vendor/iconpicker/iconpicker.min.js",
            ], "script")
            ->assign("rulevalue", $ruleValue)
            ->render("setting/addtopmenu");
    }

    /**
     * @title 后台登录用户列表
     * @description 后台登录用户列表
     * @createtime: 2018/3/24 18:59
     * @return array|string|void
     */
    public function users(){
        /**
         * 判断一下权限, 如果是删除, 那么第一个用户是无法删除的
         */
        if($this->request->isDelete()){
            $authUser = new AuthUser();
            return $authUser->AutoDelete(null, [1]);
        }
        if($this->request->isPost()){
            $authUser = new AuthUser();
            return $authUser->AutoTable('id,realname,username,phone');
        }
        $tableBuilder = new TableBuilder();
        return $tableBuilder
            ->addTableColmun("编号", "id")
            ->addTableColmun("真实姓名", "realname")
            ->addTableColmun("登录账号", "username")
            ->addTableColmun("手机号", "phone")
            ->addTableColmun("按钮", null, false, <<<HTML
return "<a data-iframe title='管理员修改' target='_blank' href='/icesui/setting/usersadd/id/"+objects.id+"' class='btn btn-info btn-sm'>修改</a>";
HTML
            )
            ->setTableBtn(<<<HTML
<a href="/icesui/setting/usersadd" target="_blank" data-iframe class="btn btn-success btn-sm" title="管理员新增" style="margin-right: 10px;">新增</a>
HTML
            )
            ->setTableBtn("delete")
            ->table();
    }

    /**
     * @title 用户权限修改或新增
     * @description 用户权限修改或新增
     * @createtime: 2018/3/24 19:02
     * @param int $id
     * @return string
     */
    public function usersadd($id = 0){
        $authUser = new AuthUser();
        if($this->request->isPost()){
            $post = input('post.');
            if(!empty($post['password'])){
                if($id == 0){
                    //如果在这里是新增,那就需要新生成一个salt
                    $salt = Tools::Rand();
                    $post['password'] = sha1($post['password'].$salt);
                    $post['salt'] = $salt;
                }else{
                    //如果不是新增需要读取一下salt,然后计算出来
                    $salt = $authUser->where('id', $id)->find()->getData('salt');
                    $post['password'] = sha1($post['password'].$salt);
                }
            }else{
                //否则是空,那就意味着不修改密码
                unset($post['password']);
            }
            $authUser->AutoSave($post, $id==0?[]:['id' => $id]);
        }

        $value = $id == 0?[]:$authUser->where('id', $id)->find();

        unset($value['password']);

        $authGroup = new AuthGroup();
        $groupList = $authGroup->AutoSelect("title as text,id as value");

        $formBuilder = new FormBuilder();
        return $formBuilder
            ->setFormValue($value)
            ->addText("登录账号", "username")
            ->addText("手机号", "phone")
            ->addText("真实姓名", "realname")
            ->addText("密码(留空为不修改)", "password")
            ->addSelect("对应角色", "group_id", $groupList)
            ->form();
    }

    /**
     * @title 获取到所有的菜单
     * @description 获取到所有的菜单
     * @createtime: 2018/3/24 18:53
     * @param AuthRule $authRule
     * @param $parentId
     * @param $val
     * @param $listOrder
     * @param $saveAll
     * @return int|string
     */
    protected function _getAllMenu(AuthRule $authRule, $parentId, $val, $listOrder, &$saveAll){
        if(empty($val['id'])){
            $pid = $authRule->insertGetId([
                'parentid' => $parentId,
                'status' => $val['status'],
                'type' => $val['type'],
                'icon' => $val['icon'],
                'name' => $val['name'],
                'text' => $val['text'],
                'list_order' => $listOrder
            ]);
        }else{
            if(!empty($val['id'])){
                $saveAll[] = [
                    'id' => $val['id'],
                    'parentid' => $parentId,
                    'status' => $val['status'],
                    'type' => $val['type'],
                    'icon' => $val['icon'],
                    'name' => $val['name'],
                    'text' => $val['text'],
                    'list_order' => $listOrder
                ];
                $pid = $val['id'];
            }else{
                $saveAll[] = [
                    'parentid' => $parentId,
                    'status' => $val['status'],
                    'type' => $val['type'],
                    'icon' => $val['icon'],
                    'name' => $val['name'],
                    'text' => $val['text'],
                    'list_order' => $listOrder
                ];
                $pid = $parentId;
            }
        }
        return $pid;
    }
}
