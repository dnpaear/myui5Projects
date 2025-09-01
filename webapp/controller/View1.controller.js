sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("project1.controller.View1", {
        onInit: function () {
            // Initialization logic
        },

        onPress: function () {
            this.getOwnerComponent().getRouter().navTo("secondroot"); // ✅ Use correct route name
        },
        onSubmit:function(){
           var name = this.getView().byId("_IDGenInput1").getValue();
           var msg = "Welcome to " + name;
           this.getView().byId("_IDGenText2").setText(msg);
           //Second
           var alignment = this.getView().byId("_IDGenInput2").getValue();
            this.getView().byId("_IDGenText2").setTextAlign(alignment);
            //Diable i/i fields
            this.getView().byId("_IDGenInput1").setEnabled(true);
            this.getView().byId("_IDGenInput2").setEnabled(true);
             } ,
             onHideShow:function(){
                var txtbtn =  this.getView().byId("_IDGenButton1").getText();
                if (txtbtn === "Hide")
                {
                 this.getView().byId("_IDGenText1").setVisible(false);
                this.getView().byId("_IDGenText2").setVisible(false);
                this.getView().byId("_IDGenLabe1").setVisible(false);
                this.getView().byId("_IDGenInput1").setVisible(false);
                this.getView().byId("_IDGenLabe2" ).setVisible(false);
                 this.getView().byId("_IDGenInput2" ).setVisible(false);

                 this.getView().byId("_IDGenButton1").setText("Show");

                } else 
                { this.getView().byId("_IDGenText1").setVisible(true);
                this.getView().byId("_IDGenText2").setVisible(true);
                this.getView().byId("_IDGenLabe1").setVisible(true);
                this.getView().byId("_IDGenInput1").setVisible(true);
                this.getView().byId("_IDGenLabe2" ).setVisible(true);
                 this.getView().byId("_IDGenInput2" ).setVisible(true);

                  this.getView().byId("_IDGenButton1").setText("Hide");
                }

             }
    });
});
