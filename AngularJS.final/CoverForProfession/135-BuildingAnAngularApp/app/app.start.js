/**
 * Created by Von on 1/5/2016.
 */
;(function(){
    'use strict';

    /** *********************Window controller********************* */

    var FormControll = function(scope){
        this.scope = scope;
    };

    Object.defineProperties(FormControll.prototype, {
        init: {
            value: function() {
                this.scope.isCreating = false;
                this.scope.isEditing = false;
                this.scope.currentCategory = null;
                this.scope.editedBookmark = null;

                var that = this;

                this.scope.isCurrentCategory = function(category){ that.isCurrentCategory(category); };
                this.scope.setCurrentCategory = function(category){ that.setCurrentCategory(category) };
                this.scope.setEditedBookmark = function(bookmark){ that.setEditedBookmark(bookmark)};
                this.scope.isSelectedBookmark = function(id){ that.isSelectedBookmark(id)};

                this.scope.shouldShowCreating = function(){ that.shouldShowCreating()};
                this.scope.startCreating = function(){ that.startCreating()};
                this.scope.cancelCreating = function(){ that.cancelCreating()};

                this.scope.startEditing = function(){ that.startEditing()};
                this.scope.cancelEditing = function(){ that.cancelEditing()};
                this.scope.shouldShowEditing = function(){ that.shouldShowEditing()};

            },
            enumerable: true
        },

        isCurrentCategory: {
            value: function(category){
                return  this.scope.currentCategory !== null && category.name === this.scope.currentCategory.name;
            },
            enumerable: true
        },

        setCurrentCategory : {
            value: function(category){
                this.scope.currentCategory = category;

                this.cancelCreating();
                this.cancelEditing();
            },
            enumerable: true
        },

        setEditedBookmark : {
            value: function(bookmark){
                this.scope.editedBookmark = angular.copy(bookmark);
            },
            enumerable: true
        },

        isSelectedBookmark: {
            value: function(bookmarkId){
                return this.scope.editedBookmark !== null && this.scope.editedBookmark.id == bookmarkId;
            },
            enumerable: true
        },

        resetCreateForm : {
            value: function(){
                this.scope.newBookmark = {
                    title: '',
                    url: '',
                    category: this.scope.currentCategory
                }
            },
            enumerable: true
        },

        shouldShowCreating : {
            value: function(){
                return this.scope.currentCategory && !this.scope.isEditing;
            },
            enumerable: true
        },

        startCreating: {
            value: function(){
                this.scope.isCreating = true;
                this.resetCreateForm();
            },
            enumerable: true
        },

        cancelCreating: {
            value: function(){
                this.scope.isCreating = false;
                this.scope.isEditing = false;
            },
            enumerable: true
        },

        shouldShowEditing: {
            value: function(){
                return (this.scope.isEditing && !this.scope.isCreating);
            },
            enumerable: true
        },

        startEditing: {
            value: function(){
                this.scope.isEditing = true;
                this.scope.isCreating = false;
            },
            enumerable: true
        },

        cancelEditing: {
            value: function(){
                this.scope.isEditing = false;
                this.scope.isCreating = false;
                this.scope.editedBookmark = null;
            },
            enumerable: true
        }

    });

    /** ***************************CRUD*************************** */
    /**
     * Category
     * @param {number} id
     * @param {string} name
     * @constructor
     */
    var Category = function(id, name){
        this.id = id;
        this.name = name;
    };

    /**
     * Bookmark
     * @param {number} id
     * @param {string} title
     * @param {string} url
     * @param {Category} category
     * @constructor
     */
    var Bookmark = function(id, title, url, category){
        this.id = id;
        this.title = title;
        this.url = url;
        this._category = category;
    };

    Object.defineProperty(Bookmark.prototype, 'category', {
        get: function(){
            return this._category.name;
        }
    });

    var BookmarkDb = function(scope, frmControll){
        this.scope = scope;
        this.frmControll = frmControll;
    };
    Object.defineProperties(BookmarkDb.prototype, {
        init: {
            value: function () {
                this.scope.categories = [
                    new Category(0, "Development"),
                    new Category(1, "Design"),
                    new Category(2, "Exercise"),
                    new Category(3, "Humor")
                ];

                this.scope.bookmarks = [
                    new Bookmark(0, "AngularJS", "http://angularjs.org", this.scope.categories[0]),
                    new Bookmark(1, "Egghead.io", "http://angularjs.org", this.scope.categories[0]),
                    new Bookmark(2, "A List Apart", "http://alistapart.com/", this.scope.categories[1]),
                    new Bookmark(3, "One Page Love", "http://onepagelove.com/", this.scope.categories[1]),
                    new Bookmark(4, "MobilityWOD", "http://www.mobilitywod.com/", this.scope.categories[2]),
                    new Bookmark(5, "Robb Wolf", "http://robbwolf.com/", this.scope.categories[2]),
                    new Bookmark(6, "Senor Gif", "http://memebase.cheezburger.com/senorgif", this.scope.categories[3]),
                    new Bookmark(7, "Wimp", "http://wimp.com", this.scope.categories[3]),
                    new Bookmark(8, "Dump", "http://dump.com", this.scope.categories[3])
                ];

                var that = this;

                this.scope.createBookmark = function(newBookmark){ that.createBookmark(newBookmark)};
                this.scope.updateBookmark = function(editedBookmark){
                    if(editedBookmark) {
                        that.updatedBookmark(editedBookmark)
                    }
                };
            },
            enumerable: true
        },

        createBookmark: {
            value: function (bookmark) {
                bookmark.id = this.scope.bookmarks.length;
                this.scope.bookmarks.push(bookmark);

                this.frmControll.resetCreateForm();
            },
            enumerable: true
        },

        updatedBookmark: {
            value: function (bookmark) {
                var index = _.findIndex(this.scope.bookmarks, function (b) {
                    return b.id == bookmark.id;
                });

                this.scope.bookmarks[index] = bookmark;

                this.scope.editedBookmark = null;
                this.scope.isEditing = false;
            },
            enumerable: true
        }
    });

    angular
        .module('Eggly', [])
        .controller('MainCtrl', function($scope){

            var frm = new FormControll($scope);

            frm.init();

            var db = new BookmarkDb($scope, frm);

            db.init();
        });

}());