/**
 * JWDING
 */
front.print("加载-router");
define(["app"], function (app) {
    //Angular应用对象
    app.config(function ($stateProvider, $urlRouterProvider, $couchPotatoProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
        front.print("运行-router");

        app.register = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };

        $stateProvider
            .state("app", {
                abstract: true,
                resolve: {
                    ctrl: $couchPotatoProvider.resolveDependencies(['js/ctrls/appCtrl','requirecss!css/app.css'])
                },
                url: "/app",
                templateUrl: "./template/app.html",
                controller:'appCtrl'
            })
            .state('app.dashboard', {
                url: '/dashboard',
                resolve: {
                    ctrl: $couchPotatoProvider.resolveDependencies(['js/ctrls/dashboardCtrl','requirecss!css/dashboard.css'])
                },
                templateUrl: './template/dashboard.html',
                controller:'dashboardCtrl'
            })
            .state('app.homepage', {
                url: '/homepage',
                resolve: {
                    ctrl: $couchPotatoProvider.resolveDependencies(['js/ctrls/homepageCtrl','requirecss!css/dashboard.css'])
                },
                templateUrl: './template/dashboard.html',
                controller:'homepageCtrl'
            });
        $urlRouterProvider.otherwise('/app/dashboard');
    });
});

