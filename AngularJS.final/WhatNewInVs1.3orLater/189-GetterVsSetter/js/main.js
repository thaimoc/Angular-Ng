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
            vm.modelOptions = {
                getterSetter: true,
                allowInvalid: true
            };
            vm.fieldName = 'inputField';
            var _val = '';
            vm.inputValue = function(val){
                return angular.isDefined(val) ? (_val = val) : _val;
            }
        })

}(window.angular));