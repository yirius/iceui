<?php
/**
 * User: Yirius
 * Date: 2017/12/2
 * Time: 15:18
 */

namespace icesui\Builder;

use icesui\IBuilder;

class FormBuilder extends IBuilder
{
    /**
     * this array is all value for inputs to get
     * @type array
     */
    protected $formValue = [];

    /**
     * add all inputs to this array
     * @type array
     */
    protected $formInputs = [];

    protected $formControls = [];

    /**
     * @title 设置表单参数
     * @description 设置表单参数
     * @createtime: 2018/1/25 02:01
     * @param array $formValue 设置表单参数,应该在最开始设置 true '' ''
     * @return $this
     */
    public function setFormValue($formValue)
    {
        $this->formValue = $formValue;
        return $this;
    }

    /**
     * @title form的输入标准化
     * @description 为了方便扩展,使用统一的底层来添加input,所有其他配置都加入到config里
     * @createtime: 2018/1/10 00:40
     * @param string $type 输入的类型,需要自己定义的html名字对应 true '' ''
     * @param string $title 名称,label显示的 true '' ''
     * @param string $name input对应的name,提交时候使用 true '' ''
     * @param string $value input或者其他对应的value值,如果不写会自动从setvalue获取的数组中取得 false [] []
     * @param array $config 其他配置项 true [] []
     * @return null 不需要返回
     */
    protected function _common($type, $title, $name, $value = '', $config){
        $this->formInputs[] = [
            'type' => $type,
            'title' => $title,
            'name' => $name,
            'value' => empty($value)?(isset($this->formValue[$name])?$this->formValue[$name]:""):$value,
            'config' => $config
        ];
    }

    /**
     * @title 添加一个文本输入框
     * @description 添加一个文本输入框
     * @createtime: 2018/1/3 16:30
     * @param string $title input显示的标题 true '' ''
     * @param string $name input对应提交的name true '' ''
     * @param string $value 显示的值 false '' ''
     * @param string $placeholder 未输入时候的显示 false '' ''
     * @param bool $readonly 是否只读 false|默认是false,不必填,非false的值都会转化为true false false|true
     * @param string $inputclass 设置input框的样式 false '' round|input-sm|input-lg
     * @param string $class 设置form-group大小 false '' col-sm-6 col-lg-4
     * @return \icesui\Builder\FormBuilder
     */
    public function addText($title, $name, $value = '', $placeholder = '', $readonly = false, $inputclass = '', $class = 'col-sm-6 col-lg-4'){
        $this->_common("text", $title, $name, $value, [
            'class' => $class,
            'placeholder' => $placeholder,
            'inputclass' => $inputclass,
            'readonly' => empty($readonly)?false:true
        ]);
        return $this;
    }

    /**
     * @title 添加一个图标选择器
     * @description 添加一个图标选择器
     * @createtime: 2018/1/10 00:48
     * @param string $title input显示的标题 true '' ''
     * @param string $name input对应提交的name true '' ''
     * @param string $value 显示的值 false '' ''
     * @param string $placeholder 未输入时候的显示 false '' ''
     * @param bool $readonly 是否只读 false|默认是false,不必填,非false的值都会转化为true false false|true
     * @param string $class 设置form-group大小 false '' col-sm-6 col-lg-4
     * @return \icesui\Builder\FormBuilder
     */
    public function addIconpicker($title, $name, $value = '', $placeholder = '', $readonly = false, $class = 'col-sm-6 col-lg-4'){
        $this->addLinks([
            $this->config['view_assets'] . "/vendor/iconpicker/iconpicker.css",
        ])->addLinks([
            $this->config['view_assets'] . "/vendor/iconpicker/iconpicker.min.js",
        ], "script");
        $this->_common("iconpicker", $title, $name, $value, [
            'class' => $class,
            'placeholder' => $placeholder,
            'readonly' => empty($readonly)?false:true
        ]);
        return $this;
    }

    /**
     * @title 添加一个checkbox控件
     * @description 添加一个checkbox控件
     * @createtime: 2018/1/10 00:49
     * @param string $title input显示的标题 true '' ''
     * @param string $name input对应提交的name true '' ''
     * @param array $options checkbox渲染出来的列表,需要如下格式[['text'=>'1','value'=>1]] false|不写就是不显示 [] []
     * @param array $value 显示的值,需要是一个数组,比如[1,2,3] false '' ''
     * @param string $class 设置form-group大小 false '' col-sm-6 col-lg-4
     * @return \icesui\Builder\FormBuilder
     */
    public function addCheckbox($title, $name, $options = [], $value = [], $class = 'col-sm-6 col-lg-4'){

        if(empty($value)){
            if(!empty($this->formValue[$name])){
                $value = $this->formValue[$name];
            }
        }

        if(!is_array($value)){
            $value = explode(",", $value);
        }

        $this->_common("checkbox", $title, $name, $value, [
            'options' => $options,
            'class' => $class
        ]);

        return $this;
    }

    /**
     * @title 添加一个radio控件
     * @description 添加一个radio控件
     * @createtime: 2018/1/10 00:49
     * @param string $title input显示的标题 true '' ''
     * @param string $name input对应提交的name true '' ''
     * @param array $options radio渲染出来的列表,需要如下格式[['text'=>'1','value'=>1]] false|不写就是不显示 [] []
     * @param array $value 显示的值,需要是一个数组,比如[1,2,3] false '' ''
     * @param string $class 设置form-group大小 false '' col-sm-6 col-lg-4
     * @return \icesui\Builder\FormBuilder
     */
    public function addRadio($title, $name, $options = [], $value = [], $class = 'col-sm-6 col-lg-4'){

        if(empty($value)){
            if(!empty($this->formValue[$name])){
                $value = $this->formValue[$name];
            }
        }

        if(is_array($value)){
            $value = implode("", $value);
        }

        $this->_common("radio", $title, $name, $value, [
            'options' => $options,
            'class' => $class
        ]);

        return $this;
    }

    /**
     * @title 添加一个时间选择控件
     * @description 添加一个时间选择的表盘
     * @createtime: 2018/1/3 16:30
     * @param string $title input显示的标题 true '' ''
     * @param string $name input对应提交的name true '' ''
     * @param string $value 显示的值 false '' ''
     * @param bool $readonly 是否只读 false|默认是false,不必填,非false的值都会转化为true false false|true
     * @param string $class 设置form-group大小 false '' col-sm-6 col-lg-4
     * @return \icesui\Builder\FormBuilder
     */
    public function addTime($title, $name, $value = '', $readonly = false, $class = 'col-sm-6 col-lg-4'){
        $this->addLinks([
            $this->config['view_assets'] . "/vendor/clock/clockpicker.css",
        ])->addLinks([
            $this->config['view_assets'] . "/vendor/clock/bootstrap-clockpicker.min.js",
        ], "script");
        $this->_common("time", $title, $name, $value, [
            'class' => $class,
            'readonly' => empty($readonly)?false:true
        ]);
        return $this;
    }

    /**
     * @title 添加一个时间选择控件
     * @description 添加一个时间选择的表盘
     * @createtime: 2018/1/3 16:30
     * @param string $title input显示的标题 true '' ''
     * @param string $name input对应提交的name true '' ''
     * @param string $value 显示的值 false '' ''
     * @param bool $readonly 是否只读 false|默认是false,不必填,非false的值都会转化为true false false|true
     * @param string $class 设置form-group大小 false '' col-sm-6 col-lg-4
     * @return \icesui\Builder\FormBuilder
     */
    public function addTimeRange($title, $name, $value = '', $readonly = false, $class = 'col-sm-6 col-lg-4'){
        $this->addLinks([
            $this->config['view_assets'] . "/vendor/clock/clockpicker.css",
        ])->addLinks([
            $this->config['view_assets'] . "/vendor/clock/bootstrap-clockpicker.min.js",
        ], "script");
        if(!is_array($value)){
            $value = [['value' => $value],['value' => '']];
        }
        $this->_common("timerange", $title, $name, $value, [
            'class' => $class,
            'readonly' => empty($readonly)?false:true
        ]);
        return $this;
    }

    /**
     * @title 添加一个日期选择控件
     * @description 添加一个日期选择的下拉框
     * @createtime: 2018/1/3 16:30
     * @param string $title input显示的标题 true '' ''
     * @param string $name input对应提交的name true '' ''
     * @param string $value 显示的值 false '' ''
     * @param bool $readonly 是否只读 false|默认是false,不必填,非false的值都会转化为true false false|true
     * @param string $class 设置form-group大小 false '' col-sm-6 col-lg-4
     * @return \icesui\Builder\FormBuilder
     */
    public function addDate($title, $name, $value = '', $readonly = false, $class = "col-sm-6 col-lg-4"){
        $this->addLinks([
            $this->config['view_assets'] . "/vendor/datetime/bootstrap-datepicker.css",
        ])->addLinks([
            $this->config['view_assets'] . "/vendor/datetime/bootstrap-datepicker.min.js",
            $this->config['view_assets'] . "/vendor/datetime/bootstrap-datepicker.zh-CN.min.js",
        ], "script");
        $this->_common("date", $title, $name, $value, [
            'class' => $class,
            'readonly' => empty($readonly)?false:true
        ]);
        return $this;
    }

    /**
     * @title 添加一个日期区间选择控件
     * @description 添加日期区间选择控件的下拉框,这个控件给定name之后,例如daterange,会自动补充成daterangestart和daterangeend两个input
     * @createtime: 2018/1/3 16:30
     * @param string $title input显示的标题 true '' ''
     * @param string $name input对应提交的name true '' ''
     * @param array $value 显示的值,有特定要求,[['value'=>20180216,'readonly'=>1],['value'=>20180216,'readonly'=>0]] false '' ''
     * @param string $class 设置form-group大小 false '' col-sm-6 col-lg-4
     * @return \icesui\Builder\FormBuilder
     */
    public function addDateRange($title, $name, $value = '', $class = "col-sm-6 col-lg-4"){
        $this->addLinks([
            $this->config['view_assets'] . "/vendor/datetime/bootstrap-datepicker.css",
        ])->addLinks([
            $this->config['view_assets'] . "/vendor/datetime/bootstrap-datepicker.min.js",
            $this->config['view_assets'] . "/vendor/datetime/bootstrap-datepicker.zh-CN.min.js",
        ], "script");
        if(!is_array($value)){
            $value = [['value' => $value],['value' => '']];
        }
        $this->_common("daterange", $title, $name, $value, [
            'class' => $class
        ]);
        return $this;
    }

    /**
     * @title 添加一个Select控件
     * @description 添加一个select控件
     * @createtime: 2018/1/10 00:49
     * @param string $title input显示的标题 true '' ''
     * @param string $name input对应提交的name true '' ''
     * @param array $options radio渲染出来的列表,需要如下格式[['text'=>'1','value'=>1]] false|不写就是不显示 [] []
     * @param array $value 显示的值,需要是一个数组,比如[1,2,3] false '' ''
     * @param string $placeholder 默认显示值 false '' ''
     * @param bool $multiple 是否是多选 false false false|true
     * @param string $class 设置form-group大小 false '' col-sm-6|col-lg-4|select2-success
     * @return \icesui\Builder\FormBuilder
     */
    public function addSelect($title, $name, $options = [], $value = [], $placeholder = "", $multiple = false, $class = 'col-sm-6 col-lg-4 select2-success'){
        $this->addLinks([
            $this->config['view_assets'] . "/vendor/select2/select2.css",
        ])->addLinks([
            $this->config['view_assets'] . "/vendor/select2/select2.full.min.js",
            $this->config['view_assets'] . "/vendor/select2/zh-CN.min.js",
        ], "script");

        if(empty($value)){
            if(!empty($this->formValue[$name])){
                $value = $this->formValue[$name];
            }
        }

        if(!is_array($value)){
            $value = explode(",", $value);
        }

        $this->_common("select", $title, $name, $value, [
            'options' => $options,
            'class' => $class,
            'multiple' => empty($multiple)?false:true,
            'placeholder' => $placeholder
        ]);
        return $this;
    }

    /**
     * @title 添加一个文件上传插件
     * @description 添加一个文件上传插件webuploader
     * @createtime: 2018/1/10 01:04
     * @param string $title input显示的标题 true '' ''
     * @param string $name input对应提交的name true '' ''
     * @param string $value 希望显示的文件,用逗号[,]分割 false '' ''
     * @param string $class 设置form-group大小 false '' col-sm-6|col-lg-4
     * @return \icesui\Builder\FormBuilder
     */
    public function addWebUploader($title, $name, $value = '', $class = 'col-sm-12 col-lg-12'){
        $this->addLinks([
            $this->config['view_assets'] . "/vendor/webuploader/webuploader.css",
            $this->config['view_assets'] . "/vendor/webuploader/uploaderstyle.css",
        ])->addLinks([
            $this->config['view_assets'] . "/vendor/webuploader/webuploader.nolog.min.js",
            $this->config['view_assets'] . "/vendor/webuploader/upload.js",
        ], "script");
        $this->_common("webuploader", $title, $name, $value, [
            'class' => $class
        ]);
        return $this;
    }

    /**
     * @title 添加一个富文本编辑器
     * @description 添加一个富文本编辑器ueditor
     * @createtime: 2018/1/10 01:04
     * @param string $title input显示的标题 true '' ''
     * @param string $name input对应提交的name true '' ''
     * @param string $value 希望显示的内容 false '' ''
     * @param string $class 设置form-group大小 false '' col-sm-6|col-lg-4
     * @return \icesui\Builder\FormBuilder
     */
    public function addUeditor($title, $name, $value = '', $class = 'col-sm-12 col-lg-12'){
        $this->addLinks([
            $this->config['view_assets'] . "/vendor/ueditor/ueditor.min.css",
        ])->addLinks([
            $this->config['view_assets'] . "/vendor/ueditor/ueditor.config.js",
            $this->config['view_assets'] . "/vendor/ueditor/ueditor.all.min.js",
            $this->config['view_assets'] . "/vendor/ueditor/ueconfig.js",
        ], "prescript");
        $this->_common("ueditor", $title, $name, $value, [
            'class' => $class
        ]);
        return $this;
    }

    /**
     * @title 添加一个树形控件
     * @description 参数如下{id:1, pId:0, name:"[core] 基本功能 演示", open:true}
     * @createtime: 2018/2/18 00:37
     * @param string $title input显示的标题 true '' ''
     * @param string $name input对应提交的name true '' ''
     * @param array $options 对应需要显示的列表 true {id:1,pId:0,name:"[core]基本功能演示",open:true} ''
     * @param array $value
     * @param string $class
     * @return $this
     */
    public function addZtree($title, $name, $options = [], $value = [], $class = 'col-sm-4 col-lg-3'){
        $this->addLinks([
            $this->config['view_assets'] . "/vendor/ztree/bootstrapStyle.css",
        ])->addLinks([
            $this->config['view_assets'] . "/vendor/ztree/jquery.ztree.core.js",
            $this->config['view_assets'] . "/vendor/ztree/jquery.ztree.excheck.js",
//            $this->config['view_assets'] . "/vendor/ztree/jquery.ztree.exedit.js",
            $this->config['view_assets'] . "/vendor/ztree/ztree.js",
        ], "prescript");
        foreach($options as $i => $v){
            if(in_array($v['id'], $value)){
                $options[$i]['checked'] = true;
            }
        }
        $this->_common("ztree", $title, $name, is_array($value)?join(",", $value):$value, [
            'class' => $class,
            'options' => $options
        ]);
        return $this;
    }

    /**
     * @title 获取到表单的所有内容项目
     * @description 获取到表单的所有内容项目,配合assign命名为_icesFormInputs,就可以使用
     * @createtime: 2018/1/10 14:15
     * @return array
     */
    public function getFormInputs(){
        return $this->formInputs;
    }

    /**
     * @title 获取表单插件
     * @description 获取表单插件
     * @createtime: 2018/2/7 17:23
     * @return string
     */
    public function getFormControl(){
        if(empty($this->formControls)){
            $this->formControls[] = "empty";
        }
        return join(",", $this->formControls);
    }

    /**
     * @title 添加自定义控件
     * @description 添加自定义控件
     * @createtime: 2018/2/7 16:16
     * @param string $html
     * @param string $title
     * @param string $name
     * @param string $value
     * @param array $config
     * @return $this
     */
    public function addControl($html, $title, $name, $value = '', $config = []){
        $this->formInputs[] = [
            'type' => $html,
            'title' => $title,
            'name' => $name,
            'value' => empty($value)?(isset($this->formValue[$name])?$this->formValue[$name]:""):$value,
            'config' => $config
        ];
        $this->formControls[] = $html;
        return $this;
    }

    /**
     * @title 获取界面的form内容
     * @description 返回绘制完成的html
     * @createtime: 2018/1/19 15:12
     * @param string $url 设置url false|如果不设置就提交到当前网址 '' ''
     * @return string
     */
    public function form($url = ''){
        $this->addLinks([

        ])->addLinks([
            $this->config['view_assets'] . '/js/icesui/app.js'
        ], "script");

        return $this
            ->assign("_icesPostUrl", $url)
            ->assign("_icesFormInputs", $this->formInputs)
            ->assign("_icesFormControls", $this->getFormControl())
            ->render("form/index");
    }
}
