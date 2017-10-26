"use strict";
// Register `splashScreen` component, along with its associated controller and template
angular.
    module("splashScreen").
    component("splashScreen", {
        templateUrl: "app/splashScreen.template.html",
        controller: ["$scope", "$timeout",
            function projectDeliverablesController($scope, $timeout) {
                var self = this;
                var menuOpen = false;
                self.menuUsed = false;
                self.currentPage = "selection";

                /* Opens or closes the slideout menu */
                self.openMenu = function () {
                    self.menuUsed = true;
                    if (!menuOpen) {
                        angular.element("#slideOutNavBar").css("left", "0px");
                        menuOpen = true;
                    } else {
                        angular.element("#slideOutNavBar").css("left", "-300px");
                        menuOpen = false;
                    }
                };

                angular.element(window).click(function () {
                    if (menuOpen) {
                        self.openMenu();
                    }
                });

                angular.element("#NavBarMenu").click(function (event) {
                    event.stopPropagation();
                });

                /**
                 * Changes the currently visible page
                 */
                self.changePage = function name(page) {
                    if (page == "manageDrinks") {
                        self.sideOfCenter = (self.currentPage == "selection") ? "right" : "left";
                    } else {
                        self.sideOfCenter = (page == "selection") ? "right" : "left";
                    }
                    $timeout(function () {
                        self.currentPage = page;
                    });
                };

                /* Generates a random number between 1 and 10 and retrieves a color from that*/
                self.generateColor = function (number) {
                    var color = null;
                    switch (number) {
                        case 1:
                            color = "greenBack";
                            break;
                        case 2:
                            color = "redBack";
                            break;
                        case 3:
                            color = "orangeBack";
                            break;
                        case 4:
                            color = "indigoBack";
                            break;
                        case 5:
                            color = "blueBack";
                            break;
                        case 6:
                            color = "tealBack";
                            break;
                        case 7:
                            color = "orangeBack";
                            break;
                        case 8:
                            color = "purpleBack";
                            break;
                        case 9:
                            color = "blueBack";
                            break;
                        case 10:
                            color = "greenBack";
                            break;
                        default:
                            color = "blueBack";
                            break;
                    }
                    return color;
                };

                self.testDrinks = [
                    {
                        color: self.generateColor(1),
                        name: "martini",
                        description: "The martini is a cocktail made with gin and vermouth, and garnished with an olive or a lemon twist.",
                        id: 5
                    }, {
                        color: self.generateColor(2),
                        name: "sour",
                        description: "A sour is a traditional family of mixed drinks. Common examples of sours are the margarita and the sidecar.",
                        id: 5
                    }, {
                        color: self.generateColor(3),
                        name: "margarita",
                        description: "A margarita is a cocktail consisting of tequila, triple sec, and lime or lemon juice, often served with salt or sugar on the rim of the glass.",
                        id: 5
                    }, {
                        color: self.generateColor(4),
                        name: "mojito",
                        description: "Mojito is a traditional Cuban highball. Traditionally, a mojito is a cocktail that consists of five ingredients: white rum, sugar, lime juice, soda water, and mint.",
                        id: 5
                    }, {
                        color: self.generateColor(5),
                        name: "daiquiri",
                        description: "Daiquiri is a family of cocktails whose main ingredients are rum, citrus juice, and sugar or other sweetener. The daiquiri is one of the six basic drinks listed in David A. Embury's classic The Fine Art of Mixing Drinks.",
                        id: 5
                    }, {
                        color: self.generateColor(6),
                        name: "manhattan",
                        description: "A Manhattan is a cocktail made with whiskey, sweet vermouth, and bitters. Commonly used whiskeys include rye, Canadian whisky, bourbon, blended whiskey, and Tennessee whiskey. ",
                        id: 5
                    }, {
                        color: self.generateColor(7),
                        name: "Long Island Iced Tea",
                        description: "A Long Island Iced Tea is a type of alcoholic mixed drink typically made with vodka, tequila, light rum, triple sec, gin, and a splash of cola, which gives the drink the same amber hue as its namesake",
                        id: 5
                    }, {
                        color: self.generateColor(8),
                        name: "Mai Tai",
                        description: "The Mai Tai is an alcoholic cocktail based on rum, Curaçao liqueur, orgeat syrup, and lime juice, associated with Polynesian-style settings.",
                        id: 5
                    }, {
                        color: self.generateColor(9),
                        name: "vodka raspberry",
                        description: "Vodka with raspberry cordial",
                        id: 5
                    }, {
                        color: self.generateColor(10),
                        name: "highball",
                        description: "Highball is the name for a family of mixed alcoholic drinks that are composed of an alcoholic base spirit and a larger proportion of a non-alcoholic mixer.",
                        id: 5
                    }
                ];
            }

        ]
    });
