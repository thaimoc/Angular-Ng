/**
 * Created by Von on 1/3/2016.
 */

;(function(){
    'use strict';

    /**
     * Create javascript object following the theory of javascript object oriented
     * @constructor
     */
    var DemoApplyVsDigest = function(){};

    /**
     * Define for DemoApplyVsDigest
     */
    Object.defineProperties(DemoApplyVsDigest.prototype, {
        __randomBorder : {
            value: function(target){
                TweenMax.to(target,.5, {borderColor: tinycolor.fromRatio({
                    r: Math.random(),
                    g: Math.random(),
                    b: Math.random()
                }).toHexString()});
            },
            enumerable: false
        },

        watchRandomBorder: {
            value: function (scope, element){
                scope.$watch(this.__randomBorder(element));
            },
            enumerable: true
        },

        createDirective: {
            /**
             * Create directive which has type is element
             * @param rootScope $rootScope
             * @param action    string likes '$apply'/'$digest'
             * @param countName string for countName
             * @returns {{restrict: string, template: string, link: link}}
             */
            value: function(rootScope, action, countName){
                return {
                    restrict: 'E',
                    template: '<button class="btn">' + action + ' {{' + countName + ' }}</button>',
                    link: function(scope, element){
                        scope[countName] = 0;
                        element.on('click', function(){
                            rootScope.time = moment().format('h:mm:ss');
                            scope[countName]++;
                            scope[action]();
                        });
                    }
                };
            },
            enumerable: true
        }
    });

    var directive = new DemoApplyVsDigest();

    angular
        .module('demo', [])
        .filter('heavy', function(){
            return function (val){
                return val + "     heavy!!! " + moment().format('SSS');
            }
        })
        .controller('OuterCtrl', function($scope, $element){
            directive.watchRandomBorder($scope, $element);
        })
        .controller('MiddleCtrl', function($scope, $element){
            directive.watchRandomBorder($scope, $element);
        })
        .controller('InnerCtrl', function($scope, $element){
            directive.watchRandomBorder($scope, $element);
        })
        .directive('digestButton', function($rootScope){
            return directive.createDirective($rootScope, '$digest', 'digestCount');
        })
        .directive('applyButton', function($rootScope){
            return directive.createDirective($rootScope, '$apply', 'applyCount');
        });

}());