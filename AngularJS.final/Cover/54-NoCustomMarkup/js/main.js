/**
 * Created by Von on 12/23/2015.
 */

var app = angular.module('app', []);
    app.controller('AppCtrl', function(){
        this.random = Math.random();
    });

    app.directive('app', function(){
       return {
           restrict: 'C',
           controller: 'AppCtrl as ctr'
       }
    });

angular.bootstrap(document.getElementById('container'), ['app']);
