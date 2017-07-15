/**
 * Created by Von on 12/17/2015.
 */
angular.module('behaviorsApp', [])
    .directive('enter', function(){
        return function (scope, element, attrs){
            element.bind('mouseenter', function(){
                element.addClass(attrs.enter);
            })
        }
    })
    .directive('leave', function(){
        return function (scope, element, attrs){
            element.bind('mouseleave', function(){
                element.removeClass(attrs.enter);
            })
        }
    })