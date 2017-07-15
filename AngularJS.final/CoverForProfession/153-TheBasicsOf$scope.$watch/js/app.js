/**
 * Created by Von on 1/10/2016.
 */
;(function(angular){
    'use strict';

    var WatchCtrl = function($scope){
        this.scope = $scope;
        this.init();
    };

    Object.defineProperties(WatchCtrl.prototype, {
        isLongEnough: {
            value: function (pwd) {
                return pwd.length > 4;
            },
            enumerable: true
        },
        hasNumbers: {
            value: function(pwd){
                return /[0-9]/.test(pwd);
            },
            enumerable: true
        },
        init: {
            value: function(){
                var that = this;
                that.scope.$watch('user.password', function (newVal) {
                    if (!newVal) return;

                    that.scope.reqs = [];

                    if (!that.isLongEnough(newVal)) {
                        that.scope.reqs.push('Too short');
                    }

                    if (!that.hasNumbers(newVal)) {
                        that.scope.reqs.push('Must include numbers');
                    }

                    that.scope.showReqs = that.scope.reqs.length;
                });
            },
            enumerable: false
        }
    });

    angular
        .module('app', [])
        .controller('WatchCtrl', WatchCtrl);

}(window.angular));