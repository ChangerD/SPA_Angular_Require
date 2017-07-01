/**
 * JWDING
 */
require.config({
    baseUrl: "",
    paths: {
        "app": ["base/app"],
        "router": ["js/router"],
        "run": ["js/run"],
        "constant":["js/constant"],
        //------------------------------------------------------------------------------------------------------
        "requirecss": ["framework/requirejs/css"],
        "angular": ["https://cdn.bootcss.com/angular.js/1.5.8/angular.min","framework/angular/angular"],
        "angular-couch-potato": ["framework/angular/angular-couch-potato"],
        "ng-file-upload": ["framework/angular/ng-file-upload-all.min"],
        "angular-animate": ["framework/angular/angular-animate"],
        "angular-bootstrap": ["framework/angular/ui-bootstrap-tpls"],
        //"angular-translate": ["framework/angular/angular-translate"],
        "angular-localstorage": ["framework/angular/angular-localstorage"],
        "ui-router": ["framework/angular/angular-ui-router"],
        "jquery": ["https://cdn.bootcss.com/jquery/2.2.4/jquery.min","framework/jquery/jquery.min"],
        "bootstrap":["https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min"],
        "scrollintoview": ["framework/jquery/jquery.scrollintoview"],
        //---------------------------------------------------------------------------------------------------
        "jwplayerDirective": ["js/directives/jwplayerDirective"],
        //----------------------------------------------------------------------------------------------------
        "webService": ["js/services/webService"],
        "utilService": ["js/services/utilService"]
    },
    shim: {
        angular: {
            exports: "angular"
        },
        "ui-router": ["angular"],
        "angular-animate": ["angular"],
        "ng-file-upload": ["angular"],
        "angular-couch-potato": ["angular"],
        "angular-translate": ["angular"],
        "angular-localstorage": ["angular"],
        "angular-bootstrap": ["angular"],
        //---------------------------------------------------------------------------------------------------------------
        "bootstrap":["jquery"],
        //---------------------------------------------------------------------------------------------------------------
        "app": {
            deps: [
                "angular",
                "ui-router",
                "bootstrap",
                "jquery",
                "ng-file-upload",
                "angular-animate",
                "angular-couch-potato",
                //"angular-translate",
                "angular-localstorage",
                "constant"
            ]
        },
        "router": ["app"],
        "run": [
            "router",
            "webService",
            "utilService",
            //"requirecss!css/bootstrap.css",
            "requirecss!https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css",
            "requirecss!css/animate.css",
            "requirecss!css/font-awesome.min.css",
            "requirecss!css/simple-line-icons.css",
            "requirecss!css/font.css"
        ],
        //----------------------------------------------------------------------------------------------------------
        "jwplayerDirective": ["app"],
        //----------------------------------------------------------------------------------------------------------
        "webService": ["app"],
        "utilService": ["app"]
    }
});

define(["run"], function () {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ["app"]);
    });
});



