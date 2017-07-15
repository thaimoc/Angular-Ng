/**
 * Created by Von on 1/12/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('app', ['ngMessages'])

        .controller('MainCtrl', function() {
            var vm = this;
            vm.angularVersion = angular.version.full;

        });

}(window.angular));