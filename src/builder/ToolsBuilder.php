<?php
/**
 * User: Yirius
 * Date: 2018/1/7
 * Time: 21:44
 */

namespace icesui\Builder;

use think\Controller;
use think\facade\Env;
use think\File;

class ToolsBuilder extends Controller
{
    protected $tools_config = [
        'config' => [
            'imageSize' => "2048000",
            'imageExt' => "jpg,png,gif,bmp,jpeg",
            'videoSize' => "102400000",
            'videoExt' => "flv,swf,mkv,avi,rm,rmvb,mpeg,mpg,ogg,ogv,mov,wmv,mp4,webm,mp3,wav,mid",
            'fileSize' => "51200000",
            'fileExt' => "rar,zip,tar,gz,7z,bz2,cab,iso,doc,docx,xls,xlsx,ppt,pptx,pdf,txt,md,xml",
            'prefix' => "/uploads/",
            'path' =>  '',
            'scraw' => [
                'prefix' => "/uploads/scraw/",
                'path' => '',
                'ext' => "jpg"
            ]
        ],
        'afterUpload' => ''
    ];

    function __construct()
    {
        config("default_return_type", "json");
        $config = config('icesui.upload');
        if(empty($config)){
            $config = [];
        }
        $this->tools_config = array_merge($this->tools_config, $config);
        parent::__construct();
    }

    protected function getConfig($name){
        if(!empty($this->tools_config['config'][$name])){
            return $this->tools_config['config'][$name];
        }else{
            return "";
        }
    }

    /**
     * 对方扩展的上传方法
     * @createtime: 2018/1/8 21:50
     * @return array
     */
    public function upload(){
        $result = $this->_upload($this->getConfig('imageSize'), $this->getConfig('imageExt'));
        if(empty($result['url'])){
            return ['code' => 0, 'msg' => $result['state']];
        }else{
            return ['code' => 1, 'data' => $result['url']];
        }
    }

    /**
     * 这个方法是底层的上传方法,用来验证格式和其他参数等等
     * @createtime: 2018/1/8 21:36
     * @param $path
     * @param string $size
     * @param string $exts
     * @return array
     */
    private function _upload($size = "2000000", $exts = "png,jpg,jpeg,gif,bmp"){
        $file = $this->request->file("upfile");
        $info = $file
            ->validate(['size' => $size,'ext' => $exts])
            ->move($this->getConfig("path"));
        if($info){
            $result = [
                "state" => "SUCCESS",
                "url" => $this->getConfig("prefix") . str_replace("\\", "/", $info->getSaveName()),
                "title" => $info->getfilename(),
                "original" => $info->getBasename(),
                "mime" => $info->getMime(),
                "type" => ".". $info->getExtension(),
                "size" => $info->getSize()
            ];
            /**
             * 在这里设置一下上传成功之后的某些可能的回调,比如缩小图片等等
             */
            if($this->tools_config['afterUpload'] instanceof \Closure){
                call($this->tools_config['afterUpload'], ['data' => $result]);
            }
            return $result;
        }else{
            return ['state' => $file->getError()];
        }
    }

    /**
     * 如果是base64的文件上传,就用这个方法
     * @createtime: 2018/1/8 22:04
     * @return array
     */
    private function _base64(){
        $base64Data = $this->request->post("upfile");
        $img = base64_decode($base64Data);
        $scrawconfig = $this->getConfig("scraw");
        $filename = md5($img) . "." . $scrawconfig['ext'];
        if(file_put_contents($scrawconfig['path'] . $filename, $img)){
            $result = [
                "state" => "SUCCESS",
                "url" => $scrawconfig['prefix'] . (str_replace("\\", "/", $filename)),
                "title" => $filename,
                "original" => $filename,
                "mime" => "",
                "type" => "." . $scrawconfig['ext'],
                "size" => strlen($img)
            ];
            if($this->tools_config['afterUpload'] instanceof \Closure){
                call($this->tools_config['afterUpload'], ['data' => $result]);
            }
            return $result;
        }else{
            return ['state' => "涂鸦上传失败"];
        }
    }

    public function ueditor($action){
        $result = ['state' => "上传出现了问题"];
        switch ($action) {
            case 'config':
                $result = json_decode(preg_replace("/\/\*[\s\S]+?\*\//", "", file_get_contents(dirname(__DIR__)."/assets/vendor/ueditor/config.json")), true);
                break;
            case 'uploadimage':
                /* 上传图片 */
                $result = $this->_upload($this->getConfig("imageSize"), $this->getConfig("imageExt"));
                break;
            case 'uploadscrawl':
                /* 上传涂鸦 */
                $result = $this->_base64();
                break;
            case 'uploadvideo':
                /* 上传视频 */
                $result = $this->_upload($this->getConfig("videoSize"), $this->getConfig("videoExt"));
                break;
            case 'uploadfile':
                /* 上传文件 */
                $result = $this->_upload($this->getConfig("fileSize"), $this->getConfig("fileExt"));
                break;
        }
        return $result;
    }
}
