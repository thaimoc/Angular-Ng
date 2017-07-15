/**
 * Created by Von on 1/8/2016.
 */
;(function(){
    'use strict';

    angular
        .module('eggly.models.categories', [])
        .service('categories', ['$http', '$q', CategoriesModel]);

}());