sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("expensetracker.controller.History", {

    onInit: function () {},

    onSearch: function (oEvent) {
      var sQuery = oEvent.getParameter("newValue");
      var oList = this.byId("historyList");
      var oBinding = oList.getBinding("items");

      if (!sQuery) {
        oBinding.filter([]);
        return;
      }

      oBinding.filter(new Filter({
        filters: [
          new Filter("note", FilterOperator.Contains, sQuery),
          new Filter("category", FilterOperator.Contains, sQuery)
        ],
        and: false
      }));
    }
  });
});