/**
 * Created by Von on 1/15/2016.
 */
;(function(angular){
    'use strict';

    var CategoriesCtrl = function(categoriesModel){
        var vm = this;

        categoriesModel.Repository.then(function(result){
            vm.categories = result;
        })
    };

    angular
        .module('categories', [
            'eggly.models.categories'
        ])
        .controller('CategoriesCtrl', ['CategoriesModel', CategoriesCtrl]);
}(window.angular));