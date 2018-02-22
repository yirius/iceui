<?php
/**
 * User: Yirius
 * Date: 2017/11/13
 * Time: 17:07
 */

namespace icesui;


use icesui\Builder\FormBuilder;
use icesui\Builder\ManageBuilder;
use icesui\extend\Auth;
use icesui\Builder\TableBuilder;
use think\Exception;
use think\facade\Config;
use think\facade\Env;
use think\facade\Request;
use think\View;

class IBuilder
{
    protected $request;
    protected $view;
    protected static $instance = null;

    protected $mimeType = [
        'xml'   => 'application/xml,text/xml,application/x-xml',
        'json'  => 'application/json,text/x-json,application/jsonrequest,text/json',
        'js'    => 'text/javascript,application/javascript,application/x-javascript',
        'css'   => 'text/css',
        'rss'   => 'application/rss+xml',
        'yaml'  => 'application/x-yaml,text/yaml',
        'atom'  => 'application/atom+xml',
        'pdf'   => 'application/pdf',
        'text'  => 'text/plain',
        'image' => 'image/png,image/jpg,image/jpeg,image/pjpeg,image/gif,image/webp,image/*',
        'csv'   => 'text/csv',
        'html'  => 'text/html,application/xhtml+xml,*/*',
        'svg'   => 'image/svg+xml'
    ];

    public $config = [
        'home_path' => "/icesui/welcome",
        'view_assets' => "/icesui/assets",
        'asset_path' => __DIR__ . DS . 'assets' . DS,
        'view_path' => __DIR__ . DS . "view" .DS,
        'links' => [
            'style' => [],
            'prescript' => [],
            'script' => []
        ],
        'manage' => [
            'url' => "/manage",
            'get' => "/icesui/login",
            'post' => "/icesui/doLogin",
            'out' => "/icesui/logout",
            'title' => 'icesui后台框架 for tp5.1',
            'span' => 'made by Yirius',
            'afterLogin' => ''
        ]
    ];

    /**
     * 侧边内容
     * @type array
     */
    protected $icesAside = [];
    protected $icesAsidePath = "pub/aside";

    /**
     * IcesBuilder constructor.
     */
    function __construct()
    {
        //整合两个配置项
        $icesuiConfig = config("icesui.config");
        if(empty($icesuiConfig)) $icesuiConfig = [];
        $this->config = array_merge($this->config, $icesuiConfig);

        $this->_init();

        $this->view =  new View();
        $this->view->init(array_merge(config("template."), [
            'view_path' => $this->config['view_path']
        ]));
    }

    /**
     * @title 自定义的初始化
     * @description 自定义的初始化,在合并config之后,渲染view之前,利用这个来避免多次__constract
     * @createtime: 2018/1/9 23:16
     */
    protected function _init(){}

    /**
     * @title 常驻内存的初始化
     * @description 用insatance初始化,所有的调用都只会生成一次class
     * @createtime: 2018/1/9 23:13
     * @return $this
     */
    public static function instance(){
        if(empty(self::$instance)){
            self::$instance = new static();
        }
        return self::$instance;
    }

    /**
     * @title 显示模板
     * @description 显示html模板的内容,会启用layout,同时开启chcha到icesui这个目录
     * @param string $name 指定去渲染哪一个html模板 true index/index 自己定义的html模板
     * @param array $vars 需要assign的参数 false [] []
     * @param array $replace 需要去替换的字段,会自动合并__ASSETS__到指定目录 false [] []
     * @param array $config 配置参数,一般无需设置 false [] []
     * @return string 返回的是生成html
     * @throws \Exception
     */
    public function render($name, $vars = [], $replace = [], $config = [])
    {
        $replace = array_merge($replace, [
            'tpl_replace_string' => [
                "__ASSETS__" => $this->config['view_assets']
            ]
        ]);
        $this->view->assign("_icesConfig", $this->config);
        $this->view->engine->config("cache_path", Env::get('runtime_path').DS."icesui".DS);
        $this->view->engine->layout("layout");
        return $this->view
            ->assign("_icesAside", $this->icesAside)
            ->assign("_icesAsidePath", $this->icesAsidePath)
            ->assign("icesTheme", session("managerTheme"))
            ->fetch($name, $vars, $replace, $config);
    }

    /**
     * @title 设置界面标题
     * @description 设置界面的标题,Aside上方和左侧的
     * @createtime: 2018/1/9 15:34
     * @param string $pageTitle 设置界面的标题,大字显示 true '' ''
     * @param string $header 设置右侧的html文字 false '' ''
     * @return $this
     */
    public function setPageTitle($pageTitle, $header = ''){
        $this->assign("_icesPanel", [
            'title' => $pageTitle,
            'header' => $header
        ]);
        return $this;
    }

    /**
     * @title curd的assign操作
     * @createtime: 17/4/29 16:50
     * @param string $name
     * @param string $title
     * @return $this
     */
    public function assign($name, $title){
        $this->view->assign($name, $title);
        return $this;
    }

    /**
     * @title 添加左侧侧边栏
     * @description 添加左侧侧边栏,
     * @createtime: 2018/1/9 23:19
     * @param string $text 标题,也可以是一个数组,格式addAside的参数一致 true [] []
     * @param string $href 跳转的网址 true|如果text是数组这个就可以不写 null ''
     * @param bool $active 是否是活跃的,就是是否有底色 false false true|false
     * @param bool $iframe 是否是直接打开界面 true true true|false
     * @return $this
     */
    public function addAside($text, $href = null, $active = false, $iframe = true){
        if(is_array($text)){
            foreach($text as $i => $v){
                $this->icesAside[] = [
                    'text' => $v['text'],
                    'href' => $v['href'],
                    'active' => empty($v['active'])?false:true,
                    'iframe' => empty($v['iframe'])?false:true,
                ];
            }
        }else{
            $this->icesAside[] = [
                'text' => $text,
                'href' => $href,
                'active' => empty($active)?false:true,
                'iframe' => empty($iframe)?false:true
            ];
        }
        return $this;
    }

    /**
     * @title 设置侧边的模板样式
     * @description 设置侧边的模板样式,可以自定义模板样式
     * @createtime: 2018/1/19 14:18
     * @param string $path 需要包含进来的路径 true manage@setting/name类似
     * @return $this
     */
    public function setAside($path){
        $this->icesAsidePath = $path;
        return $this;
    }

    /**
     * @title 生成instance来初始化,暂时废弃
     * @description 利用make来快速初始化三个类型
     * @createtime: 2018/1/9 23:22
     * @param string $type
     * @return $this
     * @throws Exception
     */
    public static function make($type = ''){
        if($type == '')
            $type = "manage";

        if(!in_array($type, ['manage', 'table', 'form'])){
            throw new Exception($type . '构建器不存在', 8002);
        }

        if($type == "manage"){
            return ManageBuilder::instance();
        }else if($type == "table"){
            return TableBuilder::instance();
        }else{
            return FormBuilder::instance();
        }
    }


    /**
     * @title 添加三个类型的文件
     * @description 用来添加自定义的css和js文件
     * @createtime: 2018/1/9 23:22
     * @param string $files 可以形如$this->config['view_assets']."vendor/jquery/jquery.min.js" true|可以是数组 [] []
     * @param string $type 三个类型的判断,默认是style false|在要添加的是css的情况下,否则是true style 【style】【script】【prescript(head标签内js)】
     * @return $this
     */
    public function addLinks($files, $type = "style"){
        if(is_array($files)){
            $this->config['links'][$type] = array_merge($this->config['links'][$type], $files);
        }else{
            $this->config['links'][$type][] = $files;
        }
        array_unique($this->config['links'][$type]);
        return $this;
    }

    /**
     * @title 获取到所有需要连接的资源文件
     * @description 获取到所有需要连接的资源文件
     * @createtime: 2018/2/22 13:30
     * @return mixed
     */
    public function getLinks(){
        return $this->config['links'];
    }

    /**
     * @title 获取资源文件的列表
     * @description 获取资源文件,可以直接访问icesui/assets/vendor/jquery/jquery.min.js来获取
     * @createtime: 2018/1/9 23:27
     * @return string 解析完成的资源
     */
    public function assets()
    {
        $this->request = app("request");
        $path = str_replace("icesui/assets/", "", $this->request->pathinfo());
        $ext = $this->request->ext();
        if($ext)
        {
            $type= "text/html";
            $content = file_get_contents($this->config['asset_path'].$path);
            if(array_key_exists($ext, $this->mimeType))
            {
                $type = $this->mimeType[$ext];
            }
            return response($content, 200, ['Content-Length' => strlen($content)])->contentType($type);
        }
    }
}
