/**
 * Created by Von on 1/14/2016.
 */
;
'use strict';

/**
 * Bookmark constructor
 * @param {number} id
 * @param {string} title
 * @param {string} url
 * @param {category} category
 * @constructor
 */
var Bookmark = function(id, title, url, category){
    BaseEntity.call(this, id);
    this._title = title;
    this._url = url;
    this._category = category;
};

Bookmark.prototype = Object.create(BaseEntity.prototype, {
    title: {
        /**
         * get title
         * @returns {string|*}
         */
        get: function(){
            return this._title;
        },
        /**
         * set title
         * @param {string} val
         */
        set: function(val){
            this.setStringProperty(val, '_title');
        },
        enumerable: true
    },
    url: {
        /**
         * get url
         * @returns {string|*}
         */
        get: function(){
            return this._url;
        },
        /**
         * set url
         * @param val
         */
        set: function(val){
            this.setStringProperty(val, '_url');
        },
        enumerable: true
    },
    category: {
        /**
         * get category name
         * @returns {category|string}
         */
        get: function(){
            return (typeof (this._category) === 'string') ? this._category : this._category.name;
        },
        /**
         * set category
         * @param val
         */
        set: function(val){
            if(typeof (val) === 'string'){
                this.setStringProperty(val, '_category');
            } else {
                this._category = val;
            }
        },
        enumerable: true
    }
});
