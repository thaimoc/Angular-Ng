/**
 * Created by Von on 1/9/2016.
 */
;(function(angular){
    'use strict';

    var AppCtrl = function($injector, $ocLazyLoad){
        this.$injector = $injector;
        this.$ocLazyLoad = $ocLazyLoad;
    };

    Object.defineProperties(AppCtrl.prototype, {
        click: {
            value: function(){
                var that = this;
                that.$ocLazyLoad.load({
                    name: 'store',
                    files: [
                        'js/store.js'
                    ]
                }).then(function(){
                    var cart = that.$injector.get('cart');
                    console.log(cart);
                    cart.buy();
                }, function(){
                    console.log('failed to load module');
                });
            },
            enumerable: true
        }
    });

    angular
        .module('app', ['oc.lazyLoad'])
        .controller('AppCtrl', ['$injector', '$ocLazyLoad', AppCtrl]);

}(window.angular));