/**
 * Created by Von on 1/6/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('Eggly', [
            'ngAnimate',
            'ui.router',
            'categories',
            'bookmarks'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('eggly', {
                    url: '',
                    abstract: true
                });

            $urlRouterProvider.otherwise('/');
        });

}(window.angular));