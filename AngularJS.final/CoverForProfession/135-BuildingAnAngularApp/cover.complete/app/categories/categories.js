/**
 * Created by Von on 1/8/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('categories', ['eggly.models.categories', 'bookmarks'])
        .config(function($stateProvider){
            $stateProvider
                .state('eggly.categories', {
                    url:'/',
                    views: {
                        'categories@':{
                            controller: 'CategoriesCtrl',
                            templateUrl: 'app/categories/categories.tmpl.html'
                        },
                        'bookmarks@':{
                            controller: 'BookmarksCtrl',
                            templateUrl: 'app/bookmarks/bookmarks.tmpl.html'
                        }
                    }
                })
        })
        .controller('CategoriesCtrl', function($scope, categories){
            $scope.getCurrentCategoryName = categories.getCurrentCategoryName;

            categories
                .getCategories()
                .then(function(result){
                    $scope.categories = result;
                });

            $scope.isCurrentCategory = function(category){
                return category.name === $scope.getCurrentCategoryName();
            }
        })

}(window.angular));