/**
 * Created by Von on 12/17/2015.
 */

angular.module('choreApp', [])
    .controller('choreCtrl', function($scope){
        $scope.logChore = function(chore){
            alert(chore + ' is done!');
        };

        $scope.logLazyChore = function(chore){
            alert(chore + ' is not done!');
        }
    })

    /**
     * This is with scope is not isolated
     */
    .directive('kidNormal', function(){
        return {
            restrict:'E',
            template:'<label>This is with scope is not isolated</label>' +
            ' <input type="text" class="col-lg-12" ng-model="chore">'+
            ' <div class="col-lg-12">{{chore}}</div>' +
            ' <div class="btn btn-info col-lg-6" ng-click="logChore(chore)">I\'m done!</div>' +
            '<div class="btn btn-info col-lg-6" ng-click="logLazyChore(chore)">Ignore!</div>'
        }
    })

    /**
     * This is with scope is isolated
     */
    .directive('kid', function(){
        return {
            restrict:'E',
            scope:{
                done:"&",
                fail:"&"
            },
            template:'<label>This is with scope is isolated</label>' +
                '<input type="text" class="col-lg-12" ng-model="chore">'+
                ' <div class="col-lg-12">{{chore}}</div>' +
                ' <div class="btn btn-info col-lg-6" ng-click="done({chore:chore})">I\'m done!</div>' +
                '<div class="btn btn-info col-lg-6" ng-click="fail({chore:chore})">Ignore!</div>'
        }
    })