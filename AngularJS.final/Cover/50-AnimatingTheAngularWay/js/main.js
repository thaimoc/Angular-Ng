/**
 * Created by Von on 12/22/2015.
 */

var app = angular.module('app', ['ngAnimate']);

app.controller("AppCtrl", function(){
    this.isHidden = false;

    this.fadeIt = function(){
        this.isHidden = !this.isHidden;
    }
});

app.directive("hideMe", function($animate){
    return function (scope, element, attrs){
        scope.$watch(attrs.hideMe, function(newVal){
            if(newVal){
                $animate.addClass(element, 'fade', {duration: 1});
            }else {
                $animate.removeClass(element, 'fade', {duration: 1});
            }
        });
    }
});