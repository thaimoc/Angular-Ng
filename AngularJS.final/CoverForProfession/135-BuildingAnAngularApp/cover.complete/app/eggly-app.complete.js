/**
 * Created by Von on 1/8/2016.
 */
;(function(angular){
    'use strict';

   angular
       .module('Eggly',['ui.router', 'categories'])
       .config(function($stateProvider, $urlRouterProvider){
           $stateProvider
               .state('eggly', {
                   url:'',
                   abstract: true
               });

           $urlRouterProvider.otherwise('/');
       });

}(window.angular));