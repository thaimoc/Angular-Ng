/**
 * Created by Von on 12/25/2015.
 */

;(function(){
    'use strict';

    angular
        .module('app', [])
        .run(function($rootScope){
            /**
             * This case has a disadvantage
             * that is $rootScope will be fixed in this case (it looks like a hard code)
             * */

            $rootScope.todos = [
                {item:'Clean room', done:false},
                {item:'Eat lunch', done:false},
                {item:'Wash car', done:false}
            ]
        })

}());