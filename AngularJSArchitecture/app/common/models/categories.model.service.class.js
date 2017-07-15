/**
 * Created by Von on 1/14/2016.
 */
;(function(angular){
    'use strict';

    var CategoriesModel = function($http, $q){
        var url = {
            FETCH: 'data/categories.json'
        };
        BaseModel.call(this, $http, $q, url);
        this._currentCategory = null;
    };

    CategoriesModel.prototype = Object.create(BaseModel.prototype, {
        getCurrentCategory: {
            /**
             * get current category
             * @returns {null|Category}
             */
            value: function(){
                return this._currentCategory;
            },
            enumerable: true
        },
        getCurrentCategoryName: {
            /**
             * get current category's name
             * @returns {string}
             */
            value: function(){
                return this._currentCategory ? this._currentCategory.name : '';
            },
            enumerable: true
        },
        getCategoryByName: {
            /**
             * get category by name
             * @param {string} name
             * @returns {*}
             */
            value: function(name){
                var model = this,
                    deferred = this.$q.defer(),
                    tempFn = function(){
                        deferred.resolve(model._repository.getByProperty(name, 'name'));
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
        setCurrentCategory: {
            /**
             * set current category
             * @param category
             * @returns {*}
             */
            value: function(category){
                var model = this;
                return model.getCategoryByName(category).then(function(c){
                    model._currentCategory = c;
                })
            },
            enumerable: true
        }
    });

    angular
        .module('eggly.models.categories', [])
        .service('CategoriesModel', CategoriesModel);


}(window.angular));