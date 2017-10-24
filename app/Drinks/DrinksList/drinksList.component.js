/**
 * The controller for the drinks management page.
 * Controls which views are currently visible as well as 
 * deleting current drinks
 */
angular.module('drinksList', []).
  component('drinksList', {
    templateUrl: 'app/Drinks/DrinksList/drinksList.template.html',
    controller: [
      '$scope', '$cookies',
      function drinksController($scope, $cookies) {
        'use strict';
        var self = this;
        self.currentPage = "create";


      }
    ]
  });
