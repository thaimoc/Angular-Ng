/**
 * Created by Von on 1/12/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('demo', ['ui.router', 'oc.lazyLoad'])
        .config(function ($stateProvider){
            $stateProvider
                .state('store', {
                    templateUrl: 'store.html',
                    controller: 'StoreCtrl as store',
                    resolve: {
                        store: function($ocLazyLoad){
                            return $ocLazyLoad.load({
                                name: 'store',
                                files: ['js/store.js']
                            });
                        }
                    }
                })
        })
        .controller('AppCtrl', function($state){
            var app = this;
            app.click = function(){
                $state.go('store');
            }
        })

}(window.angular));