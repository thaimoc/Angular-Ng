/**
 * Created by Von on 12/25/2015.
 */

;(function(){
    'use strict';

    angular
        .module('app', [])
        .controller('AppCtrl', function($q, $interval){
            var timer = $interval(function(){}, 100, 10);

            function success(){
                console.log('done');
            }

            function error(){
                console.log('cancelled or error');
            }

            function notify(){
                console.log('updating');
            }

            timer.then(success, error, notify);

            this.cancel = function(){
                $interval.cancel(timer);
            }
        })
}());