sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
], function(Controller,MessageBox, ODataModel) {
	"use strict";

	return Controller.extend("test.teste.controller.View1", {
		onInit:function(){

			// var oModel = new ODataModel({ // required from "sap/ui/model/odata/v2/ODataModel"
			// 	serviceUrl: "https://services.odata.org/V3/OData/OData.svc/"
			//   });

			//   var oModel = new ODataModel({
			// 	serviceUrl: "https://services.odata.org/V3/OData/OData.svc/",
			// 	headers: {
			// 	  DataServiceVersion: "3.0",
			// 	  MaxDataServiceVersion: "3.0"
			// 	}
			//   });			  

// "ODataModel" required from module "sap/ui/model/odata/v2/ODataModel"
			// var oModel = new sap.ui.model.odata.v2.ODataModel("https://services.odata.org/V2/Northwind/Northwind.svc");
			// var oModel = new sap.ui.model.odata.v2.ODataModel("https://services.odata.org/V3/(S(frik5l2zde0sxh4jiifyhqo4))/OData/OData.svc/");
			// var oModel = new sap.ui.model.odata.v2.ODataModel("https://services.odata.org/V2/(S(knoba14f5cqoqjqpru0u24es))/OData/OData.svc/");
			// var oModel = new sap.ui.model.odata.v2.ODataModel("https://services.odata.org/V2/Northwind/Northwind.svc/", { useBatch: false });
			// https://services.odata.org/V2/Northwind/Northwind.svc/Categories(1)
			// var oModel = new sap.ui.model.odata.v2.ODataModel("{serviceUrl: 'http://services.odata.org/Northwind/Northwind.svc'}")
			// this.getView().setModel(oModel)

			// this.getView().byId('table').bindAggregation('items', {

			// })
			// debugger
		},


		onDrop:function(oEvent){
			var bindingContext=parseInt(oEvent.getParameters('dragSession').draggedControl)
			// .getBindingContextPath().split('/')[2]);
			var oEmpModel=this.getOwnerComponent().getModel("EmpData");
			var oEmpModelData=oEmpModel.getData().content;
			oEmpModelData.splice(bindingContext,1);
			oEmpModel.setProperty('/content',oEmpModelData);
			
			oEmpModel.refresh();
			MessageBox.success("Employee record deleted!");
		}
	});
});

// test.teste.controller.View1	