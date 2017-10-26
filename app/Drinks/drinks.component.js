/**
 * The controller for the drinks management page.
 * Controls which views are currently visible as well as 
 * deleting current drinks
 */
angular.module("drinks", ["drinkCreate", "drinksManage"]).
  component("drinks", {
    templateUrl: "app/Drinks/drinks.template.html",
    controller: [
      "$scope", "$cookies", "popup",
      function drinksController($scope, $cookies, popup) {
        "use strict";
        var self = this;
        self.currentPage = "manage";

        /**
         * Gets a drink details and opens the edit page for that drink
         * @param {Object} drink - The currently selected drink object
         */
        self.editDrink = function (drink) {
          self.currentDrink = angular.copy(drink);
          self.currentPage = "create";
        };

        /**
         * Opens a popup to confirm then deletes a drink
         * @param {Object} drink - The currently selected drink object
         */
        self.deleteDrink = function (drink, index) {
          popup.question("Do you really want to delete " + drink.name).then(function accepted() {
            self.drinksList.splice(index, 1);
          });
        };

        /**
         * Opens the edit screen to add a new drink
         */
        self.addDrink = function () {
          self.currentPage = "create";
        };

        /**
         * Closes the edit screen and returns to the list screen
         */
        self.closeEditScreen = function name() {
          self.currentPage = "manage";
        };
      }
    ],
    bindings: {
      "drinksList": "="
    }
  });
