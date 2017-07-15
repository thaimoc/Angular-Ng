/**
 * Created by Von on 1/1/2016.
 */
;(function(){
    'use strict';

    angular
        .module('app', [])
        .config(function($anchorScrollProvider){
            $anchorScrollProvider.disableAutoScrolling();
        })
        .controller('AppCtrl', function($location, $anchorScroll){
            var app = this;

            app.elms = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


            var colors = tinycolor("steelblue", {}).analogous(app.elms.length, app.elms.length);


            app.goToAnchor = function(elm){
                $location.hash(elm);

                $anchorScroll();
            };

            app.createStyle = function(index){
                var color = colors[index];
                return {
                    backgroundColor: color.toHexString(),
                    borderBottom: "3px solid black",
                    height: "100px"
                };
            }
        })

}());