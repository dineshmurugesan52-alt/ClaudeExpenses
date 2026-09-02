sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "expensetracker/model/models"
], function (UIComponent, Device, models) {
  "use strict";

  return UIComponent.extend("expensetracker.Component", {
    metadata: { manifest: "json" },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      // Local mock model so the app runs fully before CAP/HANA is deployed.
      // Swap individual view bindings from "mock" to the "expense" OData
      // model (already declared in manifest.json) once the backend is live.
      this.setModel(models.createMockDashboardModel(), "mock");
      this.setModel(models.createDeviceModel(), "device");

      this.getRouter().initialize();
    }
  });
});