ICESUI for thinkphp 5.1
====
icesui是一个针对于thinkphp5.1版本的快速开发后台框架,拥有较为优美的后台样式(优化了手机端)
----
同时集成了权限管理和管理员管理等功能,并且开发方式类似于OneThink里面的一些自定义方法
----
如果使用过海豚框架就会对这种开发方式有一些了解
----

icesui针对于thinkphp5.1做了如下
---
1. 精美的后台样式和手机样式
2. 内置了FormBuilder和TableBuilder可以用来针对性的快速开发表单和列表界面
3. 自定义界面样式和组件

使用方法 composer require yirius/icesui#
===
功能介绍(附带使用方法)
---

1. 目录简介  
---src  
------assets/使用的所有资源文件  
---------css/存放所有的css文件  
---------fonts/存放所有的字体文件  
---------images/存放所有使用到的图片  
---------js/存放使用到的js  
---------vendor/所有使用的其他插件包  
转入2详细讲解  
------builder/  
---------FormBuilder.php 表单生成助手  
---------ManageBuilder.php 管理界面生成助手  
---------TableBuilder.php 表格生成助手  
---------ToolsBuilder.php 工具生成助手  
转入其他详细讲解  
------controller/  
---------Setting.php 后台的权限管理和设置对应的类  
转入3详细讲解  
------extend/  
---------Auth.php 权限管理核心文件  
---------MgController.php 所有后台文件都需要继承的  
---------Model.php 所有模型类需要继承的文件  
---------Tools.php 工具类文件  
php think使用的命令行  
------icescommand/  
---------Assets.php  
---------Config.php  
---------Init.php  
后台框架使用的模型  
------model/  
---------AuthGroup.php  
---------AuthRule.php  
---------AuthUser.php  
后台所有使用的界面样式  
------view/  
---------form/  
---------manage/  
---------pub/  
---------setting/  
---------table/  
---------empty.html  
---------layout.html  
其他使用的文件  
------config.php  
------helper.php  
------IBuilder.php  
2. Builder类库简介  
*  注明: 在thinkphp5.1内,如果需要进行一些自己的配置, 或者希望通过apache等加载css和js, 则需要运行如下命令  
*  具体使用请查看doc  
```
init完成后,初始化后台登录地址为/icesui/manage,账号为12345678912,密码为123456
php think icescommand:init (该命令为初始化所有的数据库文件,在运行该命令前,请先配置database)
php think icescommand:assets (该命令为拷贝所有的assets到public/static/文件夹)
php think icescommand:config (该命令为拷贝config.php到config/icesui.php,可以进行自定义配置,配置项可以打开icesui.php之后查看)
```
---1. ManageBuilder.php(这个类库控制了后台的登录界面/主题界面/框架界面)  
*  注: 所有后台的登录身份记录使用的是session("manager")  
```
->index() 该方法调用之后会首先判断是否登录,如果尚未登录则会跳转到icesui.php里面配置的manage.get配置的网址
->login() 调用该方法之后会显示出来登录界面
->doLogin($username, $password, $verfiycode) 登录验证界面
->logout() 退出登录界面
->theme() 主题选择渲染界面
->welcome($welcomeurl = "manage/welcome") 欢迎界面
->displaySave() 主题保存界面
```
---2. FormBuilder.php  
*  具体操作,请查看doc下面的文件  
```
->setFormValue($value) 这个方法是用来设置所有表单的值
->addText 添加一个文字输入框
->addIconpicker 添加一个图标选择框
->addCheckbox 添加一个复选框
->addRadio 添加一个单选框
->addTime 添加一个时间选择器
->addTimeRange 添加一个时间区间选择
->addDate 添加一个日期选择
->addDateRange 添加一个日期区间选择
->addSelect 添加一个select选择框
->addWebUploader 添加一个文件上传
->addUeditor 添加一个富文本编辑器
->addZtree 添加一个树形选择框
->addControl 添加一个自定义控件
->getFormInputs 获取到所有已经加入的Form组件,用来做注入,在html里面include file="form/include"
->getFormControl 用来获取用户自定义控件的引入
```
*  这个组件的使用方法  
```
public function groupadd($id = 0){
        $authGroup = new AuthGroup();
        if($this->request->isPost()){
            $post = input('post.');
            if(!empty($post['isall']) && $post['isall'] == 1){
                $post['rules'] = "all";
            }
            unset($post['isall']);
            $authGroup->AutoSave($post);
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
```
---3. TableBuilder.php  
```
->addTableColmun 用来添加一列
->addColumnsDetail 用来添加一行点击之后展开的详情, objects是所有数据的值
->setSearchForm 传递FormBuilder进入Table,来设置搜索的类别
->setTableBtn 默认定义了一个delete,其他的都可以通过自己拼写html
```
*  这个组件的使用方法  
```
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
            ->setPageTitle("角色设置", "后台可登录的角色权限设置")
            ->setTableBtn(<<<HTML
<a href="/icesui/setting/groupadd" target="_blank" data-iframe class="btn btn-success btn-sm" style="margin-right: 10px;">新增</a>
HTML
            )
            ->setTableBtn("delete")
            ->table();
    }
```
---4. ToolsBuilder.php  
*  具体使用请查看doc  
3. extend文件夹内文件详解  
---1. Auth.php (这个文件是权限判断和展示文件的核心)  
```
常用的为
->checkUrl(session("manager.id"))
->getAuthList 获取用户权限列表
->getAuthMenus 获取到用户可以查看的列表
->checkPassword($username, $password, $funcs = '') 检验密码是否正确
```
---2. MgController.php  
*  所有的文件,只要是希望后台打开,并且带上权限判断的,都需要继承自MgController,系统会自动判断当前文件是否拥有权限打开  
---3. Model.php  
```
->AutoTable 自动生成table中的列表数据,自动包含分页等功能
->AutoSave 自动保存数据的功能
->AutoDelete 自动删除数据的对应方法
->AutoSelect 自动生成select和checkbox以及radio对应列表的方法
```
---4. Tools.php  
*  自定义方法  
