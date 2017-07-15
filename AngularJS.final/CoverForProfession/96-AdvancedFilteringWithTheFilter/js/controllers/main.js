/**
 * Created by Von on 12/27/2015.
 */

;(function(angular){
    'use strict';

    angular
        .module('app.mainCtrl', ['app.users'])
        .controller('MainCtrl', function($scope, users) {
            $scope.users = users;

            $scope.filter = {
                fuzzy: '',
                name: ''
            };

            $scope.minDate = new Date('January 1, 2000');
            $scope.maxDate = new Date();

            $scope.joinedLaterThan = function(date){
                return function (user){
                    if(!date) return true;
                    return user.joined >= date;
                }
            };
            $scope.joinedEarlyThan = function(date){
                return function (user){
                    if(!date) return true;
                    return user.joined <= date;
                }
            };

            //$scope.dateRangeFilter = function (property, startDate, endDate) {
            //    return function (item) {
            //        if (item[property] === null) return false;
            //
            //        if(startDate <= item[property] && item[property] <= endDate){
            //            return true;
            //        }
            //
            //        return false;
            //    }
            //}
        });

}(window.angular));