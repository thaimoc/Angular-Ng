/**
 * Created by Von on 12/25/2015.
 */

;(function(angular){
    'use strict';

    angular
        .module('ui-router-named-views.alt-two', ['ui.router'])
        .config(function($stateProvider){
            $stateProvider
                .state('app.alt-two', {
                    url: 'alt-two',
                    views: {
                        'content@':{
                            templateUrl: 'app/alt-two/alt-two.content.tpl.html'
                        },
                        'header@':{
                            templateUrl: 'app/alt-two/alt-two.header.tpl.html'
                        }
                    }
                })
        })

}(window.angular));