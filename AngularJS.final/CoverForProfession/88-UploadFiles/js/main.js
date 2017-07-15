/**
 * Created by Von on 12/26/2015.
 */

;(function(){
    'use strict';

    angular
        .module('app', [])
        .directive('fileInput', ['$parse', function($parse){
            return {
                restrict: 'A',
                link: function(scope, element, attrs){
                    element.bind('change', function(){
                        $parse(attrs.fileInput)
                            .assign(scope,  element[0].files);
                        scope.$apply();
                    });
                }
            }
        }])
        .controller('uploadCtrl', function($scope, $http) {

            $scope.fileChanged = function (element) {
                $scope.files = element.files;
                $scope.$apply();

                console.log($scope.files);
            };

            $scope.upload = function(){
                var fd = new FormData();
                angular.forEach($scope.files,  function(file){
                    fd.append('file', file);
                });

                $http.post('upload', fd, {
                    transformRequest: angular.identity,
                    headers:{'Content-Type':undefined}
                })
                    .success(function(d){
                        console.log(d);
                    });
            }

        });
}());