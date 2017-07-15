/**
 * Created by Von on 12/18/2015.
 * Demo The Different Between of $scope and scope
 */

angular.module("myApp", [])
        .controller("myCtrl",
            /**
             * Naming is required, all properties are named by just like it is.
             * The $scope is named to like it is , any other is also.
             * And order is not required that mean you can change order of $scope
             * or $http or other services, and it is whatever.
             * @param $scope
             * @param $http
             */
            function($scope, $http){
                // ($scope, $http) just like ($http, $scope)
                // and it will be error when (Not$ScopeWord, Not$HttpWord)
                // if you want to change this rule please flow below
            }
        )

        .controller("otherCtrl", ["$scope", "$http", function(anyWord, otherAnyWord){
            // $scope === anyWord
            // $http === otherAnyWord
        }])

        .controller("otherOtherCtrl", ["$http", "$scope", function(anyWord, otherAnyWord){
            // $scope === otherAnyWord
            // $http ===  anyWord
        }])

        .directive("myDirective", function($http, $parse){

            return{
                /**
                 * Order required, all properties are named by any words.
                 * But in this function order is required
                 * therefore the first parameter is always is the scope,
                 * the second parameter is always is the element,
                 * and the three parameter is always is attributes
                 * @param scope - any name ($scope, scope, a, b, c, ...)
                 * @param element - any name ($scope, scope, a, b, c, ...)
                 * @param attrs  - any name ($scope, scope, a, b, c, ...)
                 */
                link: function(scope, element, attrs){
                    // (scope, element, attrs) or ($scope, element, attrs) or (a, b, c)
                    // then scope === $scope === a and others are also
                }
            }
        })