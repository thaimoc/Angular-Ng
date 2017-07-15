/**
 * Created by Von on 12/23/2015.
 */

angular.module('app', [])
    .run(function($rootScope){
        $rootScope.random = Math.random();
    });

angular.bootstrap(document.getElementById('container'), ['app']);
angular.bootstrap(document.getElementById('container2'), ['app']);