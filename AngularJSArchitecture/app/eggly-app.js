/**
 * Created by Von on 1/15/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('Eggly', [
            'ngAnimate',
            'ui.router',
            'categories',
            'categories.bookmarks',
            'categories.bookmarks.create',
            'categories.bookmarks.edit',

        ])
        .config(function($stateProvider, $urlRouterProvider){
            $stateProvider
            /**
             * abstract state serves as placeholder or namespace for application
             */
                .state('eggly', {
                    url: '',
                    abstract: true
                })
                .state('eggly.categories', {
                    url: '/',
                    views: {
                        /**
                         * target the ui-view named 'categories' in Root state (eggly)
                         */
                        'categories@':{
                            controller: 'CategoriesCtrl as categoriesCtrl',
                            templateUrl: 'app/views/categories.tmpl.html'
                        },
                        /**
                         * target the ui-view named 'bookmarks' in Root state (eggly)
                         * to show all bookmarks for all categories
                         */
                        'bookmarks@': {
                            controller: 'BookmarksCtrl as bookmarksCtrl',
                            templateUrl: 'app/views/bookmarks.tmpl.html'
                        }
                    }
                })
                .state('eggly.categories.bookmarks', {
                    url: 'categories/:category',
                    /**
                     * target the named 'ui-view' in Root (eggly) state named 'bookmarks'
                     * to show bookmarks for a special category
                     */
                    views: {
                        'bookmarks@': {
                            templateUrl: 'app/views/bookmarks.tmpl.html',
                            controller: 'BookmarksCtrl as bookmarksCtrl'
                        }
                    }
                })
                .state('eggly.categories.bookmarks.create', {
                    url: '/bookmarks/create',
                    templateUrl: 'app/views/bookmark-create.tmpl.html',
                    controller: 'CreateBookmarkCtrl as createBookmarkCtrl'
                })
                .state('eggly.categories.bookmarks.edit', {
                    url: '/bookmarks/:bookmarkId/edit',
                    templateUrl: 'app/views/bookmark-edit.tmpl.html',
                    controller: 'EditBookmarkCtrl as editBookmarkCtrl'
                })

            $urlRouterProvider.otherwise('/');
        });

}(window.angular));