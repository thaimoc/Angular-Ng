/**
 * Created by Von on 12/24/2015.
 */

;(function(angular){
    'use strict';

    angular
        .module('FlightServices', [])
        .config(window.$QDecorator)
        .service('user', function(){
            return {
                email: 'angularjsexpert@gmail.com',
                repository: 'https://githhub.com/angularjsexpert/angularjs-changing-promises'
            };
        })
        .service('travelService', function(user, $q){
            // Flight API (each returns a promise)
            return {
                getDeparture : function(user){
                    var dfd = $q.defer();

                    // Mock departure infomation for the user's flight

                    dfd.resolve({
                        userID      : user.email,
                        flightID    : 'US_370',
                        date        : '12/24/2015 8:00 AM'
                    });

                    return dfd.promise;
                },

                getFlight   : function(flightID){
                    return $q.resolve({
                        id          : flightID,
                        pilot       : 'Captain Ruby',
                        plane       : {
                            make    : 'Boeing 747 RC',
                            model   : 'TA-889'
                        },
                        status      : 'onTime'
                    });
                }
            };
        })
        .service('weatherService', function($q){
            // Weather API (each returns a promise)
            return {
                getForecast : function(date){
                    return $q.resolve({
                        data        : date,
                        forecast    : "It's raining"
                    });
                }
            }
        })
}(window.angular));