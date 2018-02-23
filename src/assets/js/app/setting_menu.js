/**
 * Created by yangyuance1 on 2018/2/17.
 */
$(document).ready(function(){
    nodetpl.config({
        openTag: '{?',
        closeTag: '?}'
    });

    var menuTpl = document.getElementById("menuTpl").innerHTML,
        menuinfoTpl = document.getElementById("menuInfoTpl").innerHTML,
        menuItemTpl = document.getElementById("menuItemTpl").innerHTML,
        menuTree = $("#menuTree"),
        menuInfo = $("#menuInfo");

    var firstIndex, firstName;
    for(var menuFirst in topMenus){
        firstIndex = menuFirst;
        firstName = topMenus[menuFirst].name;
        break;
    }
    function renderList(firstName){
        var TopMenu = {};
        for(var i in topMenus){
            if(topMenus[i].name == firstName){
                TopMenu = topMenus[i];
                break;
            }
        }
        var TplData = {list: sideMenus[firstName], top: TopMenu};
        nodetpl.render(menuTpl, TplData, function(d){
            menuTree.html(d);
        });
    }
    renderList(firstName);
    function renderInfo(data){
        data.value = data.id || data.value;
        nodetpl.render(menuinfoTpl, data, function(d){
            menuInfo.html(d);
            $('.icp-dd1').iconpicker("iconpicker", {
                'title': "测试"
            }).on("iconpickerSelected",function(data) {
                $("#menuTree").find(".active").find("i").attr("class", "menu-icon " + data["iconpickerValue"]);
                $("#menuTree").find(".active").parent().data("icon", data["iconpickerValue"]).attr("data-icon", data["iconpickerValue"]);
            });
        });
    }
    renderInfo(topMenus[firstIndex]);

    // activate Nestable for list 1
    var selectedSubMenu = null;
    $('#menuTree').nestable({group: 1}).on('change', function(e){
        var list   = e.length ? e : $(e.target);
        if (window.JSON) {
            console.log(list.nestable('serialize'));
        } else {
            output.val('JSON browser support required for this demo.');
        }
    }).on("click", ".dd-content", function(e){
        $('#menuTree').find(".dd-content").each(function(n, v){
            $(v).removeClass("active");
        });
        $(this).addClass("active");
        selectedSubMenu = $(this).parent();
        var data = $(this).parent().data(), pData = $("#topMenus").find(".active").data();
        renderInfo(data);
    });

    $("#topMenus").on("click", ".list-group-item", function(){
        $("#topMenus").find(".list-group-item").each(function(){
            $(this).removeClass("active");
        });
        $(this).addClass("active");
        renderList($(this).data("name"));
        renderInfo(topMenus[$(this).data("id")]);
    });

    //写一下添加的效果
    $("#addChlidMenuBtn").on("click", "a", function(){
        if(selectedSubMenu == null){
            toastr.error("尚未选择菜单");
            return;
        }
        var data = {type: 2, text: "自定义菜单", icon: "wb-settings", name: "", status: 1};
        if($(this).data("type") == "after"){
            //在后面
            nodetpl.render(menuItemTpl, data, function(d){
                selectedSubMenu.parent().append(d);
            });
        }else{
            nodetpl.render(menuItemTpl, data, function(d){
                selectedSubMenu.find("ol").eq(0).append(d);
            });
        }
        renderInfo(data);
    });

    $("#saveChlidMenu").click(function(){
        var json = $("#menuTree").nestable('serialize');
        json = JSON.stringify(json);
        $.post(icesConfig.url + "/icesui/setting/doMenu", {data: json}, function(data){
            if(data.code == 1){
                toastr.success(data.msg);
                location.reload();
            }else{
                toastr.error(data.msg);
            }
        });
    });

    //设置右侧点击
    $(document).on("change", "input[name='submenu_name']", function(){
        $("#menuTree").find(".active").parent().data("text", this.value).attr("data-text", this.value);
        $("#menuTree").find(".active").find("b").text(this.value);
    });
    //设置右侧网址点击
    $(document).on("change", "input[name='submenu_url']", function(){
        $("#menuTree").find(".active").parent().data("name", this.value).attr("data-name", this.value);
    });
    //设置右侧类型点击
    $(document).on("change", "input[name='type']", function(){
        $("#menuTree").find(".active").parent().data("type", this.value).attr("data-type", this.value);
    });
    //设置右侧菜单开启
    $(document).on("change", "input[name='status']", function(){
        $("#menuTree").find(".active").parent().data("status", this.value).attr("data-status", this.value);
    });

    $('.icp-dd1').iconpicker("iconpicker", {
        'title': "测试"
    }).on("iconpickerSelected",function(data) {
        $("#menuTree").find(".active").find("i").attr("class", "menu-icon " + data["iconpickerValue"]);
        $("#menuTree").find(".active").parent().data("icon", data["iconpickerValue"]).attr("data-icon", data["iconpickerValue"]);
    });


    $("#addMenuToggle").on("click", function(e){
        parent.layer.open({
            type: 2,
            title: '新增顶部菜单',
            shadeClose: true,
            shade: 0.6,
            id: "addTopMenu",
            area: ['500px', '420px'],
            content: '/icesui/setting/addTopMenu'
        });
    });

    $(".btn-editTop").on("click", function(e){
        var id = $(this).data("id");
        parent.layer.open({
            type: 2,
            title: '新增顶部菜单',
            shadeClose: true,
            shade: 0.6,
            id: "addTopMenu",
            area: ['500px', '420px'],
            content: '/icesui/setting/addTopMenu/id/' + id
        });
    });

    $(".btn-deleteTop").on("click", function(){
        var id = $(this).data("id");
        if(id){
            parent.layer.confirm("是否确认删除?", {}, function(){
                $.ajax({
                    url: "",
                    method: "delete",
                    data: {id: id},
                    datatype: "json",
                    success: function(data){
                        if(data.code == 1){
                            parent.layer.close(parent.layer.index);
                            location.reload();
                        }else{
                            parent.layer.close(parent.layer.index);
                            toastr.error(data.msg);
                        }
                    }
                })
            });
        }else{
            toastr.error("尚未选择顶部菜单, 无法删除");
        }
    });

    $(document).on("click", ".delete-submenu", function(){
        var id = $(this).data("id");
        if(id){
            parent.layer.confirm("是否确认删除?", {}, function(){
                $.ajax({
                    url: "",
                    method: "delete",
                    data: {id: id},
                    datatype: "json",
                    success: function(data){
                        if(data.code == 1){
                            parent.layer.close(parent.layer.index);
                            location.reload();
                        }else{
                            parent.layer.close(parent.layer.index);
                            toastr.error(data.msg);
                        }
                    }
                })
            });
        }else{
            toastr.error("尚未选择菜单, 无法删除");
        }
    });

    App.run();
});
