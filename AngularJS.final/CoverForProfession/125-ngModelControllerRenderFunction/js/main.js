/**
 * Created by Von on 1/2/2016.
 */
;(function(){

    'use strict';

    angular
        .module("app", [])
        .directive("bank", function($filter){
            return {
                restrict: "E",
                template: "<div>Click to deposit $10.</div>",
                require: 'ngModel',
                link: function(scope, element, attrs, ngModel){
                    ngModel.$formatters.push($filter('currency'));

                    ngModel.$render = function(){
                        element.text("You now have: " + ngModel.$viewValue);
                    }
                }
            }
        })

}());