/**
 * Created by Von on 12/20/2015.
 */

var app = angular.module('app', []);


///** The provider will use to like below*/
//app.factory('game', function(){
//    return {
//        title: 'StartCraft'
//    }
//});

///** The mean of factory function looks like below*/
//app.config(function($provide){
//   $provide.factory('game', function(){
//       return {
//           title:'StartCraft'
//       }
//   })
//});

//
///** The mean of factory function looks like below*/
//app.config(function($provide){
//    $provide.provider('game', function(){
//        return {
//            $get:function(){
//                return {
//                    title:'StartCraft'
//                }
//            }
//        }
//    })
//});

///** The mean of factory function looks like below*/
//app.provider('game', function() {
//    return {
//        $get: function () {
//            return {
//                title: 'StartCraft'
//            }
//        }
//    }
//});

/** Start Custom provider object*/
app.provider('game', function() {
    var type;
    return {
        $get: function () {
            return {
                title: type + 'Craft'
            }
        },
        setType: function (value) {
            type = value;
        }
    }
});

app.config(function(gameProvider){
   gameProvider.setType("Puzzle");
});

/** End Custom provider object*/

app.controller('AppCtrl', function($scope, game){
    $scope.title = game.title;
});