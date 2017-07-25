'use strict';
// Register `drinkCreate` component, along with its associated controller and template
angular.
        module('drinkCreate').
        component('drinkCreate', {
            templateUrl: 'app/CreateDrink/drinkCreate.template.html',
            controller: ['$scope',
                function drinkCreateController($scope,) {
                    var self = $scope;

                    self.bottles = [
                        {
                            name: 'Vodka',
                            type: 'spirit',
                            strength: 37
                        },
                        {
                            name: 'Whisky',
                            type: 'spirit',
                            strength: 37
                        },
                        {
                            name: 'Contreau',
                            type: 'spirit',
                            strength: 37
                        },
                        {
                            name: 'Moscato',
                            type: 'wine',
                            strength: 10
                        }
                    ];
                }

            ]
        });
