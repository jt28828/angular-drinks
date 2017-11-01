/**
 * The controller for the bottles management page.
 * Controls which views are currently visible as well as 
 * deleting current bottles
 */
angular.module("bottles", ["bottleCreate", "bottlesManage"]).
  component("bottles", {
    templateUrl: "app/Bottles/bottles.template.html",
    controller: [
      "$scope", "$cookies", "popup",
      function bottlesController($scope, $cookies, popup) {
        "use strict";
        var self = this;
        self.currentPage = "manage";

        /**
         * Gets a bottle details and opens the edit page for that bottle
         * @param {Object} bottle - The currently selected bottle object
         */
        self.editBottle = function (bottle) {
          self.currentBottle = angular.copy(bottle);
          self.currentPage = "create";
        };

        /**
         * Opens a popup to confirm then deletes a bottle
         * @param {Object} bottle - The currently selected bottle object
         */
        self.deleteBottle = function (bottle, index) {
          popup.question("Do you really want to delete " + bottle.name).then(function accepted() {
            self.bottlesList.splice(index, 1);
          });
        };

        /**
         * Submits a bottle to the server
         * @param {Object} bottle - The bottle object to submit
         */
        self.submitBottle = function (bottle) {
          self.bottlesList.push(bottle);
          self.closeEditScreen();
        };

        /**
         * Opens the edit screen to add a new bottle
         */
        self.addBottle = function () {
          self.currentPage = "create";
        };

        /**
         * Closes the edit screen and returns to the list screen
         */
        self.closeEditScreen = function name() {
          self.currentPage = "manage";
          self.currentBottle = null;
        };
      }
    ],
    bindings: {
      "bottlesList": "="
    }
  });
