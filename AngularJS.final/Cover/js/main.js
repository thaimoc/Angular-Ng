/**
 * Created by Von on 12/16/2015.
 */

var myApp = angular.module('myApp', [])

    .factory('Data', function(){
        return {message:"I'm data from a service"}
    })

    //.filter('reverse', function(){
    //    return function (text){
    //        return text.split("").reverse().join("") +" " + text;
    //    }
    //})

    .filter('reverse', function(Data){
        return function (text){
            return text.split("").reverse().join("") +" " + Data.message;
        }
    })

    .controller('FirstCtrl', function($scope, Data){
        $scope.data = Data;
    })

    .controller('SecondCtrl', function($scope, Data){
        $scope.data = Data;

        $scope.reversedMessage = function(message){
            return message.split("").reverse().join("");
        }
    });

