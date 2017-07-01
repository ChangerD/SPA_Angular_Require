﻿front.print("加载-appCtrl");
define(['app'], function (app) {
    app.register.controller('appCtrl',
        function ($scope,$localStorage, $window) {

            front.print("运行-appCtrl");
            // add 'ie' classes to html
            var isIE = !!navigator.userAgent.match(/MSIE/i);
            isIE && angular.element($window.document.body).addClass('ie');
            isSmartDevice($window) && angular.element($window.document.body).addClass('smart');

            // config
            $scope.app = {
                name: '专业服务气象灾害精细化预警预报业务平台',
                version: '1.0.0',
                user: {
                    name: "超级管理员小梁",
                    type: "超级管理员"
                },
                // for chart colors
                color: {
                    primary: '#7266ba',
                    info: '#23b7e5',
                    success: '#27c24c',
                    warning: '#fad733',
                    danger: '#f05050',
                    light: '#e8eff0',
                    dark: '#3a3f51',
                    black: '#1c2b36'
                },
                settings: {
                    themeID: 1,
                    navbarHeaderColor: 'bg-info dker',
                    navbarCollapseColor: 'bg-info dk',
                    asideColor: 'bg-black',
                    headerFixed: true,
                    asideFixed: false,
                    asideFolded: false,
                    asideDock: false,
                    container: false
                },
                menus: {
                    product: {
                        product1: "预报制作",
                        product2: "专题服务产品制作",
                        product3: "专题图查看",
                        product4: "效益评估"
                    },
                    manage: {
                        manage1: "监控中心",
                        manage2: "用户管理",
                        manage3: "业务统计",
                        manage4: "反馈信息管理"
                    }
                }
            }

            // save settings to local storage
            if (angular.isDefined($localStorage.settings)) {
                $scope.app.settings = $localStorage.settings;
            } else {
                $localStorage.settings = $scope.app.settings;
            }
            $scope.$watch('app.settings', function () {
                if ($scope.app.settings.asideDock && $scope.app.settings.asideFixed) {
                    // aside dock and fixed must set the header fixed.
                    $scope.app.settings.headerFixed = true;
                }
                // save to local storage
                $localStorage.settings = $scope.app.settings;
            }, true);

            function isSmartDevice($window) {
                // Adapted from http://www.detectmobilebrowsers.com
                var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
                // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
                return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
            }

        });
});
