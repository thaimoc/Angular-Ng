/**
 * Created by Von on 1/13/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('app', [])
        .controller('MainCtrl', function(){
            var vm = this;
            vm.angularVersion = angular.version.full;
            vm.title = 'bindToController'
        })
        .directive('note', function(){
            return {
                scope: {
                    message: '@'
                },
                bindToController: true, 
                controller: 'NoteCtrl as note',
                template: '<div>{{note.message}}</div>'
            }
        })
        .controller('NoteCtrl', function(){
        })
        .directive('pad', function(){
            return {
                scope: {
                    message: '@'
                },
                bindToController: true, 
                controller: 'PadCtrl as pad',
                template: '<div>{{pad.message}}</div>'
            }
        })
        .controller('PadCtrl', function(){
        })

}(window.angular));