/**
 * Created by Von on 12/18/2015.
 */

angular.module("app", ["ngRoute"])
    .config(function config($routeProvider){
        $routeProvider.when('/',
            {
                templateUrl:"app.html",
                controller:"AppCtrl"
            })
            .when('/pizza/:crust/:topping', {
                /**
                 * url: /pizza/crust is in here/and topping is in here?search is in here
                 * for example: pizza/crust/topping in here?daily=true
                 * console screen will log routeParams be Object {crust: "crusting", topping: "topping in here"}
                 * which will also log path be /pizza/crusting/topping in here
                 * and will log search be Object {daily: "true"}
                 * @param {Object} routeParams
                 * @param {string} path
                 * @param {Object} search
                 * @returns {string}
                 */
                redirectTo: function(routeParams, path, search){
                    console.log(routeParams);
                    console.log(path);
                    console.log(search);
                    return "/" + routeParams.crust;
                }
            })
            .when("/deep", {
                template:"Deep dish"
            })
            .otherwise({
                redirectTo:"/"
            })
    })
    .controller("AppCtrl", function($scope){
        $scope.model = {
            message: "This is my app!!!"
        }
    });