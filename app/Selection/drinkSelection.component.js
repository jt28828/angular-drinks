'use strict';
// Register `drinkSelection` component, along with its associated controller and template
angular.module('drinkSelection').component('drinkSelection', {
  templateUrl: 'Selection/drinkSelection.template.html',
  controller: ['$scope', '$cookies',
    function drinkSelectionController($scope, $cookies) {
      var self = this;

      self.testArray = JSON.parse($cookies.get('drinks'));
      console.log(self.testArray);

      /* Generates a random number between 1 and 10 and retrieves a color from that*/
      self.generateColor = function(number) {
        var color = null;
        switch (number) {
          case 1:
            color = 'greenBack';
            break;
          case 2:
            color = 'redBack';
            break;
          case 3:
            color = 'orangeBack';
            break;
          case 4:
            color = 'indigoBack';
            break;
          case 5:
            color = 'blueBack';
            break;
          case 6:
            color = 'tealBack';
            break;
          case 7:
            color = 'orangeBack';
            break;
          case 8:
            color = 'purpleBack';
            break;
          case 9:
            color = 'blueBack';
            break;
          case 10:
            color = 'greenBack';
            break;
          default:
            color = 'blueBack';
            break;
        }
        return color;
      };

            self.testArray = [
                {color: self.generateColor(1), name: 'martini'},
                {color: self.generateColor(2), name: 'sour'},
                {color: self.generateColor(3), name: 'margarita'},
                {color: self.generateColor(4), name: 'mojito'},
                {color: self.generateColor(5), name: 'daiquiri'},
              {color: self.generateColor(6), name: 'manhattan'},
                  {color: self.generateColor(7), name: 'long island iced tea'},
                {color: self.generateColor(8), name: 'mai tai'},
                  {color: self.generateColor(9), name: 'vodka raspberry'},
                  {color: self.generateColor(10), name: 'highball'},
              ];
    }

  ]
});
