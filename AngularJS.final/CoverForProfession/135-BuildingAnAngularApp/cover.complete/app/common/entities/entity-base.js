/**
 * Created by Von on 1/8/2016.
 */

;
    var EntityBase = function (id) {
        this._id = id;
    };

    Object.defineProperties(EntityBase.prototype, {
        id: {
            get: function () {
                return this._id;
            }
        }
    });

    var Category = function (id, name) {
        EntityBase.call(this, id);
        this.name = name;
    };

    Category.prototype = Object.create(EntityBase.prototype, {});

    var Bookmark = function (id, title, url, category) {
        EntityBase.call(this, id);
        this.title = title;
        this.url = url;
        this._category = category;
    };

    Bookmark.prototype = Object.create(EntityBase.prototype, {
        category: {
            get: function () {
                if(typeof (this._category) === 'string') return this._category;
                return this._category.name;
            }
        }
    });

    var CategoriesRepository = function () {
        this.categories = [];
    };

    Object.defineProperties(CategoriesRepository.prototype, {
        add: {
            value: function (category) {
                this.categories.push(new Category(this.categories.length, category.name));
            },
            enumerable: true
        },
        delete: {
            value: function (category) {
                _.remove(categories, function (c) {
                    return c.id == category.id;
                });
            },
            enumerable: true
        },
        getByName: {
            value: function (categoryName, $q) {
                var deferred = $q.defer();

                var that = this;
                function findCategory() {
                    return _.find(that.categories, function (c) {
                        return c.name == categoryName;
                    })
                }
                if (this.categories.length > 0) {
                    deferred.resolve(findCategory());
                }
                else {
                    this.getCategories($q).then(function () {
                        deferred.resolve(findCategory());
                    });
                }

                return deferred.promise;
            },
            enumerable: true
        },
        loadCategories: {
            value: function ($http, urlsFetch) {
                var that = this;
                return $http.get(urlsFetch).then(function (result) {
                    var data = result.data;
                    data.forEach(function (c) {
                        that.add(c);
                    });
                });
            },
            enumerable: true
        },
        getCategories: {
            value: function ($q) {
                return $q.when(this.categories);
            },
            enumerable: true
        }
    });

    var BookmarksRepository = function () {
        this.bookmarks = [];
    };

    Object.defineProperties(BookmarksRepository.prototype, {
        add: {
            value: function (bookmark) {
                this.bookmarks.push(new Bookmark(this.bookmarks.length, bookmark.title, bookmark.url, bookmark.category));
            },
            enmerable: true
        },
        update: {
            value: function (bookmark) {
                var index = _.findIndex(this.bookmarks, function (b) {
                    return b.id = bookmark.id;
                });
                this.bookmarks[index] = bookmark;
            },
            enumerable: true
        },
        delete: {
            value: function (bookmark) {
                _.remove(this.bookmarks, function (b) {
                    return b.id == bookmark.id;
                });
            },
            enumerable: true
        },
        getBookmarkById: {
            value: function (id, $q) {

                if (this.bookmarks.length > 0) {
                    var that = this;
                    return $q
                        .defer()
                        .resolve(function () {
                            return _.find(that.bookmarks, function (b) {
                                return b.id === parseInt(id, 10);
                            })
                        });
                }
                return null;
            },
            enumerable: true
        },
        getBookmarksByCategory: {
            value: function (category) {
                return _.fill(this.bookmarks, function (b) {
                    return b.category == category;
                });
            },
            enumerable: true
        },
        loadBookmarks: {
            value: function ($http, urlsFetch) {
                var that = this;
                return $http.get(urlsFetch).then(function (result) {
                    var data = result.data;
                    data.forEach(function (b) {
                        that.add(b);
                    });
                });
            },
            enumerable: true
        },
        getBookmarks: {
            value: function ($q) {
                return $q.when(this.bookmarks);
            },
            enumerable: true
        }
    });

    var BaseModel = function($http, $q){
        this.$http = $http;
        this.$q = $q;
    };

    var CategoriesModel = function ($http, $q) {
        BaseModel.call(this,  $http, $q);
        this.urlFetch = '../data/categories.json';
        this.currentCategory = null;
        this.categoriesRepos = new CategoriesRepository();
        this.categoriesRepos.loadCategories($http, this.urlFetch);
    };

    Object.defineProperties(CategoriesModel.prototype, {
        getCategories: {
            value: function () {
                return this.categoriesRepos.getCategories(this.$q);
            },
            enumerable: true
        },
        getCurrentCategory: {
            value: function () {
                return this.currentCategory;
            },
            enumerable: true
        },
        getCurrentCategoryName: {
            value: function () {
                return this.currentCategory != null ? (typeof this.currentCategory === 'string' ? this.currentCategory : this.currentCategory.name) : '';
            },
            enumerable: true
        },
        setCurrentCategory: {
            value: function (category) {
                this.currentCategory = category;
                return this.currentCategory;
            },
            enumerable: true
        },
        createCategory: {
            value: function (category) {
                this.categoriesRepos.add(category);
            },
            enumerable: true
        },
        deleteCategory: {
            value: function (cateogry) {
                this.categoriesRepos.delete(category);
            },
            enumerable: true
        },
        getCategoryByName: {
            value: function (categoryName) {
                console.log('_________________')
                console.log(categoryName)

                return this.categoriesRepos.getByName(categoryName, this.$q);
            },
            enumerable: true
        }
    });

    var BookmarksModel = function ($http, $q){
        BaseModel.call(this,  $http, $q);
        this.urlFetch = '../data/bookmarks.json';
        this.bookmarksRepos = new BookmarksRepository();
        this.bookmarksRepos.loadBookmarks(this.$http, this.urlFetch);
    };

    Object.defineProperties(BookmarksModel.prototype, {
        createBookmark: {
            value: function(bookmark){
                this.boomarksRepos.add(bookmark);
            },
            enumerable: true
        },
        updateBookmark: {
            value: function(bookmark){
                this.bookmarksRepos.update(bookmark);
            },
            enumerable: true
        },
        deleteBookmark: {
            value: function(bookmark){
                this.bookmarksRepos.delete(bookmark);
            },
            enumerable: true
        },
        getBookmarkById: {
            value: function(id){
                return this.bookmarksRepos.getBookmarkById(id, this.$q);
            },
            enumerable: true
        },
        getBookmarksForCategory: {
            value: function(category){
                return this.bookmarksRepos.getBookmarksByCategory(category);
            },
            enumerable: true
        },
        getBookmarks: {
            value: function(){
                return this.bookmarksRepos.getBookmarks(this.$q);
            },
            enumerable: true
        }
    });