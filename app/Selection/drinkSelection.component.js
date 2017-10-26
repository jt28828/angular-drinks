// Register `drinkSelection` component, along with its associated controller and template
angular.module('drinkSelection').component('drinkSelection', {
  templateUrl: 'app/Selection/drinkSelection.template.html',
  controller: [
    '$cookies', "popup",
    function drinkSelectionController($cookies, popup) {
      'use strict';
      var self = this;

      /**
       * Fires when a drink is selected
       * @param {Object} drink - The selected drink object
       */
      self.drinkSelected = function (drink) {
        // popup.question("text").then(function () {
        // });
      };

    }
  ],
  bindings: {
    "drinksList": "<"
  }
});
