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
use icesui\IBuilder;
use icesui\model\AuthGroup;

class Setting extends MgController
{
    public function group(){
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
            ->addAside([
                [
                    'text' => "<i class='icon wb-more-horizontal'></i>角色列表",
                    'href' => "/icesui/setting/group",
                    "active" => true
                ],
                [
                    'text' => "<i class='icon wb-user-add'></i>角色添加",
                    'href' => "/icesui/setting/groupadd",
                    "active" => false
                ]
            ])
            ->setPageTitle("角色设置", "后台可登录的角色权限设置")
            ->table();
    }

    public function groupadd($id = 0){

    }

    public function menu(){
        if($this->request->isPost()){
            $post = input("post.");
            if($post['id']){
                $flag = db("ices_auth_rule")->update($post);
                if($flag)
                    $this->success("修改成功");
                else
                    $this->error("修改失败");
            }else{
                $this->error("暂时不允许手动新增栏目");
            }
        }
        $menus = Auth::instance()->getAuthMenus("all");
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
}
