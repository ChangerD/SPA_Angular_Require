/**
 * JWDING
 */
front.print("加载-run");
define(["app"], function (app) {
    app.run(function ($rootScope, $state, WebService) {
        front.print("运行-run");

        $rootScope.goPage = function (state) {
            $state.go(state);
        };

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.$broadcast("onLeave");
        });
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.$broadcast("onLeaveSuccess");
        });
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            $rootScope.$broadcast("onLeaveError");
        });
    });
});
