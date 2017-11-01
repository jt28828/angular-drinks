
/**
 * The controller for the bottles create page
 * controls creating and editing bottles
 */
angular.module('bottleCreate', []).component('bottleCreate', {
  templateUrl: 'app/Bottles/CreateBottle/bottleCreate.template.html',
  controller: [
    '$cookies', "popup",
    function bottleCreateController($cookies, popup) {
      'use strict';
      var self = this;
      self.bottle = {};

      self.submit = function () {
        popup.question("Do you want to submit this bottle").then(function agreed() {
          self.submitBottle(self.bottle);
        });
      };

      /**
       * Stops editing a bottle
       */
      self.cancelEdit = function () {
        var bottleName = (self.bottle != null && self.bottle.name != null && self.bottle.name != "") ? self.bottle.name : "Untitled Bottle";
        popup.question("Do you want to stop editing " + bottleName).then(function clickedOk() {
          self.closeEdit();
        });
      };

      self.bottles = [
        {
          name: 'Vodka',
          type: 'spirit',
          strength: 37
        }, {
          name: 'Whisky',
          type: 'spirit',
          strength: 37
        }, {
          name: 'Contreau',
          type: 'spirit',
          strength: 37
        }, {
          name: 'Moscato',
          type: 'wine',
          strength: 10
        }
      ];
    }

  ],
  bindings: {
    "closeEdit": "<",
    "submitBottle": "<",
    "bottle": "="
  }
});
