/**
 * Created by Von on 1/10/2016.
 */
;(function(angular){
    'use strict';

    var WatchCtrl = function($scope){
        var model = this;
        model.scope = $scope;

        model.scope.onChange = function(){
            model.checkPassword(model.scope.user.password);
        }
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
        checkPassword: {
            value: function(value){
                if(!value) return;

                this.scope.reqs = [];

                if(!this.isLongEnough(value)){
                    this.scope.reqs.push('Too short');
                }

                if(!this.hasNumbers(value)){
                    this.scope.reqs.push('Must include numbers');
                }

                this.scope.showReqs = this.scope.reqs.length;

            },
            enumerable: true
        }
    });

    angular
        .module('app', [])
        .controller('WatchCtrl', WatchCtrl);

}(window.angular));