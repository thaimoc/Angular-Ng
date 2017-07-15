/**
 * Created by Von on 1/2/2016.
 */
;(function(){
    'use strict';

    angular
        .module('store-directives', [])
        .directive('productDescription', ProductDescriptionDirective)
        .directive('productReviews', ProductReviewsDirective)
        .directive('productSpecs', ProductSpecsDirective)
        .directive('tabgroup', TabgroupDirective)
        .directive('tab', TabDirective);

    function ProductDescriptionDirective(){
        return {
            restrict: 'E',
            scope:{
                item:"="
            },
            templateUrl: "templates/product-description.html"
        }
    }

    function ProductReviewsDirective(){
        return {
            restrict: "E",
            scope: {
                item: "="
            },
            templateUrl: "templates/product-reviews.html"
        }
    }

    function ProductSpecsDirective(){
        return {
            restrict: "E",
            scope: {
                item: "="
            },
            templateUrl: "templates/product-specs.html"
        }
    }

    function TabgroupDirective(){
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'templates/product-tabs.html',
            controller: function($scope){
                $scope.tabs = [];
                this.addTab = function(tab){
                    if($scope.tabs.length == 0){
                        tab.selected = true;
                    }
                    $scope.tabs.push(tab);
                };

                $scope.select = function(tab){
                    angular.forEach($scope.tabs, function(eachTab){
                        eachTab.selected = angular.equals(tab, eachTab);
                    })
                }
            }
        }
    }

    function TabDirective(){
        return {
            restrict: 'E',
            scope: {
                title: '@'
            },
            transclude: true,
            template: '<div ng-show="selected" ng-transclude></div>',
            require: '^tabgroup',
            link: function(scope, element, attributes, controller){
                controller.addTab(scope);
            }
        }
    }

}());