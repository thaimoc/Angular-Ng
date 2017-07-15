/**
 * Created by Von on 12/25/2015.
 */

;(function(){
    'use strict';

    angular
        .module('app', [])
        .service('TodoService', function(){
            /**
             * In this case you can share a service to other angular object
             * and you can add functions ('addTodo') in this service.
             * This case you can share all function of this service
             * that you can change it to be easy one time
             * */
            this.todos = [
                {item:'Clean room', done:false},
                {item:'Eat lunch', done:false},
                {item:'Wash car', done:false}
            ];

            this.addTodo = function(newTodo){
                this.todos.push({item:newTodo, done:false});
            }
        })
        .run(function($rootScope, TodoService){
            $rootScope.TodoService = TodoService;
        })

}());