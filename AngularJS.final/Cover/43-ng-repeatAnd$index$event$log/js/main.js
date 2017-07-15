/**
 * Created by Von on 12/21/2015.
 */

var app = angular.module('app', []);
app.config(function($logProvider){
    $logProvider.debugEnabled(true)
})

app.run(function($rootScope, $log){
    $rootScope.$log = $log;
});