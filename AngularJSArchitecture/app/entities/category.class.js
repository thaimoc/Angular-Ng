/**
 * Created by Von on 1/14/2016.
 */

;
'use strict';

/**
 * Category constructor
 * @param {number} id
 * @param {string} name
 * @constructor
 */
var Category = function(id, name){
    BaseEntity.call(this, id);
    this._name = name;
};

Category.prototype = Object.create(BaseEntity.prototype, {
    name: {
        /**
         * get name of category
         * @returns {string|*}
         */
        get: function(){
            return this._name;
        },
        set: function(value){
            this.setStringProperty(value, '_name');
        },
        enumerable: true
    }
});

