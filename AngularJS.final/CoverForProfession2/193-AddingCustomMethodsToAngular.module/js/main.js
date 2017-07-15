/**
 * Created by Von on 1/13/2016.
 */
;(function(angular){
    'use strict';

    var original = angular.module;

    angular.module = function(name, deps, config){
        var module = original(name, deps,  config);

        module.quickTemplate = function(name, template){
            module.directive(name, function(){
                return {
                    template: template
                }
            })
        };

        return module;
    };

    angular
        .module('app', [])
        .quickTemplate('quick', '<h1>Hello World</h1>')

}(window.angular));