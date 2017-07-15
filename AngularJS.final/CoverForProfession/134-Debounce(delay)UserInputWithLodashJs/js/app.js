/**
 * Created by Von on 1/4/2016.
 */
;(function(){
    'use strict';

    angular
        .module('app', [])
        .controller('AppCtrl', function($http, $scope){
            var app = this;
            app.infoMessage = "";
            app.searchTerm = '';
            app.debounceTerm = '';

            //$http.get('//localhost:300/people')
            //    .success(function(data){
            //        app.people = data;
            //    });

            app.people = [
                {id:1, firstName:'Kenerdy', lastName:'John', email:'lem@gmail.com'},
                {id:2, firstName:'Sara', lastName:'John', email:'lem@gmail.com'},
                {id:3, firstName:'Tuike', lastName:'John', email:'lem@gmail.com'},
                {id:4, firstName:'Frames', lastName:'John', email:'lem@gmail.com'},
                {id:5, firstName:'Smith', lastName:'John', email:'lem@gmail.com'},
                {id:6, firstName:'Kenerdy', lastName:'John', email:'lem@gmail.com'},
                {id:7, firstName:'Kenerdy', lastName:'John', email:'lem@gmail.com'},
                {id:8, firstName:'Kenerdy', lastName:'John', email:'lem@gmail.com'},
                {id:9, firstName:'Kenerdy', lastName:'John', email:'lem@gmail.com'},
                {id:10, firstName:'Kenerdy', lastName:'John', email:'lem@gmail.com'}
            ];

            $scope.$watch('app.searchTerm', function(n, o){
                if(n == o) return;
                app.infoMessage = 'Loading...';
            });

            $scope.$watch('app.searchTerm', _.debounce(function(n, o){
                app.debounceTerm = n;
                app.infoMessage = '';
                $scope.$apply();
            }, 500));
        })
}());