'use strict';

var mandrilApp = angular.module('mandrilApp');

/**
* @module MainCtrl
* @description This will get the data for the entire site
*/

mandrilApp.controller('EventCtrl', function($scope, $routeParams, $http, globalService) {
  var getEventsById = function() {
      globalService.getEventsById(function(response) {
        $scope.singleEvent = response;
      }, $routeParams._id);
    };

  getEventsById();
});