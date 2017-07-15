/**
 * Created by Von on 12/18/2015.
 */

angular.module("app", [])

    //The second resolve is used run function
    .run(function($templateCache){
        $templateCache
            .put("zippy.html",
                    '<div>' +
                        '<h3 ng-click="toggleContent()">{{title}}</h3>' +
                        '<div ng-show="isContentVisible" ng-transclude></div>' +
                    '</div>'
            )
    })

    .directive("zippy", function($templateCache){
        console.log($templateCache.get("zippy.html"));

        return {
            restrict: "E",
            replace:true,
            transclude: true,
            scope:{
                title:"@"
            },
            //You can use template:$templateCache.get("zippy.html") with the first solution
            // but you can use template or templateUrl with the both ones,
            templateUrl:"zippy.html",
            link: function(scope){
                scope.isContentVisible = false;

                scope.toggleContent = function(){
                    scope.isContentVisible = !scope.isContentVisible;
                }
            }
        }
    })