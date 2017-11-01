/**
 * The controller for the bottles management page.
 * Controls which views are currently visible as well as 
 * deleting current bottles
 */
angular.module("bottlesManage", ["bottlesListItem"]).
  component("bottlesManage", {
    templateUrl: "app/Bottles/BottlesManage/bottlesManage.template.html",
    controller: [
      "$scope", "$cookies",
      function bottlesController($scope, $cookies) {
        "use strict";
        var self = this;
        self.currentPage = "create";
      }
    ],
    bindings: {
      "bottlesList": "<",
      "editBottle": "<",
      "deleteBottle" : "<",
      "addBottle": "<"
    }
  });
