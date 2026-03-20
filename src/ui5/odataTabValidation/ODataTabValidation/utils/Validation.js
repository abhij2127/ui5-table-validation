sap.ui.define(
    ["sap/ui/core/Messaging"],
    (Validator) => {

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
            }

        }

        return Validator.extend("ui5.odataTabValidation.utils.Validation", oValidation);
    }
)