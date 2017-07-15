/**
 * Created by Von on 12/20/2015.
 */

var app = angular.module("app", []);

app.factory("game", function(){
    return {
        title: "StartCraft"
    }
});

//angular.injector(['app']).invoke(function(game){
//   alert(game.title);
//});
//
//app.controller("AppCtrl", function($scope, game){
//   $scope.title = game.title;
//});
//
//app.controller("AppCtrl", function($scope, game, $injector){
//    $injector.invoke(function(game){
//       alert(game.title);
//    });
//
//   $scope.title = game.title;
//});


app.controller("AppCtrl", function($scope, $injector){
    $injector.invoke(function(game){
        $scope.title = game.title;

        alert(game.title);
    });
});