/**
 * Created by Von on 12/18/2015.
 */

angular.module("app", ["ngRoute"])
    .config(function config($routeProvider){ /** Need suffixed with 'Provider' */
        /** All services are needed configuration before you use that services in the controller */
        $routeProvider.when('/',
            {
                templateUrl:"app.html",
                controller:"AppCtrl"
            })
    })
    .controller("AppCtrl", function($scope, $route){
        /** It will recognize the $route to be $routeProvider,because it will add suffixed 'Provider' */
        /** This below is not applied because it needs to apply before insert in this controller constructor */
        //$route.routes['/'] = {
        //    templateUrl:"app.html",
        //    controller:"AppCtrl"
        //};

        $scope.model = {
            message: "This is my app!!!"
        };
    });