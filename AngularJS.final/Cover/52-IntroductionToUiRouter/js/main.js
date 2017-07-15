/**
 * Created by Von on 12/23/2015.
 */

angular.module("uiRouterExample", ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html'
            })
            .state('list', {
                url: '/list',
                templateUrl: 'templates/list.html',
                controller: 'ListCtrl'
            })
            .state('list.item', {
                url: '/:item',
                templateUrl: 'templates/list.item.html',
                controller: function($scope, $stateParams){
                    $scope.item = $stateParams.item;
                }
            });
    })

    .controller('ListCtrl', function($scope){
        $scope.shoppingList = [
            {name: 'blossoms'},
            {name: 'flowers'}
        ];

        $scope.selectItem = function(selectedItem){
            _($scope.shoppingList).each(function(item){
                item.selected = false;
                if(selectedItem === item){
                    selectedItem.selected = true;
                }
            });
        }
    });

