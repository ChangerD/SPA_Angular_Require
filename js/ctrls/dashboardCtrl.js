front.print("加载-dashboardCtrl");
define(['app'], function (app) {
    app.register.controller('dashboardCtrl', function ($scope, $state) {
        front.print("运行-dashboardCtrl");
        $scope.$on('onLeave', function() {
            debug.print("离开--dashboardCtrl");
        });
    });
});