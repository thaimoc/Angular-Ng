/**
 * Created by Von on 1/6/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('bookmarks', [
            'categories.bookmarks.edit',
            'categories.bookmarks.create',
            'eggly.models.categories',
            'eggly.models.bookmarks'
        ])
        .config(function($stateProvider){
            $stateProvider
                .state('eggly.categories.bookmarks', {
                    url:'categories/:category',
                    views: {
                        'bookmarks@':{
                            controller: 'BookmarksCtrl',
                            templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
                        }
                    }
                })
        })
        .controller('BookmarksCtrl', function BookmarksCtrl($scope, $stateParams, bookmarks, categories){
            categories.setCurrentCategory();

            if($stateParams.category){
                categories
                    .getCategoryByName($stateParams.category)
                    .then(function(category){
                        categories.setCurrentCategory(category);
                    })
            }

            bookmarks
                .getBookmarks()
                .then(function (result){
                    $scope.bookmarks = result;
                });

            $scope.getCurrentCategory = function(){
                return categories.getCurrentCategory();
            };
            $scope.getCurrentCategoryName = categories.getCurrentCategoryName;
            $scope.isSelectedBookmark = function (bookmarkId){
                return $stateParams.bookmarkId == bookmarkId;
            };

            $scope.deleteBookmark = function(boomark){
                bookmarks.deleteBookmark(boomark);
            }
        });

}(window.angular));