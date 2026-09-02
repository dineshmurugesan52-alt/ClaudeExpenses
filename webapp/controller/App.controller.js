sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("expensetracker.controller.App", {

    onToggleSideNav: function () {
      var oSideNav = this.byId("sideNav");
      oSideNav.setExpanded(!oSideNav.getExpanded());
    },

    onNavItemSelect: function (oEvent) {
      var sKey = oEvent.getParameter("item").getKey();
      this.getOwnerComponent().getRouter().navTo(sKey);
    }
  });
});