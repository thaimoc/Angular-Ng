/**
 * Created by Von on 1/16/2016.
 */
;(function(angular){
    'use strict';

    var EditBookmarkCtrl = function($state, $stateParams, bookmarksModel){
        var vm = this;

        vm.$state = $state;
        vm.$stateParams = $stateParams;
        vm.bookmarksModel = bookmarksModel;

        vm.bookmarksModel.getBookmarkById(vm.$stateParams.bookmarkId).then(function(bookmark){
            if(bookmark){
                vm.bookmark = bookmark;
                vm.editedBookmark = angular.copy(vm.bookmark);
            } else{
                vm._returnToBookmarks();
            }
        })
    };

    Object.defineProperties(EditBookmarkCtrl.prototype, {
        _returnToBookmarks: {
            value: function(){
                var vm = this;
                vm.$state.go('eggly.categories.bookmarks', {
                    category: vm.$stateParams.category
                })
            },
            enumerable: false
        },
        updateBookmark: {
            value: function(){
                var vm = this;
                vm.bookmark = angular.copy(vm.editedBookmark);
                vm.bookmarksModel.updateBookmark(vm.editedBookmark);
                vm._returnToBookmarks();
            },
            enumerable: true
        },
        cancelEditing: {
            value: function(){
                console.log('cancel edit')
                this._returnToBookmarks();
            },
            enumerable: true
        }
    })

    angular
        .module('categories.bookmarks.edit', ['eggly.models.bookmarks'])
        .controller('EditBookmarkCtrl', ['$state','$stateParams','BookmarksModel', EditBookmarkCtrl]);

}(window.angular));