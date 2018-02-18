/**
 * Created by yangyuance1 on 2018/2/17.
 */
var fs = require("fs");
var _0x096e = ['storage', 'sessionStorage', 'ifameTabs', 'configs', 'components', 'init', 'Breakpoints', 'toastr', 'notifyFn', 'extend', '_dequeue', '_trigger', 'before.run', 'run', 'complete', 'after.run', '_getQueue', 'shift', 'call', 'isFunction', '_queue', 'each', 'unshift', 'undefined', '#admui-pageContent', 'trigger', '.app', '.page-aside', 'hasClass', 'open', 'toggleClass', 'click', '.page-aside-switch', 'pageAside', 'App', 'parentFrame', 'top', 'document', 'ctx', 'colors']; (function(_0x2ee0b9, _0x408c1e) {
    var _0x105f3f = function(_0x59ef12) {
        while (--_0x59ef12) {
            _0x2ee0b9['push'](_0x2ee0b9['shift']());
        }
    };
    _0x105f3f(++_0x408c1e);
} (_0x096e, 0x113));
var _0xe096 = function(_0x4011bd, _0x1118e2) {
    _0x4011bd = _0x4011bd - 0x0;
    var _0x35ca59 = _0x096e[_0x4011bd];
    return _0x35ca59;
};
fs.readFile('app.js', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        var result = data.match(/_0xe096([^)]*)\)/g);
        for(var i in result){
            var indata = result[i].replace("_0xe096(", "").replace(")", "");
            data = data.replace(new RegExp("_0xe096\\("+indata+"\\)","g"), "'"+eval(result[i])+"'");
        }
        fs.writeFile("output_app.js",data,function(err){
            if(err){
                console.log(err);
            }else{
                console.log("file writes sucess!!")
            }
        });
    }
});
