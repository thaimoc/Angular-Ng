/**
 * Created by Von on 12/21/2015.
 */

var app = angular.module('app', []);
app.directive('clock', function(){
    return {
        restrict: "E",
        scope: {
            timezone: "@"
        },
        template: "<div>12:00pm {{timezone}}</div>"
    }
});

app.directive('panel', function(){
   return {
       restrict: "E",
       transclude: true,
       scope: {
           title: "@"
       },
       template: "<div style='border: 2px solid blue'>" +
       "<div class='alert-box'>{{title}}</div>" +
       "<div ng-transclude></div>" +
       "</div>"
   }
});