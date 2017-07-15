/**
 * Created by Von on 12/25/2015.
 */

;(function(angular){
    'use strict';

    angular
        .module('ui-router-named-views', [
                'ui-router-named-views.alt-one'
            ,   'ui-router-named-views.alt-two'
            ,   'ui-router-named-views.alt-three'
            ,   'website-banner'
            ,   'ui.router'
        ])
        .config(function($stateProvider, $urlRouterProvider){
            $stateProvider
                .state('app', {
                    url: '/',
                    views: {
                        'header':{
                            templateUrl: 'app/common/header.tpl.html'
                        },
                        'sidebar':{
                            templateUrl: 'app/common/sidebar.tpl.html'
                        },
                        'content': {
                            templateUrl: 'app/common/content.tpl.html'
                        },
                        'footer':{
                            templateUrl: 'app/common/footer.tpl.html'
                        }
                    }
                });
            $urlRouterProvider.otherwise('/');
        })

}(window.angular));