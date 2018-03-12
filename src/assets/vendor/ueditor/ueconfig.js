/**
 * Created by yangyuance1 on 2018/1/10.
 */
$(document).ready(function(){
    $("[data-plugin='ueditor']").each(function(){
        !(function(obj){
            UE.getEditor(obj.id);
        })(this);
    });
});
