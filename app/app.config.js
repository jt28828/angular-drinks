'use strict';

//Chooses a template based on which url is in the browser eg: /projectIssue = <project-issue>
angular.
    module('drinkMachine').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/splashScreen/', {
                    template: '<splash-screen></splash-screen>'
                }).
                otherwise('/splashScreen');
        }
    ]);
