/**
 * Created by Von on 12/17/2015.
 */

angular.module("phoneApp", [])
    .controller("AppCtrl", function($scope){
        $scope.leaveVoiceMail = function(number, message){
            alert("Number: " + number + " said: " + message)
        }

        $scope.getNetworkByIndex = function(networks, index){
            return networks[index];
        }
    })

    .directive("phone", function (){
        return {
            restrict: "E",
            scope: {
                number:"@",
                network:"=",
                makeCall:"&"
            },
            template:
            '<div class="panel panel-info">Number: {{number}} Network:<select class="btn btn-info dropdown-toggle" ' +
            'ng-model="network" ng-options="net for net in networks"> </div>' +
            '<input class="form-control input-sm" type="text" ng-model="value">' +
            '<div class="btn btn-info col-lg-12" ng-click="makeCall({number:number, message:value})">Call home!</div></div>',

            link: function(scope) {
                scope.networks = ["Verizon", "AT&T", "Sprint"];
                scope.network = scope.networks[0];
            }
        }
    });