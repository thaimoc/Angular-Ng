/**
 * Created by Von on 12/26/2015.
 */

;(function(angular){
    'use strict';

    angular
        .module('app', ['ng', 'ngRoute', 'ngResource'])
        .provider('Post', function(){
            this.$get = [
                '$resource', function($resource){
                    var Post = $resource('http://localhost:300/api/post/:_id', {}, {
                        update: {
                            method: 'PUT'
                        }
                    });

                    return Post;
                }
            ];
        })

}(window.angular));