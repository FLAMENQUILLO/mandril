'use strict';

var mandrilApp = angular.module('mandrilApp.services', []);

/**
* @module globalService
* @description This is the service to manage the global data
*/

mandrilApp.service('globalService', function($http) {

  return {

    /**
    * @method getBar
    * @description Get bar data
    * @param callback (function)
    */
    getBar: function(callback) {
      var url = "data/mandril.json";

      $http.get(url).success(function(response) {
        callback(response.bar);
      });
    },

    /**
    * @method getTeam
    * @description Get team data
    * @param callback (function)
    */
    getTeam: function(callback) {
      var url = "data/mandril.json";

      $http.get(url).success(function(response) {
        callback(response.mandriles);
      });
    },

    /**
    * @method getTalleres
    * @description Get team data
    * @param callback (function)
    */
    getTalleres: function(callback) {
      var url = "data/mandril.json";

      $http.get(url).success(function(response) {
        callback(response.talleres);
      });
    },

    /**
    * @method getTalleresById
    * @description Get team data
    * @param callback (function)
    */
    getTalleresById: function(callback, date) {
      var url = "data/mandril.json";

      $http.get(url).success(function(response) {
        var tallerId = response.talleres[date];
        callback(tallerId);
      });
    },

    /**
    * @method getEvents
    * @description Get team data
    * @param callback (function)
    */
    getEvents: function(callback) {
      var url = "data/mandril.json";

      $http.get(url).success(function(response) {
        callback(response.events);
      });
    },

    /**
    * @method getEvents
    * @description Get team data
    * @param callback (function)
    */
    getEventsById: function(callback, id) {
      var url = "data/mandril.json";

      $http.get(url).success(function(response) {
        var eventId = _.filter(response.events.event, function(data){ return data._id == id });
        console.log(eventId, id);
        callback(eventId);
      });
    },

    /**
    * @method getGaleries
    * @description Get team data
    * @param callback (function)
    */
    getGaleries: function(callback) {
      var url = "data/mandril.json";

      $http.get(url).success(function(response) {
        callback(response.galeries);
      });
    },

    /**
    * @method getGaleries
    * @description Get team data
    * @param callback (function)
    */
    getTwitter: function(callback) {
      var username = "TeatroMandrilTT";
      var twitter_api_url = "//twitter.com/status/user_timeline/TeatroMandrilTT?count=5&format=json&callback=JSON_CALLBACK";

      $http.jsonp( twitter_api_url ).then( function (response) {
          callback(response.data);
      });
    }

  };

});