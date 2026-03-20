sap.ui.define([
    "sap/ui/core/Component",
    "./Validation"
], function (Component, Validation) {
    "use strict";

    return Component.extend("ui5.odataTabValidation.utils.ValidatorComponent", {
        metadata: {
            manifest: "json",
            events: {
                validationCompleted: {
                    parameters: {
                        results: { type: "object" }
                    }
                }
            }
        },
        /**
         * @description Initializes the component by setting up the message model and creating an instance of the Validation class.
         * @public
         */
        init: function () {
            Component.prototype.init.apply(this, arguments);
            this.setModel(this.getMessageManager().getMessageModel(), "message");
            this.getMessageManager().registerMessageProcessor(this.getModel());
            this.oValidation = new Validation(this.getModel(), this.onValidationCompleted.bind(this));
        },

        onValidationCompleted: function (oResults) {
            this.fireEvent("validationCompleted", { results: oResults });
        },
    });
});