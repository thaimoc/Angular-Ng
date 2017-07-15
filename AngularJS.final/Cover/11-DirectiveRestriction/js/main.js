/**
 * Created by Von on 12/17/2015.
 */

var app = angular.module('superHero', [])

    .directive('superman', function(){
        return {
            restrict:"A",
            link: function(){
                alert("I'm working stronger!");
            }
        }
    })
    .directive('flash', function(){
        return {
            restrict:"A",
            link: function(){
                alert("I'm working faster!");
            }
        }
    })

