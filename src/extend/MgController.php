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
    protected function initialize()
    {
        $canView = Auth::instance()->checkUrl(session("manager.id"));
        if($canView === false){
            $this->error("对不起, 您没有权限访问");
        }
    }

    /**
     * @title 私有方法, 检查数组是否其中几项为空
     * @description
     * @createtime: 2018/3/19 23:15
     * @param array $arr
     * @param array $names
     */
    protected function _checkFieldEmpty($arr, $names){
        foreach($names as $i => $v){
            if(empty($arr[$i])){
                $this->error($v);
            }
        }
    }
}
