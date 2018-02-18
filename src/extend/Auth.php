<?php
/**
 * User: Yirius
 * Date: 17/5/8
 * Time: 21:31
 */

namespace icesui\extend;


use think\Container;
use think\facade\Route;
use think\Loader;
use think\Request;

class Auth
{
    /**
     * @var object 对象实例
     */
    protected static $instance;
    /**
     * 当前请求实例
     * @var Request
     */
    protected $request;

    //默认配置
    protected $config = [
        'auth_on' => 1, // 权限开关
        'auth_type' => 1, // 认证方式，1为实时认证；2为登录认证。
        'auth_group' => 'ices_auth_group', // 用户组数据表名
        'auth_group_access' => 'ices_auth_group_access', // 用户-用户组关系表
        'auth_rule' => 'ices_auth_rule', // 权限规则表
        'auth_user' => 'ices_auth_user', // 用户信息表
    ];

    protected $dbConfig = [];
    /**
     * 类架构函数
     * Auth constructor.
     */
    public function __construct()
    {
        //可设置配置项 auth, 此配置项为数组。
        if ($auth = config('auth.')) {
            $this->config = array_merge($this->config, $auth);
        }
        $this->dbConfig = config("database");//指定前缀到ices
        $this->dbConfig['prefix'] = "ices_";
        $this->request = Container::get("request");
    }

    /**
     * 初始化
     * @access public
     * @param array $options 参数
     * @return \think\Request
     */
    public static function instance($options = [])
    {
        if (is_null(self::$instance)) {
            self::$instance = new static($options);
        }
        return self::$instance;
    }

    /**
     * @title 判断当前用户是否可以打开当前url
     * @description 判断当前用户是否可以打开当前url
     * @createtime: 2018/2/18 15:31
     * @param int $uid
     * @return bool
     */
    public function checkUrl($uid){
        $urlArray = explode("/", $this->request->baseUrl());
        if(empty($urlArray[0])){
            //如果0是空的,那就是形如/icesui/setting/name
            $module = $urlArray[1];
            $controller = $urlArray[2];
            $action = $urlArray[3];
        }else{
            $module = $urlArray[0];
            $controller = $urlArray[1];
            $action = $urlArray[2];
        }
        return $this->check("/".$module."/".$controller."/".$action, $uid, [1,2,3]);
    }

    /**
     * 检查权限
     * @param $name string|array  需要验证的规则列表,支持逗号分隔的权限规则或索引数组
     * @param $uid  int           认证用户的id
     * @param string $relation 如果为 'or' 表示满足任一条规则即通过验证;如果为 'and'则表示需满足所有规则才能通过验证
     * @param int $type 认证类型
     * @param string $mode 执行check的模式
     * @return bool               通过验证返回true;失败返回false
     */
    public function check($name, $uid, $type = 1, $relation = 'or', $mode = 'url')
    {
        //如果没开启直接关闭
        if (!$this->config['auth_on']) {
            return true;
        }
        // 获取用户需要验证的所有有效规则列表
        $authList = $this->getAuthList($uid, $type);
        if (is_string($name)) {
            $name = strtolower($name);
            if (strpos($name, ',') !== false) {
                $name = explode(',', $name);
            } else {
                $name = [$name];
            }
        }
        $list = []; //保存验证通过的规则名
        if ('url' == $mode) {
            $REQUEST = unserialize(strtolower(serialize($this->request->param())));
        }
        foreach ($authList as $auth) {
            $query = preg_replace('/^.+\?/U', '', $auth);
            if ('url' == $mode && $query != $auth) {
                parse_str($query, $param); //解析规则中的param
                $intersect = array_intersect_assoc($REQUEST, $param);
                $auth = preg_replace('/\?.*$/U', '', $auth);
                if (in_array($auth, $name) && $intersect == $param) {
                    //如果节点相符且url参数满足
                    $list[] = $auth;
                }
            } else {
                if (in_array($auth, $name)) {
                    $list[] = $auth;
                }
            }
        }
        if ('or' == $relation && !empty($list)) {
            return true;
        }
        $diff = array_diff($name, $list);
        if ('and' == $relation && empty($diff)) {
            return true;
        }
        return false;
    }

    /**
     * 根据用户id获取用户组,返回值为数组
     * @param  $uid int     用户id
     * @return array       用户所属的用户组 array(
     *     array('uid'=>'用户id','group_id'=>'用户组id','title'=>'用户组名称','rules'=>'用户组拥有的规则id,多个,号隔开'),
     *     ...)
     */
    public function getGroups($uid)
    {
        static $groups = [];
        if (isset($groups[$uid])) {
            return $groups[$uid];
        }
        // 转换表名
        $type = config('database.prefix') ? 1 : 0;
        $auth_user = Loader::parseName($this->config['auth_user'], $type);
        $auth_group = Loader::parseName($this->config['auth_group'], $type);
        // 执行查询
        $user_groups = db($auth_user)->alias("a")
            ->field("a.id,group_id,b.title,b.rules")
            ->join($auth_group." b", "a.group_id = b.id", 'LEFT')
            ->where('a.id', $uid)->select();
        $groups[$uid] = $user_groups ?: [];
        return $groups[$uid];
    }

    /**
     * 获得权限列表
     * @param integer $uid 用户id
     * @param integer $type
     * @return array
     */
    public function getAuthList($uid, $type)
    {
        static $_authList = []; //保存用户验证通过的权限列表
        $t = implode(',', (array)$type);
        if (isset($_authList[$uid . $t])) {
            return $_authList[$uid . $t];
        }
        if (2 == $this->config['auth_type'] && \think\facade\Session::has('_auth_list_' . $uid . $t)) {
            return session('_auth_list_' . $uid . $t);
        }
        //读取用户所属用户组
        $groups = $this->getGroups($uid);
        $ids = []; //保存用户所属用户组设置的所有权限规则id
        foreach ($groups as $g) {
            $ids = array_merge($ids, explode(',', trim($g['rules'], ',')));
        }
        $ids = array_unique($ids);
        if (empty($ids)) {
            $_authList[$uid . $t] = [];
            return [];
        }
        $map = array(
            ['id', 'in', $ids],
            ['type', is_array($type)?"in":"=", $type],
            ['status', '=', 1],
        );
        if(!is_array($ids[0]) && $ids['0'] == "all"){
            $map = [
                ['type', is_array($type)?"in":"=", $type],
                ['status', '=', 1]
            ];
        }
        //读取用户组所有权限规则
        $rules = db($this->config['auth_rule'])->where($map)->field('*')->select();
        //循环规则，判断结果。
        $authList = []; //
        foreach ($rules as $rule) {
            if (!empty($rule['condition'])) {
                //根据condition进行验证
                $user = $this->getUserInfo($uid); //获取用户信息,一维数组
                $command = preg_replace('/\{(\w*?)\}/', '$user[\'\\1\']', $rule['condition']);
                //dump($command); //debug
                @(eval('$condition=(' . $command . ');'));
                if ($condition) {
                    $authList[] = strtolower($rule['name']);
                }
            } else {
                //只要存在就记录
                $authList[] = strtolower($rule['name']);
            }
        }
        $_authList[$uid . $t] = $authList;
        if (2 == $this->config['auth_type']) {
            //规则列表结果保存到session
            session('_auth_list_' . $uid . $t, $authList);
        }
        return array_unique($authList);
    }


    /**
     * @title 获取到当前用户可以看到的界面和菜单
     * @description 获取到当前用户可以看到的界面和菜单
     * @createtime: 2018/2/18 01:06
     * @param string $rule
     * @param int $selectType
     * @return array
     */
    public function getAuthMenus($rule = '', $selectType = 1){
        static $authmenus = [];
        if(!empty($authmenus)){
            return $authmenus;
        }
        //判断有没有rules, 有的话就指定规则
        if(empty($rule) && empty($this->rules)){
            return [
                'topMenus' => [],
                'sideMenus' => []
            ];
        }
        if(empty($rule)) $rule = $this->rules;
        if($rule == "all")
            $where = [
                ['type', 'in', $selectType==1?'1,2':'1,2,3'],
                ['status', '=', 1]
            ];
        else
            $where = [
                ['type', 'in', $selectType==1?'1,2':'1,2,3'],
                ['status', '=', 1],
                ['id', 'in', $rule]
            ];
        $list = db($this->config['auth_rule'])->where($where)->order('parentid asc,list_order desc')->select();
        $topMenus = [];
        $sideMenus = [];
        $sideMenusEach = [];
        foreach($list as $i => $v){
            if($v['parentid'] == 0){
                $topMenus[$v['id']] = [
                    'text' => $v['text'],
                    'value' => $v['id'],
                    'name' => $v['name'],
                    'status' => $v['status'],
                    'type' => $v['type'],
                    'icon' => $v['icon']
                ];
//                $topMenus[$v['name']] = $v['text'];
            }else{
                $href = str_replace("-", "/", $v['name']);
                $sideMenusEach[$v['id']] = [
                    'text' => $v['text'],
                    'value' => $v['id'],
                    'name' => $v['name'],
                    'url' => $href,
                    'pid' => $v['parentid'],
                    'icon' => $v['icon'],
                    'status' => $v['status'],
                    'type' => $v['type'],
                    'subs' => []
                ];
            }
        }
        foreach($sideMenusEach as $i => $v){
            if(!empty($sideMenusEach[$v['pid']]))
                $sideMenusEach[$v['pid']]['subs'][$v['value']] = &$sideMenusEach[$i];
            else{
                $topInfo = $topMenus[$v['pid']];
                $sideMenus[$topInfo['name']]['text'] = $topInfo['text'];
                $sideMenus[$topInfo['name']]['value'] = $topInfo['value'];
                $sideMenus[$topInfo['name']]['icon'] = $topInfo['icon'];
                $sideMenus[$topInfo['name']]['status'] = $topInfo['status'];
                $sideMenus[$topInfo['name']]['type'] = $topInfo['type'];
                $sideMenus[$topInfo['name']]['subs'][] = &$sideMenusEach[$i];
            }
        }
        return $authmenus = [
            'topMenus' => $topMenus,
            'sideMenus' => $sideMenus
        ];
    }

    /**
     * @title 获取到针对于ztree的样式
     * @description 获取到针对于ztree的样式
     * @createtime: 2018/2/18 01:07
     * @return array
     */
    public function getUserMenuForTree(){
        $rules = $this->getAuthMenus('all', 2);
        $result = [];
        foreach($rules['topMenus'] as $i => $v){
            $result[] = [
                'id' => $v['value'],
                'pId' => 0,
                'name' => $v['text']
            ];
        }
        foreach($rules['sideMenus'] as $i => $v){
            $this->_formatSubMenus($result, $v['subs']);
        }
        return $result;
    }

    /**
     * @title 上方辅助类
     * @description 辅助递归获取到所有的列表
     * @createtime: 2018/2/18 01:07
     * @param $result
     * @param $tree
     */
    protected function _formatSubMenus(&$result, $tree){
        foreach($tree as $i => $v){
            $result[] = [
                'id' => $v['value'],
                'pId' => $v['pid'],
                'name' => $v['text']
            ];
            if(!empty($v['subs'])){
                $this->_formatSubMenus($result, $v['subs']);
            }
        }
    }

    /**
     * 获得用户资料,根据自己的情况读取数据库
     */
    protected function getUserInfo($uid)
    {
        static $userinfo = [];
        $user = db($this->config['auth_user'], $this->dbConfig);
        // 获取用户表主键
        $_pk = is_string($user->getPk()) ? $user->getPk() : 'id';
        if (!isset($userinfo[$uid])) {
            $userinfo[$uid] = $user->where($_pk, $uid)->find();
        }
        return $userinfo[$uid];
    }


    /**
     *
     * @createtime: 2017/12/18 17:00
     * @param string $username
     * @param string $password
     * @param mixed $funcs({$DS}userinfo, {$DS}loginstatus)
     * @return array
     */
    public function checkPassword($username, $password, $funcs = ''){
        $userinfo = db($this->config['auth_user']." a")
            ->field("a.id,a.username,a.password,a.realname,a.phone,a.group_id,a.isdelete,a.salt,b.rules,b.title as typename")
            ->join("ices_auth_group b", "a.group_id = b.id", "LEFT")
            ->where('a.username|a.phone', $username)
            ->find();
        if(empty($userinfo)){
            if($funcs instanceof \Closure){
                $funcs([], false);
            }
            return ['code' => 0, 'msg' => "查无此用户存在"];
        }else{
            if($userinfo['password'] == sha1($password.$userinfo['salt'])){
                if($userinfo['isdelete'] == 1){
                    if($funcs instanceof \Closure){
                        $funcs([], false);
                    }
                    return ['code' => 2, 'msg' => "用户已经被禁止登录"];
                }else{
                    session("manager", $userinfo);
                    if($funcs instanceof \Closure){
                        $funcs($userinfo, true);
                    }
                    return ['code' => 1, 'msg' => "登录成功"];
                }
            }else{
                if($funcs instanceof \Closure){
                    $funcs([], false);
                }
                return ['code' => 0, 'msg' => "用户密码错误"];
            }
        }
    }
}
