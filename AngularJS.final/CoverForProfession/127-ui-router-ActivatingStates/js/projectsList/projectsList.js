/**
 * Created by Von on 1/2/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('projectsList', ['projectBoard'])
        .config(function($urlRouterProvider, $stateProvider){
            $stateProvider
                .state('projects', {
                    abstract: true,
                    url: '/projects',
                    templateUrl: 'js/projectsList/projectsList.tpl.html',
                    controller: function($scope, projectData){
                        $scope.projects = projectData.getAll();
                    }
                })
        })

}(window.angular));