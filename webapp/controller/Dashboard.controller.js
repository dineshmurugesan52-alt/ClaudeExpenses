sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("expensetracker.controller.Dashboard", {

    onInit: function () {
      // Once the CAP service is live, bind the view to the "expense" OData
      // model instead of "mock", e.g.:
      // this.getView().setModel(this.getOwnerComponent().getModel("expense"));
    },

    onPrevMonth: function () {
      MessageToast.show("Load previous month — wire to /odata/v4/expense/DailyExpenseByCategory?$filter=...");
    },

    onNextMonth: function () {
      MessageToast.show("Load next month — wire to /odata/v4/expense/DailyExpenseByCategory?$filter=...");
    },

    onAddExpense: function () {
      this.getOwnerComponent().getRouter().navTo("addExpense");
    }
  });
});