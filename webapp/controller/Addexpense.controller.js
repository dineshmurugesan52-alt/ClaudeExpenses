sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {
  "use strict";

  return Controller.extend("expensetracker.controller.AddExpense", {

    onNavBack: function () {
      this.getOwnerComponent().getRouter().navTo("dashboard");
    },

    onSaveExpense: function () {
      var oData = {
        amount: this.byId("amountInput").getValue(),
        expenseDate: this.byId("dateInput").getValue(),
        category: this.byId("categorySelect").getSelectedKey(),
        paymentMode: this.byId("paymentSelect").getSelectedKey(),
        note: this.byId("noteInput").getValue()
      };

      if (!oData.amount || !oData.expenseDate) {
        MessageToast.show("Please enter an amount and date");
        return;
      }

      // Once CAP/HANA is live, replace this with:
      // var oModel = this.getOwnerComponent().getModel("expense");
      // var oListBinding = oModel.bindList("/Expenses");
      // oListBinding.create(oData);
      MessageToast.show("Saved (mock): ₹" + oData.amount + " — " + oData.category);
      this.getOwnerComponent().getRouter().navTo("dashboard");
    }
  });
}); 