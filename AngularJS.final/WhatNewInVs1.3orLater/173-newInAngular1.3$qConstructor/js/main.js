/**
 * Created by Von on 1/12/2016.
 */
;(function(angular){
    'use strict';


    var MainCtrl = function($q){
        var vm = this;
        vm.$q = $q;
        vm.angularVersion = angular.version.full;
    };
    Object.defineProperties(MainCtrl.prototype, {
        doAsync: {
            value: function(rejectIt){
                /** in Normal case
                var vm = this,
                    deferred = vm.$q.defer();
                setTimeout(function(){
                    var doneTime = new Date();
                    if(!rejectIt){
                        deferred.resolve({
                            resolvedData: 'resolved at ' + doneTime
                        })
                    }else{
                        deferred.reject({
                            rejectedData: 'rejected at ' + doneTime
                        })
                    }
                }, 500);
                return deferred.promise;
                 */
                /** in new case */
                return this.$q(function(resolve, reject){
                    setTimeout(function(){
                        var doneTime = new Date();
                        if(!rejectIt){
                            resolve({
                                resolvedData: 'resolved at ' + doneTime
                            })
                        }else{
                            reject({
                                rejectedData: 'rejected at ' + doneTime
                            })
                        }
                    }, 500);
                })
            },
            enumerable: true
        },
        fire: {
            value: function(rejectIt){
                var vm = this;
                vm.doAsync(rejectIt).then(function(data){
                    vm.resolvedValue = data;
                }, function(error){
                    vm.rejectedValue = error;
                });
            },
            enumerable: true
        }
    });

    angular
        .module('app', [])
        .controller('MainCtrl', MainCtrl);

}(window.angular));