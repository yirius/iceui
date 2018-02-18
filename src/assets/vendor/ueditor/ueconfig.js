/**
 * Created by yangyuance1 on 2018/1/10.
 */
$(document).ready(function(){
    $("[data-plugin='ueditor']").each(function(){
        var ue = UE.getEditor(this);
    });
});
