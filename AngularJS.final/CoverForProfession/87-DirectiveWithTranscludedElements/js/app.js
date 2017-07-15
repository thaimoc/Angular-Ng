/**
 * Created by Von on 12/26/2015.
 */

;(function(){
    'use strict';

    angular
        .module('app', [])
        .directive('wrapWith', function($templateCache){
            return {
                transclude: 'element',
                link: function(scope, element, attrs, ctrl, transclude){
                    var template = $templateCache.get(attrs.wrapWith);
                    console.log(template);

                    var templateElement = angular.element(template);
                    console.log(element);

                    transclude(scope,  function(clone){
                        element.after(templateElement.append(clone));
                    })

                }
            }
        })

}());