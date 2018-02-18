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

class Assets extends Command
{
    protected function configure()
    {
        $this
            ->setName('icescommand:assets')
            ->setDescription('this will copy assets/ to public/static/');
    }

    protected function execute(Input $input, Output $output)
    {
        $output->comment("start copy static/");
        $this->copy_dir(dirname(__DIR__) . "/assets/", Env::get("root_path"). "/public/static/");
        if(is_dir(Env::get("root_path"). "/public/static/")){
            $output->comment("copy to static/ success");
        }
    }

    protected function copy_dir($src, $dst) {
        $dir = opendir($src);
        @mkdir($dst);
        while(false !== ( $file = readdir($dir)) ) {
            if (( $file != '.' ) && ( $file != '..' )) {
                if ( is_dir($src . '/' . $file) ) {
                    $this->copy_dir($src . '/' . $file,$dst . '/' . $file);
                    continue;
                }
                else {
                    copy($src . '/' . $file,$dst . '/' . $file);
                }
            }
        }
        closedir($dir);
    }
}
