/**
 * Created by Von on 12/18/2015.
 */

angular.module("app", [])
    .directive("zippy", function(){
        return {
            restrict: "E",
            replace:true,
            transclude: true,
            scope:{
                title:"@"
            },
            templateUrl:"zippy.html",
            link: function(scope){
                scope.isContentVisible = false;

                scope.toggleContent = function(){
                    scope.isContentVisible = !scope.isContentVisible;
                }
            }
        }
    })