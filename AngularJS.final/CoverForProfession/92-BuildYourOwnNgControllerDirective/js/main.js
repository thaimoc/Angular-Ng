/**
 * Created by Von on 12/26/2015.
 */

;(function(){
    'use strict';

    angular
        .module('app', [])
        .controller("AppCtrl", function(){

        })
        .controller("FirstCtrl", function(){
            this.message = "I'm from the first controller";
        })
        .controller("SecondCtrl", function(){
            this.message = "The second controller is where I'm from";
        })
        .directive('customController', function(){
            return {
                scope: true,
                controller: "@",
                priority: 500
            }
        })

}());