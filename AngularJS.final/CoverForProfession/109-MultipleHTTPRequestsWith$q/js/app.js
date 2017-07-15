/**
 * Created by Von on 1/1/2016.
 */
;(function(){
    'use strict';

    angular
        .module('multiple-requests', [])
        .controller('AppCtrl', function(githubService){
            var app = this;

            githubService.getAngularInfo().then(function(angularInfo){
                console.log(angularInfo);
                app.angularInfo = angularInfo;
            })
        })
        .service('githubService', function($http, $q){
            var githubService = this,
                ANGULAR_USER = 'https://api.github.com/users/angular',
                ANGULAR_REPOS = 'https://api.github.com/users/angular/repos',
                ANGULAR_EVENTS = 'https://api.github.com/users/angular/events';

            githubService.getUserData = function(){
                return $http.get(ANGULAR_USER).then(function(userData){
                    return {
                        name: userData.data.name,
                        avatarUrl: userData.data.avatar_url,
                        repoCount: userData.data.public_repos
                    };
                });
            };

            githubService.getUserRepos = function(){
                return $http.get(ANGULAR_REPOS).then(function(reposData){
                    return _.map(reposData.data, function(data){
                        return {
                            name: data.name,
                            description: data.description,
                            stars: data.stargazers_count,
                            forks: data.forks_count,
                            isFork: data.fork
                        }
                    });
                });
            };

            githubService.getUserEvents = function(){
                return $http.get(ANGULAR_EVENTS).then(function(eventsData){
                    return _.map(eventsData.data, function(data){
                        return {
                            type: data.type,
                            user: data.actor.avatar_url,
                            createdOn: data.created_at,
                            repo: data.repo.name
                        }
                    });
                });
            };

            githubService.getAngularInfo = function(){
                var userPromise = githubService.getUserData(),
                    userEventsPromise = githubService.getUserEvents(),
                    userReposPromise = githubService.getUserRepos();

                return $q.all([userPromise, userEventsPromise, userReposPromise]).then(function(resultArray){
                    var userData = resultArray[0],
                        userEventsData = resultArray[1],
                        userReposData = resultArray[2];

                    console.log(resultArray);
                    return _.extend(userData, {
                        events: userEventsData,
                        repos: userReposData
                    })
                });
            }
        })

}());