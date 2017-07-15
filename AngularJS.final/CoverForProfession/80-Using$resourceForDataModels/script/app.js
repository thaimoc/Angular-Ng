/**
 * Created by Von on 12/26/2015.
 */
;(function(){
    'use strict';

    angular
        .module('app', ['ng', 'ngRoute', 'ngResource'])
        .config(['$routeProvider', '$httpProvider', function(Router, $http){
            Router
                .when('/', {
                    controller:'MainCtrl'
                });
            $http.defaults.useXDomain = true;
            delete $http.defaults.headers.common['X-Requested-With'];
        }])
}());