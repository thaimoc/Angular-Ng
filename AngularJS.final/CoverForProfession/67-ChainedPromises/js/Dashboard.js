/**
 * Created by Von on 12/24/2015.
 */

;(function(){
    'use strict';

    var FlightDashboard = function($scope, user, travelService, weatherService){

        var loadDeparture = function(user){
            return travelService
                .getDeparture(user)                         /** Request #1 */
                .then(function(departure){                  /** Response Handler #1 */
                    $scope.departure = departure;

                    return departure.flightID;
                });
        },
            loadFlight = function(flightID){
                return travelService
                    .getFlight(flightID)                    /** Request #2 */
                    .then(function(flight){                 /** Response Handler #2 */
                        $scope.flight = flight;

                        return flight;
                    });
            },
            loadForecast = function(){
                return weatherService
                    .getForecast($scope.departure.date)     /** Request #3 */
                    .then(function(weather){                /** Response Handler #3 */
                        $scope.weather = weather;

                        return weather;
                    });
            };

        /** In this case this application will be easy to load all of our information */

        loadDeparture(user)
            .then(loadFlight)
            .then(loadForecast);

        $scope.user     = user;
        $scope.flight   = null;
        $scope.plane   = null;
        $scope.weather   = null;
    };

    window.FlightDashboard = ["$scope", "user", "travelService", "weatherService", FlightDashboard];
}());