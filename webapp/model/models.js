sap.ui.define([
  "sap/ui/model/json/JSONModel",
  "sap/ui/Device"
], function (JSONModel, Device) {
  "use strict";

  return {
    createDeviceModel: function () {
      var oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode("OneWay");
      return oModel;
    },

    // Replace this with a real OData V4 model bound to
    // /odata/v4/expense/DailyExpenseByCategory once srv is deployed.
    createMockDashboardModel: function () {
      var aDays = ["01","02","03","04","05","06","07","08","09","10",
                    "11","12","13","14","15","16","17","18","19","20",
                    "21","22","23","24","25","26","27","29","30"];
      var aFood   = [50,150,150,180,40,90,120,140,110,0,270,150,200,0,110,90,110,80,140,470,240,0,150,190,170,220,90,80,100];
      var aTravel = [30,220,190,240,30,80,150,190,90,0,240,160,220,0,90,100,110,60,140,300,270,0,140,220,170,220,60,70,90];
      var aAccom  = [40,230,220,300,30,110,190,230,150,0,300,180,240,0,190,130,180,90,220,450,320,0,160,290,270,320,90,90,110];
      var aOthers = [30,180,170,180,20,90,150,150,120,0,320,140,150,0,150,130,140,90,150,470,270,0,150,220,220,220,110,80,100];

      var aChart = aDays.map(function (sDay, i) {
        return {
          day: sDay + " Jun",
          Food: aFood[i],
          Travel: aTravel[i],
          Accommodation: aAccom[i],
          Others: aOthers[i],
          hasData: (aFood[i] + aTravel[i] + aAccom[i] + aOthers[i]) > 0
        };
      });

      var sum = function (arr) { return arr.reduce(function (a, b) { return a + b; }, 0); };

      var aNotes = ["Lunch with team", "Cab to airport", "Hotel stay", "Movie tickets", "Groceries", "Metro card top-up"];
      var aExpenseRows = [];
      aChart.forEach(function (oDay, i) {
        if (oDay.Food > 0) aExpenseRows.push({ day: oDay.day, category: "Food", amount: oDay.Food, note: aNotes[i % aNotes.length] });
        if (oDay.Travel > 0) aExpenseRows.push({ day: oDay.day, category: "Travel", amount: oDay.Travel, note: aNotes[(i + 1) % aNotes.length] });
      });

      return new JSONModel({
        month: "June 2026",
        chartData: aChart,
        expenseRows: aExpenseRows,
        totals: {
          food: sum(aFood),
          travel: sum(aTravel),
          accommodation: sum(aAccom),
          others: sum(aOthers),
          grandTotal: sum(aFood) + sum(aTravel) + sum(aAccom) + sum(aOthers)
        },
        budgets: [
          { category: "Food", icon: "tools-kitchen-2", spent: sum(aFood), limit: 15000, state: "Warning" },
          { category: "Accommodation", icon: "building", spent: sum(aAccom), limit: 12000, state: "Error" },
          { category: "Travel", icon: "car", spent: sum(aTravel), limit: 10000, state: "Success" }
        ]
      });
    }
  };
});