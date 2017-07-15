/**
 * Created by Von on 1/14/2016.
 */
;
'use strict';
/**
 * Define BaseRepository
 * @constructor
 */
var BaseRepository = function(){
    this.dbList = [];
};

Object.defineProperties(BaseRepository.prototype, {
    getDb: {
        /**
         * get dbList
         * @returns {*}
         */
        value: function(){
            return this.dbList;
        },
        enumerable: true
    },
    getByProperty: {
        /**
         * get element flowing by property name and value
         * if property is null or white space this function will return
         * the element is equal value
         * @param {*} value
         * @param {string} property
         * @returns {*}
         */
        value: function(value, property){
            return _.find(this.dbList, function(element){
                    return element[property] == value;
                });
        },
        enumerable: true
    },
    add: {
        /**
         * add new element
         * @param {Bookmark|Category} new_element
         */
        value: function(new_element){
            if(typeof new_element === 'object') new_element.id = this.dbList.length;
            this.dbList.push(new_element);
        },
        enumerable: true
    },
    update: {
        /**
         * update a element
         * @param editedElement
         */
        value: function(editedElement){
            var index = _.findIndex(this.dbList, function(element){
                return element.id == editedElement.id;
            });
            this.dbList[index] = editedElement;
        },
        enumerable: true
    },
    deleteElement: {
        /**
         * remove a element
         * @param {number|Bookmark|Category} val
         */
        value: function(val){
            if(typeof (val) === 'number') {
                _.remove(this.dbList, function (element) {
                    return element.id == val;
                })
            } else {
                _.remove(this.dbList, function (element) {
                    return element == val.id;
                })
            }
        },
        enumerable: true
    }
});