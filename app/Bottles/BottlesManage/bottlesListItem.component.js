/**
 * The controller for the bottles management page.
 * Controls which views are currently visible as well as 
 * deleting current bottles
 */
angular.module("bottlesListItem", []).
  component("bottlesListItem", {
    templateUrl: "app/Bottles/BottlesManage/bottlesListItem.template.html",
    controller: [
      "$scope", "$cookies",
      function bottlesController($scope, $cookies) {
        "use strict";
        var self = this;
      }
    ],
    bindings: {
      "bottle": "<",
      "editBottle": "<",
      "deleteBottle": "<",
      "location": "<"
    }
  });
