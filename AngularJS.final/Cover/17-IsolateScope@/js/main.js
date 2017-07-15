/**
 * Created by Von on 12/17/2015.
 */

angular.module("drinkApp", [])
    .controller("AppCtrl", function($scope){
        $scope.ctrlFlavor = "blackberry"
    })
    //.directive("drink", function(){
    //    return {
    //        template: '<div>{{flavor}}</div>',
    //        link: function(scope, element, attrs){
    //            scope.flavor = attrs.flavor;
    //        }
    //    }
    //})

    .directive("drink", function(){
        return {
            scope:{
                flavor:"@"
            },
            template: '<div>{{flavor}}</div>'
        }
    })