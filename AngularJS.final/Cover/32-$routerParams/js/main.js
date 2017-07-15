/**
 * Created by Von on 12/18/2015.
 */

angular.module("app", ["ngRoute"])
    .config(function config($routeProvider){
        //$routeProvider.when('/:message', /** /index.html#/this%20is%20message*/
          $routeProvider.when('/map/:country/:state/:city', /** /index.html#/map/USA/Ohio/Olando */
              {
                templateUrl:"app.html",
                controller:"AppCtrl"
              })
    })
    .controller("AppCtrl", function($scope, $routeParams){
        $scope.model = {
            //message: $routeParams.message
            message: "Address: " +
                $routeParams.country + ', ' +
                $routeParams.state + ', ' +
                $routeParams.city
        }
    })