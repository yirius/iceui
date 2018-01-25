<?php
/**
 * User: Yirius
 * Date: 2017/11/13
 * Time: 16:56
 */

use think\Console;
use think\facade\Route;

defined("icesPath") or define("icesPath", __DIR__);
defined("DS") or define("DS", DIRECTORY_SEPARATOR);

Route::group('icesui', function () {
    //资源路由
    Route::get('assets', "\\icesui\\IBuilder@assets", ['deny_ext'=>'php|.htacess']);
    //后台以及welcome界面
    Route::get('manage', "\\icesui\\Builder\\ManageBuilder@index");
    Route::get('welcome', "\\icesui\\Builder\\ManageBuilder@welcome");
    //主题相关的样式
    Route::get('theme', "\\icesui\\Builder\\ManageBuilder@theme");
    Route::post('display/save', "\\icesui\\Builder\\ManageBuilder@displaySave");
    //文件上传相关
    Route::post('upload', "\\icesui\\Builder\\ToolsBuilder@upload");
    Route::any('ueditor', "\\icesui\\Builder\\ToolsBuilder@ueditor",['ext' => 'config']);
    //登录相关的设置
    Route::get('login', "\\icesui\\Builder\\ManageBuilder@login");
    Route::post('doLogin', "\\icesui\\Builder\\ManageBuilder@doLogin");
    Route::get('logout', "\\icesui\\Builder\\ManageBuilder@logout");
    //后台角色等的设置
    Route::group("setting", function(){
        Route::rule('group', '\\icesui\\controller\\setting@group');
        Route::rule('groupadd', '\\icesui\\controller\\setting@groupadd');
        Route::rule('menu', '\\icesui\\controller\\setting@menu');
    });
});

//加入console
Console::addDefaultCommands([
    "icesui\\icescommand\\init"
]);
