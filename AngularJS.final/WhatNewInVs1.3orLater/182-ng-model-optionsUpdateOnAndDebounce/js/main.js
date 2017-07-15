/**
 * Created by Von on 1/12/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('app', [])
        .controller('MainCtrl', function(){
            var vm = this;
            vm.angularVersion = angular.version.full;
            vm.modelOptions = {
                timezone: 'UTC',
                updateOn: 'default blur',
                debounce: {
                    default: 1500,
                    blur: 0
                }
            };
        });

}(window.angular));