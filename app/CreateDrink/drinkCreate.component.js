'use strict';
// Register `drinkCreate` component, along with its associated controller and template
angular.module('drinkCreate').component('drinkCreate', {
  templateUrl: 'CreateDrink/drinkCreate.template.html',
  controller: [
    '$scope', '$cookies',
    function drinkCreateController($scope, $cookies) {
      var self = this;

      self.submit = function(){
        var name = self.drink.name;
        var color = generateColor(Math.floor(Math.random()));
        var object = [{
          name: name,
          color: color
        },{
          name: name,
          color: color
        }];
        object = JSON.stringify(object);
        $cookies.put('drinks', object);
      };

      /* Generates a random number between 1 and 10 and retrieves a color from that*/
      function generateColor(number) {
        var number = number % 10;
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

  ]
});
