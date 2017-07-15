/**
 * Created by Von on 12/18/2015.
 */

angular.module("app", ["ngRoute"])
    .config(function config($routeProvider){
        $routeProvider.when('/',
            {
                templateUrl:"app.html",
                controller:"AppCtrl",
                resolve:{
                    app: function($q, $timeout){
                        var defer = $q.defer();
                        $timeout(function (){
                            defer.resolve();
                        }, 2000);
                        return defer.promise;
                    }
                }
            })
    })
    .controller("AppCtrl", function($scope){
        $scope.model = {
            message: "I'm a great app!"
        }
    })