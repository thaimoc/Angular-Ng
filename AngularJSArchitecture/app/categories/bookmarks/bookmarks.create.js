/**
 * Created by Von on 1/16/2016.
 */
;(function(angular){
    'use strict';

    var CreateBookmarkCtrl = function($state, $stateParams, bookmarksModel){
        var vm = this;

        vm.$state = $state;
        vm.$stateParams = $stateParams;
        vm.bookmarksModel = bookmarksModel;
    };

    Object.defineProperties(CreateBookmarkCtrl.prototype, {
        _returnToBookmarks: {
            value: function(){
                var vm = this;
                vm.$state.go('eggly.categories.bookmarks', {
                    category: vm.$stateParams.category
                })
            },
            enumerable: true
        },
        cancelCreating: {
            value: function(){
                console.log('cancel')
                this._returnToBookmarks();
            },
            enumerable: true
        },
        createBookmark: {
            value: function(){
                var vm = this;
                vm.newBookmark.category = this.$stateParams.category;
                vm.bookmarksModel.createBookmark(vm.newBookmark);
                vm._returnToBookmarks();
            },
            enumerable: true
        },
        resetForm: {
            value: function(){
                var vm = this;
                vm.newBookmark = {
                    title: '',
                    url: '',
                    category: $stateParams.category
                }
            },
            enumerable: true
        }
    });

    angular
        .module('categories.bookmarks.create', ['eggly.models.bookmarks'])
        .controller('CreateBookmarkCtrl', ['$state', '$stateParams', 'BookmarksModel',
            CreateBookmarkCtrl])

}(window.angular));