/**
 * Created by yangyuance1 on 2018/2/18.
 */
$(document).ready(function(){
    var setting = {
        view: {
            //addHoverDom: addHoverDom,
            //removeHoverDom: removeHoverDom,
            selectedMulti: true
        },
        check: {
            enable: true
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        edit: {
            enable: false
        },
        callback: {
            onCheck: function(event, treeid, nodes){
                var treeObj = $.fn.zTree.getZTreeObj(treeid);
                var _nodes = treeObj.getCheckedNodes(true);
                var arrays = [];
                for(var i in _nodes){
                    arrays.push(_nodes[i].id);
                }
                $("#" + treeid).parent().find("input").val(arrays.join(","));
            }
        }
    };
    $("ul[data-plugin='ztree']").each(function(n,v){
        $.fn.zTree.init($(v), setting, $(v).data("ztree"));
    });
});
//var newCount = 1;
//function addHoverDom(treeId, treeNode) {
//    var sObj = $("#" + treeNode.tId + "_span");
//    if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
//    var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
//        + "' title='add node' onfocus='this.blur();'></span>";
//    sObj.after(addStr);
//    var btn = $("#addBtn_"+treeNode.tId);
//    if (btn) btn.bind("click", function(){
//        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
//        zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++)});
//        return false;
//    });
//};
//function removeHoverDom(treeId, treeNode) {
//    $("#addBtn_"+treeNode.tId).unbind().remove();
//};
