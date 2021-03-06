sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sampleCoreElements/util/formatter"
], function(Controller, formatter) {
	"use strict";
	return Controller.extend("sampleCoreElements.controller.materialOverView", {
		formatter: formatter,
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sampleCoreElements.view.materialOverView
		 */
		//	onInit: function() {
		//
		//	},
		onChangeID: function(oEvt) {
				var aFilter = [];
				var query = oEvt.getParameter("value");
				if (query && query.length > 0) {
					var oFilter = new sap.ui.model.Filter("Material Num", sap.ui.model.FilterOperator.EQ, query);
					aFilter.push(oFilter);
				}
				var oTable = this.getView().byId("__table0");
				oTable.getBinding("items").filter(aFilter);
			},
			onBack: function() {
			//This code was generated by the layout editor.
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("homepage");
		
		}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf sampleCoreElements.view.materialOverView
			 */
			//	onBeforeRendering: function() {
			//
			//	},
			/**
			 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
			 * This hook is the same one that SAPUI5 controls get after being rendered.
			 * @memberOf sampleCoreElements.view.materialOverView
			 */
			//	onAfterRendering: function() {
			//
			//	},
			/**
			 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
			 * @memberOf sampleCoreElements.view.materialOverView
			 */
			//	onExit: function() {
			//
			//	}
			,
		/**
		 *@memberOf sampleCoreElements.controller.materialOverView
		 */
		
	});
});