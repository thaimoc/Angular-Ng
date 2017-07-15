/**
 * Created by Von on 12/17/2015.
 */
angular.module('behaviorsApp', [])
    .directive('enter', function(){
        return function (scope, element){
            element.bind('mouseenter', function(){
                console.log("I'm inside of you");
            })
        }
    })
    .directive('leave', function(){
        return function (scope, element){
            element.bind('mouseleave', function(){
                console.log("I'm leaving on a jet plane");
            })
        }
    })