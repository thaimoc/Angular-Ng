/**
 * Created by Von on 12/26/2015.
 */

;(function(angular){
    'use strict';

    angular
        .module('app', ['ng', 'ngRoute'])
        .controller('MainCtrl', ['$scope', '$route', 'Post', function($scope, $route, Post){

            $scope.post = new Post();
            $scope.posts = Post.query();

            $scope.newPost = function(){
                $scope.post = new Post();
                $scope.editing = false;
            };

            $scope.activePost = function(post){
                $scope.post = post;
                $scope.editing = true;
            };

            $scope.save = function (post) {
                if($scope.post._id){
                    Post.update({_id:$scope.post._id}, $scope.post);
                } else{
                    $scope.post.$save().then(function(response){
                        $scope.posts.push(response)
                    });
                }
                $scope.editing = false;
                $scope.post = new Post();
            };

            $scope.delete = function(post){
                Post.delete(post);
                _.remove($scope.posts,  post);
            };

        }]);
}(window.angular));