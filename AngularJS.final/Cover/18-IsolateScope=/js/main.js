/**
 * Created by Von on 12/17/2015.
 */

angular.module("drinkApp", [])
    .controller("AppCtrl", function($scope){
        $scope.ctrlFlavor = "blackberry"
    })

    .directive("drink", function(){
        return {
            scope:{
                flavor:"="
            },
            template: '<input type="text" ng-model="flavor">'
        }
    })