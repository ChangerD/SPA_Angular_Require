front.print("加载-webservice");
define(['app'], function (app) {

    app.service("WebService", function () {
        front.print("运行-utilservice");
        return {
            //通用接口
            doQuery: function (data, subUrl,success, error,complete) {
                var params = {
                    "params": JSON.stringify(data)
                }
                var promise = $.ajax({
                    dataType: "json",
                    type: "post",
                    data: params,
                    timeout: 5000,
                    url: window.netUrl + subUrl,
                    success: success,
                    error: error,
                    complete:complete
                });
                return promise;
            },
            //请求名称
            doTest: function (data, success, error,complete) {
                var params = {
                    "params": JSON.stringify(data)
                }
                var promise = $.ajax({
                    dataType: "json",
                    type: "post",
                    data: params,
                    timeout: 5000,
                    url: window.netUrl + "testController/test.do",
                    success: success,
                    error: error,
                    complete:complete
                });
                return promise;
            }
        }
    });

});