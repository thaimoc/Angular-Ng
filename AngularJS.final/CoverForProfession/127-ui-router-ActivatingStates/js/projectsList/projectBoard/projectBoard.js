/**
 * Created by Von on 1/2/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('projectBoard', ['bugDetail'])
        .config(function($stateProvider){
            $stateProvider
                .state('projects.board', {
                    url: '/:projectId',
                    templateUrl: 'js/projectsList/projectBoard/projectBoard.tpl.html',
                    controller: function($scope, projectData, $stateParams){
                        $scope.bugs = projectData.getBugs($stateParams.projectId);
                    }
                });
        });

}(window.angular));