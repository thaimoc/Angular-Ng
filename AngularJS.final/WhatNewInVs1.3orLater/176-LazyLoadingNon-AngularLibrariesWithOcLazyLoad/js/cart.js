/**
 * Created by Von on 1/12/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('cart', [])
        .service('list', function(){
            this.items = ['shoe', 'apple', 'phone'];
        });

}(window.angular));