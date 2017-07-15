/**
 * Created by Von on 12/21/2015.
 */
var app = angular.module("app", []);

app.controller("RoomCtrl", function(){
    this.openDoor = function(){
        alert("Creak");
    }

    this.buttonTitle = "I'm a button";
});