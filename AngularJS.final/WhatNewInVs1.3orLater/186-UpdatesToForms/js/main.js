/**
 * Created by Von on 1/13/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('app', [])
        .controller('MainCtrl', function(){
            var vm = this;
            vm.angularVersion = angular.version.full;
            vm.modelOptions = {};
            vm.fieldName = 'inputField';
        })

}(window.angular));