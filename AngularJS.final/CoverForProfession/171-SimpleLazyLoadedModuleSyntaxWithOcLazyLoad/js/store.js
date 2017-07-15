/**
 * Created by Von on 1/11/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('store', [{
            name: 'cart',
            files: ['js/cart.js']
        }])
        .controller('StoreCtrl', function(list){
            var store = this;
            store.message = list.items;
        })

}(window.angular));