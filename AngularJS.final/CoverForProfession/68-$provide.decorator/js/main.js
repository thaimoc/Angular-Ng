/**
 * Created by Von on 12/25/2015.
 */

;(function(){
    'use strict';

    angular
        .module('app', [])
        .factory('System', function(){
            return function System(){
                this.error = 15;
            }
        })
        .controller('MainCtrl', function($scope, System){
            $scope.system = new System();
            console.log($scope.system);
        })
        .config(function($provide){
            $provide.decorator('System', function($delegate){

                Object.defineProperty($delegate.prototype, 'message', {
                    get: function(){
                        return parseMessage(this.error);
                    }
                });

                /**
                 * This function is like system[error] (system.15 is equal object.property)
                 * @param error
                 * @returns {*}
                 */
                function parseMessage(error){
                    return {
                        15: 'Faulted'
                    }[error];
                }

                return $delegate;
            });
        });
}());