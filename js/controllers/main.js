'use strict';

var mandrilApp = angular.module('mandrilApp');

/**
* @module MainCtrl
* @description This will get the data for the entire site
*/

mandrilApp.controller('MainCtrl', function($scope, $http, globalService) {
    /**
    * @method getModules
    * @description Get all modules
    */
  var getBar = function() {
      globalService.getBar(function(response) {
        $scope.bar = response;
      });
    },

    getTeam = function() {
      globalService.getTeam(function(response) {
        $scope.team = response;
      });
    },

    getTalleres = function() {
      globalService.getTalleres(function(response) {
        $scope.talleres = response;
      });
    },

    getEvents = function() {
      globalService.getEvents(function(response) {
        $scope.events = response;
      });
    },

    getGaleries = function() {
      globalService.getGaleries(function(response) {
        $scope.galeries = response;
      });
    },

    getTwitter = function() {
      globalService.getTwitter(function(response) {
        $scope.twitter = response;
      })
    };

  $scope.goToTop = function() {
    $('html, body').animate({scrollTop:'300px'}, 500 );
  };

  $scope.showDate = function(date) {
    var date = date;
    $scope.active = date;
    globalService.getTalleresById(function(response) {
        $scope.dateSelected = response;
      }, date)
  };

  $scope.changeGalery = function(galeryNum) {
    $scope.galeryNumber = galeryNum;
    $('.galery-slider').unslick();
    setTimeout(function(){
      $('.galery-slider').slick();
    }, 100);
  };

  $scope.galeryPrev = function() {
    $('.galery-slider').slickPrev();
  };

  $scope.galeryNext = function() {
    $('.galery-slider').slickNext();
  };

  $scope.selectImage = function(index) {
    $('.galery-slider').slickGoTo(index);
  };

  $scope.showAll = function() {
    $scope.eventsItem = 100;
    $scope.hideShowAll = true;
  };

  $scope.sendEmail = function(contact) {
    $scope.master = angular.copy(contact);
    console.log($scope.master);
  };

  $scope.showDate('lunes');
  $scope.active = 'lunes';
  $scope.galeryNumber = 0;
  $scope.eventsItem = 3;

  getBar();
  getTeam();
  getTalleres();
  getEvents();
  getGaleries();
  getTwitter();

});