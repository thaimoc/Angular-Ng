/**
 * Created by Von on 1/14/2016.
 */

;
'use strict';

/**
 * Base Entity constructor
 * @param {number} id
 * @constructor
 */
var BaseEntity = function(id){
    this._id = id;
};

Object.defineProperties(BaseEntity.prototype, {
    id: {
        /**
         * getter id
         * @returns {*}
         */
        get: function(){
            return this._id;
        },
        enumerable: true
    },
    stringIsNotNullorWhiteSpace: {
        /**
         * Check value is not null or white spaces
         * @param {string} value
         * @returns {boolean} true: value is not null or white spaces | false: value is null or white spaces
         */
        value: function(value){
            var valid = false;
            if(typeof (val) === 'string' && val !== ''){
                var chars = val.split(' ');
                if(chars.length > 0) {
                    chars.forEach(function (char) {
                        if (char !== ' ') {
                            valid = true;
                            return false;
                            /** break */
                        }
                    })
                }
            }
            return valid;
        },
        enumerable: true
    },
    setStringProperty: {
        /**
         * set string to property
         * @param {string} value 'not null or white spaces'
         * @param {string} property_name 'not null or white spaces'
         */
        value: function(value, property_name){
            if(this.stringIsNotNullorWhiteSpace(value) && this.stringIsNotNullorWhiteSpace(property_name)){
                this[property_name] = value;
            }else{
                throw new EvalError( property_name + ' must be not null or white space');
            }
        },
        enumerable: true
    }
});