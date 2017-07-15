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
            .when('/pizza', {
                template: "Yum!!!"
            })
            .otherwise({
                template: "This doesn't exist!"
            })
    })
    .controller("AppCtrl", function($scope){
        $scope.model = {
            message: "This is my app!!!"
        }
    })