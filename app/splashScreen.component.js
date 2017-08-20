'use strict';
// Register `splashScreen` component, along with its associated controller and template
angular.
        module('splashScreen').
        component('splashScreen', {
            templateUrl: 'splashScreen.template.html',
            controller: ['$scope',
                function projectDeliverablesController($scope) {
                    var self = $scope;
                    var menuOpen = false;
                    self.menuUsed = false;
                    self.currentPage = 'selection';

                    /* Opens or closes the slideout menu */
                    self.openMenu = function () {
                        self.menuUsed = true;
                        if (!menuOpen) {
                            angular.element('#slideOutNavBar').css('left', '0px');
                            menuOpen = true;
                        } else {
                            angular.element('#slideOutNavBar').css('left', '-300px');
                            menuOpen = false;
                        }
                    };

                    angular.element(window).click(function () {
                        if (menuOpen) {
                            self.openMenu();
                        }
                    });

                    angular.element('#NavBarMenu').click(function (event) {
                        event.stopPropagation();
                    });
                }

            ]
        });
