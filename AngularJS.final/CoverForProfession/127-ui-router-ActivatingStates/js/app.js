/**
 * Created by Von on 1/2/2016.
 */
;(function(){
    'use strict';

    angular
        .module('app', ['ui.router', 'projectData', 'projectsList'])
        .config(function($urlRouterProvider){
            $urlRouterProvider.otherwise('/projects/p1');
        })
        .run(function($rootScope, $state){
            $rootScope.$state = $state;
            $rootScope
                .$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
                    console.log('StateChangeError:', error);
                });
        })
}());