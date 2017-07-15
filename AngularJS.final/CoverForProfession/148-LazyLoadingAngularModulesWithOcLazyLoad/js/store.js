/**
 * Created by Von on 1/9/2016.
 */
;(function(angular){
    'use strict';

    var Cart =  function(){};
    Object.defineProperties(Cart.prototype, {
        buy: {
            value: function(){
                console.log("Thanks for buying something!");
            }
        }
    });

    angular
        .module('store', [])
        .service('cart', [Cart]);

}(window.angular));