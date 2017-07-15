/**
 * Created by Von on 1/9/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('bookmark.edit', ['eggly.models.bookmarks'])
        .config(function($stateProvider){
            $stateProvider
                .state('eggly.categories.bookmarks.edit',{
                    url: '/bookmarks/:bookmarkId/edit',
                    views: {
                        '@eggly.categories.bookmarks':{
                            templateUrl: 'app/bookmarks/edit/edit.bookmark.tmpl.html',
                            controller: 'EditBookmarkCtrl'
                        }
                    }
                })
        })

}(window.angular));