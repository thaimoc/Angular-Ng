/**
 * Created by Von on 1/8/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('eggly.models.bookmarks', [])
        .service('bookmarks', ['$http', '$q', BookmarksModel]);

}(window.angular));