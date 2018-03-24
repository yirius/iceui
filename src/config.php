<?php
/**
 * User: Yirius
 * Date: 2017/11/13
 * Time: 16:56
 */
use think\facade\Env;
return [
    'config' => [
        'home_path' => "icesui/welcome",
        'view_assets' => "/icesui/assets",
        'links' => [
            'style' => [],
            'prescript' => [],
            'script' => []
        ],
        'manage' => [
            'url' => "/icesui/manage",
            'get' => "/icesui/login",
            'post' => "/icesui/doLogin",
            'out' => "/icesui/logout",
            'title' => 'icesui后台框架 for tp5.1',
            'span' => 'made by Yirius',
            'afterLogin' => function($userinfo, $status){

            }
        ]
    ],
    'upload' => [
        'config' => [
            'imageSize' => "2048000",
            'imageExt' => "jpg,png,gif,bmp,jpeg",
            'videoSize' => "102400000",
            'videoExt' => "flv,swf,mkv,avi,rm,rmvb,mpeg,mpg,ogg,ogv,mov,wmv,mp4,webm,mp3,wav,mid",
            'fileSize' => "51200000",
            'fileExt' => "rar,zip,tar,gz,7z,bz2,cab,iso,doc,docx,xls,xlsx,ppt,pptx,pdf,txt,md,xml",
            'prefix' => "/uploads/",
            'path' =>  Env::get("root_path") . DS . 'public' . DS . 'uploads' . DS,
            'scraw' => [
                'prefix' => "/uploads/scraw/",
                'path' => Env::get("root_path") . DS . 'public' . DS . 'uploads' . DS . "scraw" . DS,
                'ext' => "jpg"
            ]
        ],
        'afterUpload' => function($data){

        }
    ],
    'auth' => [
        'auth_on' => 1, // 权限开关
        'auth_type' => 1, // 认证方式，1为实时认证；2为登录认证。
        'auth_group' => 'ices_auth_group', // 用户组数据表名
        'auth_group_access' => 'ices_auth_group_access', // 用户-用户组关系表
        'auth_rule' => 'ices_auth_rule', // 权限规则表
        'auth_user' => 'ices_auth_user', // 用户信息表
    ]
];
