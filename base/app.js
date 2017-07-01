/**
 * JWDING
 */
isDebug = true;
isFront = false;
if (!window.console) {
    window.console = {};
    window.console.log = function () {
        return "undefined";
    }
}
front = {};
//框架全局对象
front.log = function (log) {
    if (isFront) {
        if (console.log) {
            console.log(log);
        }
    }
};
front.print=function (log) {
    if (isFront) {
        if (console.log) {
            console.log("%c%s", "background: #fff; color:green", "====================" + log + "====================");
        }
    }
};
debug = {};
//开发级全局对象
debug.log = function (log) {
    if (isDebug) {
        if (console.log) {
            console.log(log);
        }
    }
};
debug.print = function (log) {
    if (isDebug) {
        if (console.log) {
            console.log("%c%s", "background: #fff; color:blue", "====================" + log + "====================");
        }
    }
};

front.print("加载-app");
DeviceWidth = document.documentElement.clientWidth;
var reSize = function () {
    setTimeout(function () {
        //var deviceWidth = document.documentElement.clientWidth > 1280 ? document.documentElement.clientWidth : 1280;
        var deviceWidth = document.documentElement.clientWidth;
        document.documentElement.style.fontSize = (deviceWidth / 6.4) + 'px';
    }, 50);
};
//pc设备上1rem==200px 1px==0.005rem
window.onresize = reSize;
reSize();

define(["angular", "ui-router", "ng-file-upload", "angular-animate", "angular-couch-potato", "angular-localstorage"], function (angular) {
    return angular.module('app', ['ui-router', 'ng-file-upload', 'angular-animate', "angular-couch-potato","angular-localstorage"]);
});

