'use strict';

/**
* @module mandrilApp
* @description This is main application that configurates the routes
*/

angular.module('mandrilApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'mandrilApp.services',
  'underscore'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/event/:_id', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl'
      })
      .otherwise({
        redirectTo: '/404',
        templateUrl: 'views/404.html',
      });
  });

var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});