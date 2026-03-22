sap.ui.define(
    ["sap/ui/core/Messaging"],
    (Validator) => {
        /**
         * @typedefinition ValidationResult
         * @type {object}
         * @property {string} type - The type of the validation result (e.g., "Error", "Warning", "Information").
         * @property {string} message - The validation message describing the issue.
         * @property {string} path - The binding path to the relevant data in the model.
         * @property {object} context - The context object containing additional information about the validation result.
         */
        const MESSAGE_TYPE = {
            ERROR: "Error",
            WARNING: "Warning",
            INFO: "Information"
        };
        const oValidation = {
            
            /**
             * @public
             * @constructor
             * @param {sap.ui.model.} oModel 
             */
            constructor(oModel, fCallback){
                this.oDataModel = oModel;
                this.fOnValidation = fCallback;
            },
            /**
             * @description Validates the given table and triggers the callback function once the validation is completed.
             * @public
             * @param {sap.ui.table.Table} oTable 
             */
            validateTable(oTable){
                
                this._waitServiceMetadataLoaded().then(()=>{
                    const oMetdata = this.oDataModel.getServiceMetadata();
                })
                const aContexts = oTable.getBinding().getContexts();
                const aResults = [];
            },
            /**
             * @description Waits for the OData service metadata to be loaded before performing any operations that depend on it.
             * @private
             * @returns {Promise}
             */
            _waitServiceMetadataLoaded(){
                return new Promise((res)=>{
                    if(this.oDataModel.getServiceMetadata()){
                        res();
                    }
                    else{
                        this.oDataModel.attachMetadataLoaded(()=>{
                            res();
                        });
                    }
                });
            },
            /**
             * 
             * @param {sap.ui.model.Context} oContext 
             * @returns {ValidationResult[]} An array of validation results for the given context.
             * @private
             */
            _validateContexts(oContext){
                
            },


        }

        return Validator.extend("ui5.odataTabValidation.utils.Validation", oValidation);
    }
)