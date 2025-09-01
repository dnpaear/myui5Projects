sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project1.controller.Second", {
        onInit() {
        },

       onNavBack: function () {
            this.getOwnerComponent().getRouter().navTo("RouteView1"); // ✅ Use correct route name
        }
    });
});