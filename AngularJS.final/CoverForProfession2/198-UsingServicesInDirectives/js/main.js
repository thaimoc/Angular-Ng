/**
 * Created by Von on 1/13/2016.
 */
;(function(angular){
    'use strict';

    /**
     * Alert Service which is a angular service
     * @constructor
     */
    var AlertService = function(){
        var alertService = this;
        
        alertService.alertMessage = 'Something Failed';
        alertService.alertType = 'danger';
        alertService.showAlert = true;
    };

    /**
     * Place is hold to define AlertService functions
     */
    Object.defineProperties(AlertService.prototype, {});

    /**
     * App Controller which is a angular service
     * @param {AlertService} alertService
     * @constructor
     */
    var AppCtrl = function(alertService){
        var app = this;
        
        app.alertService = alertService;
    };

    /**
     * Place is hold to define AppCtrl functions
     */
    Object.defineProperties(AppCtrl.prototype, {
        somethingFailed: {
            value: function(){
                var app = this;
                app.alertService.alertMessage = 'Invoked from AppCtrl';
                app.alertService.alertType = 'success';
            }
        }
    });

    /**
     * Application Alert which is a angular directive
     * @returns {{bindToCtroller: boolean, controller: string, template: string}}
     */
    var appAlert = function(){
        return {
            bindToCtroller: true, 
            controller: 'AppAlertCtrl as appAlert',
            template: '<alert ng-if="appAlert.alertService.showAlert" type="{{appAlert.alertService.alertType}}">' +
            '{{appAlert.alertService.alertMessage}}' +
            '</alert>'
        }
    };

    /**
     * Application Controller which is a angular controller
     * @param {AlertService} alertService
     * @constructor
     */
    var AppAlertCtrl = function(alertService){
        var appAlert = this;

        appAlert.alertService = alertService;
    };

    /**
     * Place is hold to define AppAlertCtrl functions
     */
    Object.defineProperties(AppAlertCtrl.prototype, {});

    /**
     * Angular Defined Area
     */
    angular
        .module('app', ['ui.bootstrap'])
        .service('alertService', AlertService)
        .controller('AppCtrl', AppCtrl)
        .directive('appAlert', appAlert)
        .controller('AppAlertCtrl', AppAlertCtrl);
    
}(window.angular));