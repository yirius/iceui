<?php
/**
 * User: Yirius
 * Date: 2018/1/7
 * Time: 22:13
 */

namespace icesui;


use think\console\Command;
use think\console\Input;
use think\console\Output;

class IcesCommand extends Command
{
    protected function configure()
    {
        $this->setName('IcesCommand')->setDescription('Here is the remark ');
    }

    protected function execute(Input $input, Output $output)
    {
        $output->writeln("TestCommand.");
    }
}
