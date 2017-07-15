/**
 * Created by Von on 12/18/2015.
 */

var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: "view/app.html",
                controller: "ViewCtrl",
                resolve: {
                    loadData: viewCtrl.loadData
                }
            })
});

app.directive("error", function($rootScope){
    return {
        restrict:"E",
        template: '<div class="alert-box alert" ng-show="isError">Error!!!!!!!!!!!</div>',
        link: function(scope){
            $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
                scope.isError = true;
            })
        }
    }
})

app.controller("AppCtrl", function($rootScope) {
    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
        console.log(rejection);
    })
});

var viewCtrl = app.controller("ViewCtrl", function($scope, $route) {
    console.log($route);
    $scope.model = {
        message: "I'm a great app!"
    }
});

viewCtrl.loadData = function($q, $timeout) {
    var defer = $q.defer();
    $timeout(function() {
        defer.reject("Your network is down");
    }, 2000);
    return defer.promise;
}