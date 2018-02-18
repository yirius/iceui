<!DOCTYPE html>
<html class="no-js css-menubar" lang="zh-cn">
<head>
    <title>您没有访问权限</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 移动设备 viewport -->
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,minimal-ui">
    <!-- 360浏览器默认使用Webkit内核 -->
    <meta name="renderer" content="webkit">
    <link rel="stylesheet" href="{:config('icesui.config.view_assets')}/css/bootstrap.css" />
    <link rel="stylesheet" href="{:config('icesui.config.view_assets')}/css/css/site.css" />
    <link rel="stylesheet" href="{:config('icesui.config.view_assets')}/fonts/7-stroke.css" />
    <script src="{:config('icesui.config.view_assets')}/vendor/jquery/jquery.min.js"></script>
    <script src="{:config('icesui.config.view_assets')}/js/bootstrap.min.js"></script>
    <script src="{:config('icesui.config.view_assets')}/js/icesui/app.js"></script>
    <style>
        .page-errors .page-error{height:100vh;overflow:auto}.page-error .error-mark{margin-bottom:33px}.page-error header .icon:before{margin-bottom:20px;font-size:120px}.page-error header h1{font-size:120px;color:#76838f}.page-error header h3{margin-top:30px}.page-error header p{margin-bottom:30px;text-transform:uppercase}main.site-page .page-error .page-copyright{display:none}
    </style>
</head>
<body class="page-errors page-maintenance layout-full">
<div class="site-page">
    <div class="page vertical-align text-center animation-scale-up page-error">
        <div class="page-content vertical-align-middle">
            <header>
                <i class="icon pe-id" aria-hidden="true"></i>
                <h3>
                    <?php switch ($code) {?>
                        <?php case 1:?>
                            温馨提示
                        <?php break;?>
                        <?php case 0:?>
                            错误提示
                        <?php break;?>
                    <?php } ?>
                </h3>
                <p><?php echo(strip_tags($msg));?></p>
            </header>
            <button class="btn btn-outline btn-primary btn-round" id="closeTab" href="javascript:;">关闭当前页</button>
            <footer class="page-copyright">
                <p>&copy; 2018
                    <a href="http://www.tjxuechuang.com" target="_blank">学创网络</a>
                </p>
            </footer>
        </div>
    </div>
</div>
</body>
<script>
    $(document).on('click', '#closeTab', function() {
        $.site.contentTabs.closeTab(parent.$("#admui-siteConTabs").find("ul").find(".active"));
    });
</script>
</html>
