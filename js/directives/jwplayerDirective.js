front.print("加载-directives");
define(['app'], function (app) {
    app.directive('jwplayer', function ($rootScope) {
        front.print("运行-directives");
        return {
            restrict: 'ECMA',
            replace: false,    //替换的方式插入内容//绑定策略
            template: '',
            link: function (scope, element, attr) {
                front.print("运行-directive-jwplayer");
                /* jwplayer('mjwplayer').setup({
                 width: '100%',
                 height: '100%',
                 "skin": "vapor",
                 playlist: $rootScope.rootItemArray
                 });
                 jwplayer('mjwplayer').on('ready', function () {
                 jwplayer('mjwplayer').playlistItem($rootScope.rootItemIndex);
                 });*/
            }
        };
    });
});