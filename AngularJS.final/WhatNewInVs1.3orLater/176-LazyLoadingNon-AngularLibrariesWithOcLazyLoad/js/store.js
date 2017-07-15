/**
 * Created by Von on 1/12/2016.
 */

;(function(angular){
    'use strict';

    angular
        .module('store', [{
            name: 'cart',
            files: ['js/cart.js', '../../Libs/vendor/moment.js']
        }])
        .controller('StoreCtrl', function(list){
            var store = this;
            store.message = this.items;

            store.date = moment().format('MMMM Do YYYY, h:mm:ss a');
        });

}(window.angular));