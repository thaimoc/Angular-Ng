/**
 * Created by Von on 1/15/2016.
 */
;(function(angular){
    'use strict';

    var BookmarksCtrl = function($stateParams, categoriesModel, bookmarksModel){
        var vm = this;

        categoriesModel.setCurrentCategory($stateParams.category);

        bookmarksModel.Repository
            .then(function(bookmarks){
                vm.bookmarks = bookmarks;
            });
        vm.getCurrentCategory = function(){
            return categoriesModel.getCurrentCategory();
        };
        vm.getCurrentCategoryName = function(){
            return categoriesModel.getCurrentCategoryName();
        };
    };

    angular
        .module('categories.bookmarks', [
            'eggly.models.categories',
            'eggly.models.bookmarks'
        ])
        .controller('BookmarksCtrl', ['$stateParams', 'CategoriesModel', 'BookmarksModel', BookmarksCtrl]);

}(window.angular));