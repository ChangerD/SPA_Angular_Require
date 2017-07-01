front.print("加载-homepageCtrl");
define(['app'], function (app) {
    app.register.controller("homepageCtrl", function ($scope,WebService) {
        front.print("运行-homepageCtrl");

        WebService.doQuery({},"",function () {
            debug.print("success");
        },function () {
            debug.print("error");
        },function () {
            debug.print("complete");
        });

        $scope.$on('onLeave', function() {
            debug.print("离开-homepageCtrl");
        });
    });
});