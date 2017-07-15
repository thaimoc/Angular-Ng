/**
 * Created by Von on 1/8/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('bookmarks', [
            'bookmark.edit',
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
                            templateUrl: 'app/bookmarks/bookmarks.tmpl.html'
                        }
                    }
                })
        })
        .controller('BookmarksCtrl', function($scope, $stateParams, categories, bookmarks){
            $stateParams.category ? categories.setCurrentCategory($stateParams.category) : categories.setCurrentCategory();

            bookmarks
                .getBookmarks()
                .then(function (result){
                    $scope.bookmarks = result;
                });

            $scope.getCurrentCategory = function(){
                return categories.getCurrentCategory();
            };
            $scope.getCurrentCategoryName = function(){
                return categories.getCurrentCategoryName();
            };
            $scope.isSelectedBookmark = function (bookmarkId){
                return $stateParams.bookmarkId == bookmarkId;
            };

            $scope.deleteBookmark = function(bookmark){
                bookmarks.deleteBookmark(bookmark);
            };

        });

}(window.angular));