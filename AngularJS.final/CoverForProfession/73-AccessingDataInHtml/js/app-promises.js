/**
 * Created by Von on 12/25/2015.
 */

;(function(){
    'use strict';

    angular
        .module('app', [])
        .service('TodoService', function($q, $timeout){
            this.getTodos = function(){
                var d = $q.defer();

                $timeout(function(){
                    d.resolve([
                        {item:'Clean room', done:false},
                        {item:'Eat lunch', done:false},
                        {item:'Wash car', done:false}
                    ]);
                }, 3000);

                return d.promise;
            };

            this.addTodo = function(newTodo){
                this.todos.push({item:newTodo, done:false});
            }
        })
        .controller('TodoCtrl', function(TodoService){
            var todoCtrl = this;

            TodoService
                .getTodos()
                .then(function(result){
                    todoCtrl.todos = result;
                });
            todoCtrl.addTodo = TodoService.addTodo;
        })

}());