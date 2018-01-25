<?php
/**
 * User: Yirius
 * Date: 2018/1/1
 * Time: 20:03
 */

namespace icesui\extend;


use think\Controller;

class MgController extends Controller
{
    protected function _initialize()
    {
        $canView = Auth::instance()->checkUrl(session("manager.id"));
        if($canView === false){
            $this->error("对不起, 您没有权限访问");
        }
    }
}
