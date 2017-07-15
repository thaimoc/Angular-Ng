/**
 * Created by Von on 12/17/2015.
 */

angular.module('superApp', [])
    .directive('superhero', function() {
        return {
            restrict: 'E',
            scope: {},

            controller: function ($scope) {
                $scope.abilities = [];
                this.addStrength = function () {
                    $scope.abilities.push("strength");
                }

                this.addSpeed = function () {
                    $scope.abilities.push("speed");
                }

                this.addFlight = function () {
                    $scope.abilities.push("flight");
                }
            },

            link: function ($scope, element) {
                element.addClass("btn btn-info col-lg-12");
                element.bind("mouseenter", function () {
                    console.log($scope.abilities);
                })
            }
        }
    })

    .directive('strength', function(){
        return {
            require: 'superhero',
            link: function(scope, element, attrs, superheroCtrl){
                superheroCtrl.addStrength();
            }
        }
    })

    .directive('speed', function(){
        return {
            require: 'superhero',
            link: function(scope, element, attrs, superheroCtrl){
                superheroCtrl.addSpeed();
            }
        }
    })

    .directive('flight', function(){
        return {
            require: 'superhero',
            link: function(scope, element, attrs, superheroCtrl){
                superheroCtrl.addFlight();
            }
        }
    })