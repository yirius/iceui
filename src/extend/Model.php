<?php
/**
 * User: Yirius
 * Date: 2018/1/3
 * Time: 14:40
 */

namespace icesui\extend;

use think\Validate;
use traits\controller\Jump;

class Model extends \think\Model
{
    use Jump;
    protected $autoWriteTimestamp = 'datetime';

    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';

    protected $autoTimeField = [''];
    protected $disabled_field = [];
    protected $disabled_id = [];

    /**
     * @title 自动返回列表所需要的一系列参数
     * @description 自动返回列表所需要的一系列参数
     * @createtime: 2018/2/18 15:36
     * @param string $field 传入的需要读取的字段 false * ''
     * @param array $where 查询的数组条件 false [] ''
     * @param array $with 需要联合查询的表 false [] ''
     * @param string $ordersort 排序的字段 false id ''
     * @param string $group 聚合查询的条件 false null ''
     * @param string $where_extra 字符串的自定义查询条件 false '' ''
     * @param \Closure $eachFuns 针对于每一个数组的循环 false null ''
     * @param null|int $cacheName 是否需要数据的缓存 false null ''
     * @param null|int $cacheSeconds 是否需要数据的缓存,需要的话写上时间 false null ''
     * @return array
     */
    public function AutoTable($field = "*", $where = [], $with = [], $ordersort = "id", $group = null, $where_extra = "", $eachFuns = null, $cacheName = null, $cacheSeconds = 0){

        //开始接受ajax过来的table
        $order = input("post.order", "desc");
        $limit = input("post.length", 10);
        $offset = input("post.start", 0)/$limit + 1;
        //判断sort
        $sort = input("post.sort", $ordersort);

        if($searchtext = input("post.search", null)){
            if(!empty($search_fields))
                $where[$search_fields] = array("like","%".$searchtext."%");
        }

        $_this = $this;
        //如果存在联表查询,就先绑定a
        if(!empty($with)){
            $_this = $this->alias('a')->join($with);
            $sort = "a.".$sort;
        }
        /**
         * 如果需要加上缓存, 就直接加上
         */
        if(!empty($cacheName)){
            $_this = $_this->cache($cacheName, $cacheSeconds);
        }

        $paginate = $_this
            ->where($where)
            ->where($where_extra)
            ->field($field)
            ->order($sort." ".$order)
            ->group($group)//todo group在当前情况下会存在分页输出错误
            ->paginate($limit, false, [
                'page' => $offset
            ]);

        $count = $paginate->total();
        if($eachFuns instanceof \Closure){
            $paginate->each($eachFuns);
        }
        $list = $paginate->items();

        return [
            "recordsTotal" => $count,
            "recordsFiltered" => $count,
            "data" => $list
        ];
    }

    /**
     * @title 自动保存数据
     * @description 自动保存数据的对应方法
     * @createtime: 2018/2/18 15:36
     * @param array $add 新增数据的数组 true [] ''
     * @param array $where 针对性的更新条件,如果没有传入,会自动判断网址是否存在主键 false [] ''
     * @param \Closure $success 如果存在success是一个匿名函数,就执行,并以返回结果作为返回语句 false null ''
     * @param Validate|null $valiate 验证器,需要自己new出来 false null ''
     */
    public function AutoSave($add, $where = [],\Closure $success = null, Validate $valiate = null){

        $pk = $this->getPk();//获取主键
        if(is_array($pk))//获取到如果是数组,就取第一个
            $pk = $pk[0];

        $pk_value = input("param.".$pk, 0);//获取get或者post过来的主键值
        if($pk_value === 0 && isset($add[$pk]))
            $pk_value = $add[$pk];
        elseif($pk_value > 0)
            $add[$pk] = $pk_value;

        //如果where不存在, 就不判定
        if(!isset($where)){
            if(empty($pk_value))
                $where = [];
            else
                $where = [$pk => $pk_value];
        }

        //如果where不为空, 吧add里面的pk置为空
        if(!empty($where) && $where[$pk] == 0){
            $where = [];
            unset($add[$pk]);
        }

        //如果验证器存在的话,就验证一下数据
        if(!empty($valiate)){
            if(!$valiate->check($add)){
                $this->error($valiate->getError());
            }
        }

        $returnmsg = "数据提交成功";
        //自动保存
        $result = $this->save($add, $where);//->auto($auto_name)
        if($result){
            $edit_id = empty($where[$pk])?$this->getLastInsID():$where[$pk];
            if($success instanceof \Closure) {
                // 执行闭包,闭包返回数据
                $returnmsg = $success($edit_id);
                if(empty($returnmsg)){
                    $returnmsg = "数据提交成功";
                }
            }
            $this->success($returnmsg, null, [
                'id' => $edit_id
            ]);
        }else{
            if($error = $this->getError()){
                $this->error($error);
            }else{
                $this->error("您尚未进行任何修改,提交无效");
            }
        }
    }

    /**
     * @title 自动删除功能
     * @description 根据isDelete判断是否进行删除
     * @createtime: 2018/2/18 21:18
     * @param \Closure $afterDelete 删除完成之后执行的数据 false null ''
     * @param array $notDelete 指定不可删除的数据 false [] ''
     * @param array $ids 指定需要删除的数据,如果不存在从提交数据的ids参数里获取,在用逗号分隔 false [] ''
     * @param string $pkField 指定需要删除的主键,默认为id false id ''
     */
    public function AutoDelete(\Closure $afterDelete = null, $notDelete = [], $ids = [], $pkField = "id"){

        //如果不存在指定的数据,那就从提交的数据中按照逗号分割出来
        if(empty($ids)){
            $ids = input('param.')['ids'];
            if(!empty($ids))
                $ids = explode(",", $ids);
        }
        //记录下来所有删除失败的数据
        $errorDelete = [];
        foreach($ids as $i => $v){
            if(!in_array($v, $notDelete)){
                $flag = $this->where($pkField, $v)->delete();
                if(!$flag)
                    $errorDelete[] = $v;
            }
        }
        //如果删除失败数据为空,那就显示删除成功
        if(empty($errorDelete)){
            if($afterDelete instanceof \Closure){
                $afterDelete(1, $errorDelete);
            }
            $this->success('删除数据成功');
        }
        else{
            if($afterDelete instanceof \Closure){
                $afterDelete(0, $errorDelete);
            }
            $this->error(join(",", $errorDelete)."删除失败");
        }
    }

    /**
     * @title 自动生成一个查询的列表
     * @description 自动生成一个查询的列表
     * @createtime: 2018/2/18 12:33
     * @param string $field 需要查询的字段对应列表,最后数据应该为text/value false '' ''
     * @param array $where 查询的条件 false [] ''
     * @param array $with 联合查询的条件 false [] ''
     * @param \Closure $foreachItem 闭包匿名函数进行每一个循环 false null ''
     * @return array
     */
    public function AutoSelect($field = "text as text, id as value", $where = [], $with = [], \Closure $foreachItem = null){
        if(!empty($with)){
            $result = $this->field($field)->alias("a")->where($where)->with($with)->select()->toArray();
        }else{
            $result = $this->field($field)->where($where)->select()->toArray();
        }
        if($foreachItem instanceof \Closure){
            $result = $foreachItem($result);
        }
        return $result;
    }
}
