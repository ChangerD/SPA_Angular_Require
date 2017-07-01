front.print("加载-utilservice");
define(['app'], function (app) {

    //工具service
    app.service("UtilService", function () {
        front.print("运行-utilservice");
        return {
            //清空object方法，将object的属性都赋值为""
            cleanObject: function (obj) {
                return obj;
            }
        }
    });

});