/**
 * Created by Von on 12/25/2015.
 */

;(function(angular){
    'use strict';

    angular
        //.module('website-banner', ['templates-common'])
        .module('website-banner', [])
        .directive('website-banner', function(){
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'directives/banner/website-banner.tpl.html',
                scope: {
                    title: '@'
                }
            }
        })

}(window.angular));