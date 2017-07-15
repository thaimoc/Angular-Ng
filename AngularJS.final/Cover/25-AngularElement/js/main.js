/**
 * Created by Von on 12/18/2015.
 */

angular.module("app", [])
    .directive("dumbPassword", function(){
        var validElement = angular.element('<div>{{model.input}}</div>');

        this.link = function(scope){
            scope.$watch("model.input", function(value){
                //noinspection JSValidateTypes
                if ('password' === value) {
                    validElement.toggleClass("alert-box alert")
                }
            })
        };

        return {
            restrict: "E",
            replace:true,
            template:
            '<div>' +
            '<input type="text" ng-model="model.input">' +
            '</div>',
            compile:function(tElement){
                tElement.append(validElement);

                return link;
            }
        }
    });