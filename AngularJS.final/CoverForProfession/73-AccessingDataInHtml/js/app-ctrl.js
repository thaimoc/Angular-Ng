/**
 * Created by Von on 12/25/2015.
 */

;(function(){
    'use strict';

    angular
        .module('app', [])
        .service('TodoService', function(){
            this.todos = [
                {item:'Clean room', done:false},
                {item:'Eat lunch', done:false},
                {item:'Wash car', done:false}
            ];

            this.addTodo = function(newTodo){
                this.todos.push({item:newTodo, done:false});
            }
        })
        .controller('TodoCtrl', function($scope, TodoService){
            this.TodoService = TodoService;
        })

}());