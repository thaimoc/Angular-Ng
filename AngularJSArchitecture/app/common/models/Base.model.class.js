/**
 * Created by Von on 1/14/2016.
 */
;
'use strict';

/**
 * Define BaseModel
 * @param $http
 * @param $q
 * @param urls
 * @param {BaseRepository} repository
 * @constructor
 */
var BaseModel = function($http, $q, url){
    this.$http = $http;
    this.$q = $q;
    this._URL = url;
    this._repository = new BaseRepository();
};

Object.defineProperties(BaseModel.prototype, {
    _extract: {
        /**
         * extract
         * @param result
         * @returns {string|Object[]|CanvasPixelArray}
         */
        value: function(result){
            return result.data;
        },
        enumerable: true
    },
    _cache: {
        /**
         * cache
         * @param result
         * @returns {*}
         */
        value: function(result){
            return (this._repository.dbList = this._extract(result));
        },
        enumerable: true
    },
    Repository: {
        /**
         * get repository
         * @returns {*}
         */
        get: function(){
            var model = this;

            return (model._repository.getDb().length > 0) ?
                model.$q.when(model._repository.dbList) :
                model.$http.get(model._URL.FETCH).then(function(result){
                    return model._cache.call(model, result);
                });
        },
        enumerable: true
    }
});