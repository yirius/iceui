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

class Addform extends Command
{
    protected function configure()
    {
        $this->setName('icescommand:addform')->setDescription('Here is the remark ');
    }

    protected function execute(Input $input, Output $output)
    {
        $output->writeln("TestCommand.");
    }
}
