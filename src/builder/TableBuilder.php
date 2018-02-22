<?php
/**
 * User: Yirius
 * Date: 2017/12/2
 * Time: 15:18
 */

namespace icesui\Builder;


use icesui\IBuilder;

class TableBuilder extends IBuilder
{
    /**
     * table's columns to show
     * @type array
     */
    protected $columns = [];

    /**
     * if the coder add the detail control, then this should be shown
     * @type string
     */
    protected $columnsDetail = "";

    /**
     * this string control the table's left-top buttons
     * @type string
     */
    protected $leftBtns = "";

    /**
     * @title 添加表格里的每一列
     * @description 在表格添加一个thead里面的th比标签
     * @createtime: 2018/1/10 13:42
     * @param string $title 上方显示的标题 true '' ''
     * @param string $name 对应的字段名称 true|如果需要进行渲染,那么可以为null null ''
     * @param bool $sortble 是否可以排序 false|如果有渲染最好不要排序 false false|true
     * @param string $render 进行渲染的参数,默认被function(data,type,objects,setting){自己输入的内容,推荐用<<<HTML}包裹 false '' ''
     * @param int $width 宽度,可以不写 false '' ''
     * @param string $class 款格样式 false '' ''
     * @param string $defaultcontent 默认的内容 false '' ''
     * @return \icesui\Builder\TableBuilder
     */
    public function addTableColmun($title, $name = null, $sortble = true, $render = null, $width = null, $class = null, $defaultcontent = null){
        $temp = [
            'title' => $title,
            'data' => $name,
            'sortable' => $sortble
        ];
        if(!empty($render)) $temp['render'] = $render;
        if(!empty($width)) $temp['width'] = $width;
        if(!empty($defaultcontent)) $temp['defaultContent'] = $defaultcontent;
        if(!empty($class)) $temp['class'] = $class;
        $this->columns[] = $temp;
        return $this;
    }

    /**
     * @title 设置每一列点击开之后的详情
     * @description 利用table等html来设置变革点击开之后的详情
     * @createtime: 2018/1/3 12:56
     * @param string $detail 列前方添加一个按钮,点击可以展开,内容自定义 true '' ''
     * @return \icesui\Builder\TableBuilder
     */
    public function addColumnsDetail($detail){
        $this->columns = array_merge([
            [
                'class' => 'details-control',
                'orderable' => false,
                'data' => "null",
                'defaultContent' => '',
                'width' => "40"
            ]
        ], $this->columns);
        $this->columnsDetail = $detail;
        return $this;
    }

    protected $_icesFormInputs = [];
    protected $_icesFormControls = "empty";

    /**
     * @title setSearchForm
     * @description
     * @createtime: 2018/1/10 14:18
     * @param \icesui\Builder\FormBuilder $formBuilder 输入一个FormBuilder来格式化输出 true '' ''
     * @return \icesui\Builder\TableBuilder
     */
    public function setSearchForm(FormBuilder $formBuilder){
        $this->_icesFormInputs = $formBuilder->getFormInputs();
        $this->_icesFormControls = $formBuilder->getFormControl();
        foreach($formBuilder->getLinks() as $i => $v){
            $this->addLinks($v, $i);
        }
        return $this;
    }

    /**
     * @title 设置表格上方的小按钮
     * @description 设置表格上方的小按钮,比如删除等等
     * @createtime: 2018/1/25 16:19
     * @param string $html 用来填写html的样式 true '' ''
     * @return $this
     */
    public function setTableBtn($html){
        if($html == "delete"){
            //如果是删除,那就默认一个
            $this->leftBtns.='<a class="btn btn-danger btn-sm" disabled="disabled" id="icesdataTableDelete" style="margin-right: 15px">删除</a>';
        }else{
            $this->leftBtns.= $html;
        }
        return $this;
    }

    /**
     * @title 获取到table界面
     * @description 获取到渲染好的table界面,html内容
     * @createtime: 2018/1/10 14:10
     * @return string
     */
    public function table(){
        $this->addLinks([
            $this->config['view_assets'] . "/vendor/dataTable/dataTables.bootstrap.css",
            $this->config['view_assets'] . "/vendor/dataTable/dataTables.responsive.css",
            $this->config['view_assets'] . "/vendor/dataTable/buttons/buttons.dataTables.min.css",
        ])->addLinks([
            $this->config['view_assets'] . "/vendor/dataTable/jquery.dataTables.min.js",
            $this->config['view_assets'] . "/vendor/dataTable/dataTables.bootstrap.min.js",
            $this->config['view_assets'] . "/vendor/dataTable/dataTables.responsive.min.js",
            $this->config['view_assets'] . "/vendor/dataTable/buttons/dataTables.buttons.min.js",
            $this->config['view_assets'] . "/vendor/dataTable/buttons/buttons.bootstrap.min.js",
            $this->config['view_assets'] . "/vendor/dataTable/buttons/buttons.html5.min.js",
            $this->config['view_assets'] . "/vendor/dataTable/buttons/jszip.min.js",
            $this->config['view_assets'] . '/js/icesui/app.js'
        ], "script");
        return $this
            ->assign("_icesTableColumns", $this->columns)
            ->assign("_icesTableColumnsDetail", $this->columnsDetail)
            ->assign("_icesTableBtn", $this->leftBtns)
            ->assign("_icesFormInputs", $this->_icesFormInputs)
            ->assign("_icesFormControls", $this->_icesFormControls)
            ->render("table/index");
    }
}
