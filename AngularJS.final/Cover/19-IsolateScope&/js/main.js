/**
 * Created by Von on 12/17/2015.
 */

angular.module("phoneApp", [])
    .controller("AppCtrl", function($scope){
        $scope.callHome = function(message){
            alert(message)
        }
    })

    .directive('phone', function(){
        return {
            scope:{
                dial:"&"
            },
            template:'<input class="form-control col-lg-12" type="text" ng-model="value"> </br>'+
                '<div class="btn btn-info col-lg-12" ng-click="dial({message:value})">Call home!</div>'
        }
    })