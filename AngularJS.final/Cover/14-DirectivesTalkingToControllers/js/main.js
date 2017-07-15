/**
 * Created by Von on 12/17/2015.
 */
angular.module('twitterApp', [])
.controller('AppCtrl', function($scope){
    $scope.loadMoreTweets=function(){
        alert("Loading more tweets!");
    }
})
.directive('enter', function(){
    return function (scope, element, attrs){
        element.bind('mouseenter', function(){
            scope.$apply(attrs.enter);
        })
    }
})