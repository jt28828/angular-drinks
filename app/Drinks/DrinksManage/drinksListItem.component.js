/**
 * The controller for the drinks management page.
 * Controls which views are currently visible as well as 
 * deleting current drinks
 */
angular.module("drinksListItem", []).
  component("drinksListItem", {
    templateUrl: "app/Drinks/DrinksManage/drinksListItem.template.html",
    controller: [
      "$scope", "$cookies",
      function drinksController($scope, $cookies) {
        "use strict";
        var self = this;
      }
    ],
    bindings: {
      "drink": "<",
      "editDrink": "<",
      "deleteDrink": "<",
      "location": "<"
    }
  });
