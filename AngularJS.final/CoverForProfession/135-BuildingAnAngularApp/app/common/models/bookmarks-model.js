/**
 * Created by Von on 1/5/2016.
 */
;(function(angular) {
    'use strict';

    angular.module('eggly.models.bookmarks', [])
        .service('bookmarks', function BookmarksService($http, $q){
            var URLS            = { FETCH: 'data/bookmarks.json' },
                bookmarks,
                bookmarksModel  = this;

            function extract(result){
                return result.data;
            }

            function cacheBookmarks(result){
                bookmarks = extract(result);
                return bookmarks;
            }

            bookmarksModel.getBookmarks = function(){
                return (bookmarks) ? $q.when(bookmarks):$http.get(URLS.FETCH).then(cacheBookmarks);
            };

            function findBookmark(bookmarkId){
                return _.find(bookmarks, function(bookmark){
                    return bookmark.id === parseInt(bookmarkId, 10);
                })
            }

            bookmarksModel.getBookmarkById = function(bookmarkId){
                var defered = $q.defer(),
                    resolveFn = function(){
                        defered.resolve(findBookmark(bookmarkId))
                    };
                if(bookmarks){
                    resolveFn();
                }else {
                    bookmarksModel
                        .getBookmarks()
                        .then(function(){
                            resolveFn();
                        })
                }
                return defered.promise;
            };

            bookmarksModel.createBookmark = function(bookmark){
                bookmark.id = bookmarks.length;
                bookmarks.push(bookmark);
            };

            bookmarksModel.updateBookmark = function(bookmark){
                var index = _.findIndex(bookmarks, function(b){
                    return b.id == bookmark.id;
                });
                bookmarks[index] = bookmark;
            };

            bookmarksModel.deleteBookmark = function(bookmark){
                _.remove(bookmarks,  function(b){
                    return b.id == bookmark.id;
                })
            };

            bookmarksModel.getBookmarksForCategory = function(category){
                return _.filter(bookmarks, function(b){
                    return b.category == category;
                })
            };

        })

}(window.angular));