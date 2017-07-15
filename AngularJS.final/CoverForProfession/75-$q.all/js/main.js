/**
 * Created by Von on 12/25/2015.
 */

;(function(){
    'use strict';

    angular
        .module('app', [])
        .controller('AppCtrl', function($q, $timeout){
            var one     = $q.defer(),
                two     = $q.defer(),
                three   = $q.defer(),

                /** below mean all promise will be to end flowing by order */
                all = $q.all([one.promise, two.promise, three.promise]);

            all.then(success);

            function success(data){
                console.log(data);
            }

            /** below mean all promise will not be to end flowing by order */
            one.promise.then(success);
            two.promise.then(success);
            three.promise.then(success);

            $timeout(function(){
                one.resolve('one done');
            }, Math.random() * 1000);
            $timeout(function(){
                two.resolve('two done');
            }, Math.random() * 1000);
            $timeout(function(){
                three.resolve('three done');
            }, Math.random() * 1000);


        })

}());