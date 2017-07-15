/**
 * Created by Von on 12/18/2015.
 */

angular.module("phoneApp", [])
    .controller("AppCtrl", function($scope){
        this.sayHi = function(){
            alert("Hi")
        }

        return $scope.AppCtrl = this;
    })