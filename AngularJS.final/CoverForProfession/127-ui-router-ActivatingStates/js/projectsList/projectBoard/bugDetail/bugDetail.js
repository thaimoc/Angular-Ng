/**
 * Created by Von on 1/2/2016.
 */
;(function(angular){
    'use strict';

    angular
        .module('bugDetail', [])
        .config(function($stateProvider){
            $stateProvider
                .state('projects.board.bugDetail', {
                    url: '/bug/:bugId',
                    templateUrl: 'js/projectsList/projectBoard/bugDetail/bugDetail.tpl.html',
                    controller: function($scope, projectData, $stateParams){
                        $scope.bug = projectData.getBug($stateParams.projectId, $stateParams.bugId);
                    }
                })
        })

}(window.angular));