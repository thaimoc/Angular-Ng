/**
 * Created by Von on 1/13/2016.
 */

;(function(angular){
    'use strict';

    angular
        .module('app', ['ngAria'], function config($ariaProvider){
            $ariaProvider
                .config({
                   ariaValue: false
                });
        })
        .controller('MainCtrl', function(){
            var vm = this;
            vm.angularVersion = angular.version.full;
            vm.lessonTitle = 'How to use the agAria module';
        })
        .directive('showAttrs', function(){
            return function (scope, element, attrs){
                var pre = document.createElement('pre');
                element.after(pre);
                scope.$watch(function(){
                    var attrs = {};
                    Array.prototype.slice.call(element[0].attributes, 0).forEach(function(item){
                        if(item.name !== 'show-attrs'){
                            attrs[item.name] = item.value;
                        }
                    });
                    return attrs;
                }, function(newAttrs, oldAttrs){
                    pre.innerText = JSON.stringify(newAttrs, null, 2);
                }, true);
            };
        });

}(window.angular));