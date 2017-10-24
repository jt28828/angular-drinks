/**
 * The controller for the drinks management page.
 * Controls which views are currently visible as well as 
 * deleting current drinks
 */
angular.module('drinks', ['drinkCreate']).
  component('drinks', {
    templateUrl: 'app/Drinks/drinks.template.html',
    controller: [
      '$scope', '$cookies',
      function drinksController($scope, $cookies) {
        'use strict';
        var self = this;
        self.currentPage = "create";


      }
    ]
  });
