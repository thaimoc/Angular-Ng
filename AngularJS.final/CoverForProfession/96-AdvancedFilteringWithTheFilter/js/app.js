/**
 * Created by Von on 12/27/2015.
 */
;(function(angular){
    'use strict';

    angular
        .module('app', ['app.mainCtrl', 'ng', 'ngRoute', 'mgcrea.ngStrap'])
        .config(function($datepickerProvider) {
            angular.extend($datepickerProvider.defaults, {
                dateFormat: 'MM/dd/yyyy',
                startWeek: 1
            });
        })

}(window.angular));