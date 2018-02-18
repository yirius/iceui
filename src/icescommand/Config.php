<?php
/**
 * User: Yirius
 * Date: 2018/1/7
 * Time: 22:22
 */

namespace icesui\IcesCommand;


use think\console\Command;
use think\console\Input;
use think\console\Output;
use think\facade\Env;

class Config extends Command
{
    protected function configure()
    {
        $this
            ->setName('icescommand:config')
            ->setDescription('this will copy config.php to config/icesui.php');
    }

    protected function execute(Input $input, Output $output)
    {
        $output->comment("start copy icesui/src/config.php");
        $flag = copy(dirname(__DIR__) . "/Config.php", Env::get("root_path") . "/config/icesui.php");
        if($flag){
            $output->comment("copy to config/icesui.php success");
        }else{
            $output->comment("copy to config/icesui.php error");
        }
    }
}
