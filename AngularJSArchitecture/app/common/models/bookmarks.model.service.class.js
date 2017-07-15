/**
 * Created by Von on 1/15/2016.
 */
;(function(angular){
    'use strict';

    var BookmarksModel = function($http, $q){
        var url = {
            FETCH: 'data/bookmarks.json'
        };
        BaseModel.call(this, $http, $q, url);
    };

    BookmarksModel.prototype = Object.create(BaseModel.prototype, {
        getBookmarkById: {
            value: function(id){
                var model = this,
                    deferred = this.$q.defer(),
                    tempFn = function(){
                        deferred.resolve(model._repository.getByProperty(parseInt(id, 10), 'id'));
                    };

                if(model.Repository.length > 0){
                    tempFn();
                }else{
                    model.Repository.then(tempFn);
                }
                return deferred.promise;
            },
            enumerable: true
        },
        createBookmark: {
            value: function(bookmark){
                this._repository.add(bookmark);
            },
            enumerable: true
        },
        updateBookmark: {
            value: function(bookmark){
                this._repository.update(bookmark);
            },
            enumerable: true
        },
        deleteBookmark: {
            value: function(bookmark){
                this.Repository.deleteElement(bookmark);
            },
            enumerable: true
        }
    });

    angular
        .module('eggly.models.bookmarks', [])
        .service('BookmarksModel', ['$http', '$q', BookmarksModel]);


}(window.angular));