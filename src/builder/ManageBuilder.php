<?php
/**
 * User: Yirius
 * Date: 2017/12/2
 * Time: 15:18
 */

namespace icesui\Builder;


use icesui\extend\Auth;
use icesui\IBuilder;
use traits\controller\Jump;

class ManageBuilder extends IBuilder
{
    use Jump;

    /**
     * @title 后台框架界面的渲染方法
     * @description 后台框架界面的渲染方法,会自动获取manager这个session里面的角色规则rules,如果不存在session("manager"),会跳转去登录,登录界面等的网址可以通过icesui.php进行配置,同时会自动读取出来皮肤配置
     * @createtime: 2018/1/10 00:17
     * @return string html内容
     */
    function index()
    {
        if(empty(session("manager"))){
            $this->redirect($this->config['manage']['get']);
            exit;
        }
        $auth = Auth::instance()->getAuthMenus(session('manager.rules'));
        $uid = session('manager.id');
        if(empty($uid)){
            $theme = [];
        }else{
            $theme = db("ices_auth_user")->where('id', $uid)->find()['theme'];
            $theme = empty($theme)?[]:json_decode($theme, true);
            session("managerTheme", $theme);
        }
        return $this
            ->assign("adminTopLists", $auth['topMenus'])
            ->assign("adminSideLists", $auth['sideMenus'])
            ->assign("icespageShowCss", "index")
            ->addLinks([
                $this->config['view_assets'] . "/js/icesui/core.js",
                $this->config['view_assets'] . "/js/icesui/site-configs.js",
                $this->config['view_assets'] . "/js/icesui/components.js",
                $this->config['view_assets'] . "/vendor/layer/layer.js",
            ], 'prescript')
            ->render("manage/index");
    }

    /**
     * @title 后台登录界面
     * @description 后台登录调用的接口, 网址可以自己去设置, 通过配置icesui.config.manage下面的title/span/url来控制标题,小标题,和提交网址
     * @createtime: 2018/1/10 00:20
     * @return string html内容
     * @throws \Exception
     */
    function login(){
        return $this->view->fetch("manage/login", [
            'title' => $this->config['manage']['title'],
            'span' => $this->config['manage']['span'],
            'url' => $this->config['manage']['post'],
        ], [
            'tpl_replace_string' => [
                "__ASSETS__" => $this->config['view_assets']
            ]
        ]);
    }

    /**
     * @title 默认login界面提交过来验证的方法
     * @description 验证账号密码的方法, 可以通过配置icesui.config.manage.afterLogin为function来设置登录后操作
     * @createtime: 2018/1/10 00:21
     * @param string $username 用户登录名,手机号或登录账号 true '' ''
     * @param string $password 用户密码,前端经过base64加密,后端需要解密 true '' ''
     * @param string $verfiycode 验证码 true '' ''
     * @return string {code: 0|1, msg: url|message}
     */
    public function doLogin($username, $password, $verfiycode){
        if(!captcha_check($verfiycode)){
            $this->error("验证码不正确");
        }
        $result = Auth::instance()->checkPassword($username, base64_decode($password), $this->config['manage']['afterLogin']);
        if($result['code'] == 1){
            $this->success($this->config['manage']['url']);
        }else{
            $this->error($result['msg']);
        }
    }

    /**
     * @title 退出登录
     * @description 退出登录的对应action
     * @createtime: 2018/1/10 00:25
     * @return string 重定向到icesui.config.manage.get定义的网址
     */
    public function logout(){
        session('manager', null);
        $this->redirect($this->config['manage']['get']);
    }

    /**
     * @title 设置主题需要的action
     * @description 设置主题需要的action
     * @createtime: 2018/1/10 00:26
     * @return string
     */
    function theme(){
        return $this->render("manage/theme");
    }

    /**
     * @title welcome
     * @description welcome界面
     * @createtime: 2018/1/10 00:26
     * @param string $welcomeurl
     * @return string
     */
    function welcome($welcomeurl = "manage/welcome")
    {
        return $this->render($welcomeurl);
    }

    /**
     * @title 设置皮肤的接口
     * @description 这个接口对应两个功能,一个是display/Save, 一个是display/reset, 进行设置和清除
     * @url /icesui/display/save
     * @createtime: 2018/1/10 00:28
     * @return string {code: 0|1, msg: message}
     */
    function displaySave(){
        $post = input('post.');
        $flag = db("ices_auth_user")->where('id', session("manager.id"))->update([
            'theme' => json_encode($post),
        ]);
        if($flag){
            $this->success("更新成功");
        }else{
            $this->error("更新失败");
        }
    }
}
