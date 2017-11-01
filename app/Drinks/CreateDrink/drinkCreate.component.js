
/**
 * The controller for the drinks create page
 * controls creating and editing drinks
 */
angular.module('drinkCreate', []).component('drinkCreate', {
  templateUrl: 'app/Drinks/CreateDrink/drinkCreate.template.html',
  controller: [
    '$cookies', "popup",
    function drinkCreateController($cookies, popup) {
      'use strict';
      var self = this;
      self.drink = {};

      self.submit = function () {
        popup.question("Do you want to submit this drink").then(function agreed() {
          self.submitDrink(self.drink);
        });
      };

      /**
       * Stops editing a drink
       */
      self.cancelEdit = function () {
        var drinkName = (self.drink != null && self.drink.name != null && self.drink.name != "") ? self.drink.name : "Untitled Drink";
        popup.question("Do you want to stop editing " + drinkName).then(function clickedOk() {
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
    "bottlesList" : "<",
    "closeEdit": "<",
    "submitDrink": "<",
    "drink": "="
  }
});
