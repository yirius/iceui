<?php
/**
 * User: Yirius
 * Date: 2018/1/7
 * Time: 22:20
 */

namespace icesui\icescommand;

use think\console\Command;
use think\console\Input;
use think\console\Output;

class Init extends Command
{
    protected function configure()
    {
        $this->setName('icescommand:init')->setDescription('this command is to create database and add the icesui.php to config path');
    }

    protected function execute(Input $input, Output $output)
    {
        $output->comment("set database names");
        db()->query('SET NAMES utf8;');
        $output->comment("create auth_group");
        db()->query('DROP TABLE IF EXISTS `ices_auth_group`;');
        db()->query("
CREATE TABLE `ices_auth_group` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `title` char(100) NOT NULL DEFAULT '',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `rules` longtext NOT NULL,
  `createtime` datetime DEFAULT NULL,
  `updatetime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;");
        $output->comment("insert auth_group default rows");
        db()->query("INSERT INTO `ices_auth_group` VALUES ('1', '超级管理员', '1', 'all', '2017-05-09 20:39:20', '2017-05-09 20:39:14');");
        $output->comment("create auth_group end, start create auth_rule");
        db()->query('DROP TABLE IF EXISTS `ices_auth_rule`;');
        db()->query("CREATE TABLE `ices_auth_rule` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(80) NOT NULL DEFAULT '',
  `text` char(20) NOT NULL DEFAULT '',
  `icon` varchar(100) DEFAULT NULL,
  `parentid` int(11) NOT NULL DEFAULT '0',
  `type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '//1是路由认证，2是界面认证，3是其他补充认证',
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `condition` char(100) NOT NULL DEFAULT '',
  `createtime` datetime DEFAULT NULL,
  `updatetime` datetime DEFAULT NULL,
  `list_order` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;");
        $output->comment("insert auth_rule default rows");
        db()->query("INSERT INTO `ices_auth_rule` VALUES ('1', '/manage', '系统设置', 'wb-settings', '0', '1', '1', '', '2017-05-09 11:07:27', '2018-02-17 22:29:39', '1'), ('2', '/welcome', '后台欢迎界面', null, '1', '3', '1', '', '2017-05-09 11:16:09', null, '0'), ('3', '/icesui/setting', '框架设置', 'fa-bars', '1', '2', '1', '', '2018-01-01 20:17:01', '2018-02-17 11:07:45', '2'), ('4', '/icesui/setting/group', '角色设置', null, '3', '2', '1', '', '2018-01-27 15:45:42', '2018-02-17 11:07:45', '3'), ('5', '/icesui/setting/groupadd', '角色编辑', 'wb-settings', '4', '3', '1', '', '2018-02-18 13:19:02', '2018-02-18 13:19:04', '0'), ('6', '/icesui/setting/menu', '菜单设置', 'wb-settings', '3', '2', '1', '', '2018-01-19 14:54:18', '2018-02-17 11:07:45', '4'), ('7', '/icesui/setting/domenu', '菜单编辑', 'wb-settings', '6', '3', '1', '', '2018-02-18 13:20:15', '2018-02-18 13:20:16', '0'), ('8', '/icesui/setting/addtopmenu', '添加顶部菜单', 'wb-settings', '6', '3', '1', '', '2018-02-18 13:20:55', '2018-02-18 13:20:57', '0'), ('9', '/theme', '主题管理', 'wb-settings', '1', '3', '1', '', '2018-02-18 15:50:54', '2018-02-18 15:50:56', '0'), ('10', '/icesui/setting/users', '管理员设置', 'wb-settings', '3', '2', '1', '', '2018-02-18 12:20:28', '2018-02-18 12:20:30', '0'), ('11', '/icesui/setting/usersadd', '管理员编辑', 'wb-settings', '10', '3', '1', '', '2018-02-18 12:50:52', '2018-02-18 12:50:53', '0');");
        $output->comment("create auth_rule end, start create auth_user");
        db()->query('DROP TABLE IF EXISTS `ices_auth_user`;');
        db()->query("CREATE TABLE `ices_auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `phone` bigint(11) DEFAULT NULL,
  `realname` varchar(100) DEFAULT NULL,
  `password` varchar(41) NOT NULL,
  `group_id` int(1) NOT NULL DEFAULT '0',
  `salt` varchar(10) DEFAULT '',
  `createtime` datetime DEFAULT NULL,
  `updatetime` datetime DEFAULT NULL,
  `isdelete` int(1) NOT NULL DEFAULT '0',
  `theme` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;");
        $output->comment("insert auth_user default rows");
        db()->query(<<<EOF
INSERT INTO `ices_auth_user` VALUES ('1', '12345678912', '12345678912', 'Test', '71dd07494c5ee54992a27746d547e25dee01bd97', '1', '123456', '2017-01-23 15:38:45', '2017-06-30 18:38:23', '0', '{\"navigationColor\":\"bg-green-600\",\"acrossFlag\":\"navbar-inverse\",\"menuTheme\":\"site-menubar-light\",\"menuDisplay\":\"site-menubar-unfold\",\"menuTxtIcon\":\"site-menubar-keep\",\"themeColor\":\"green\",\"tabFlag\":\"site-contabs-open\"}');
EOF
);
        $output->comment("create successful");
    }
}
