/**
 * Created by Von on 12/18/2015.
 */

var app = angular.module("app", ["ngRoute"]);
    app.config(function config($routeProvider){
        $routeProvider.when('/',
            {
                templateUrl:"app.html",
                controller:"AppCtrl",
                resolve: {
                    loadData: appCtrl.loadData,
                    prepData: appCtrl.prepData
                }
            })
    });
/** The first demo*/
//var appCtrl = app.controller("AppCtrl", function($scope){

/** The second demo*/
var appCtrl = app.controller("AppCtrl", function($scope, $route){
    console.log($route);

    $scope.model = {
            message: "This is my app!!!"
        }
    });

appCtrl.loadData = function($q, $timeout){
    var defer = $q.defer();
    $timeout(function(){
        /** The first demo*/
        //defer.resolve();
        //console.log("load data");

        /** The second demo*/
        defer.resolve('data from loadData function');
        /** Get above values are in the $router.current.locals.loadData*/
    }, 2000);
    return defer.promise;
};

appCtrl.prepData = function($q, $timeout){
    var defer = $q.defer();
    $timeout(function(){
        /** The first demo*/
        //defer.resolve();
        //console.log("prep data");

        /** The second demo*/
        defer.resolve('data from prepData function');
        /** Get above values are in the $router.current.locals.prepData*/

    }, 2000);
    return defer.promise;
};