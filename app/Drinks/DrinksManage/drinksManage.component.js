/**
 * The controller for the drinks management page.
 * Controls which views are currently visible as well as 
 * deleting current drinks
 */
angular.module("drinksManage", ["drinksListItem"]).
  component("drinksManage", {
    templateUrl: "app/Drinks/DrinksManage/drinksManage.template.html",
    controller: [
      "$scope", "$cookies",
      function drinksController($scope, $cookies) {
        "use strict";
        var self = this;
        self.currentPage = "create";
      }
    ],
    bindings: {
      "drinksList": "<",
      "editDrink": "<",
      "deleteDrink" : "<",
      "addDrink": "<"
    }
  });
