/**
 * Created by Von on 1/11/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('cart', [])
        .service('list', function(){
            this.items = ['shoe', 'apple', 'phone'];
        });

}(window.angular));