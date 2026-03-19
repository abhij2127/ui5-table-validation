/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ui5.odataTabValidation.ODataTabValidation.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "ui5.odataTabValidation.ODataTabValidation",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"ui5.odataTabValidation.ODataTabValidation.ExampleColor"
		],
		interfaces: [],
		controls: [
			"ui5.odataTabValidation.ODataTabValidation.Example"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>ODataTabValidation</code>
	 *
	 * @namespace
	 * @name ui5.odataTabValidation.ODataTabValidation
	 * @author Abhishek Joshi
	 * @version ${version}
	 * @public
	 */
	var thisLib = ui5.odataTabValidation.ODataTabValidation;

	/**
	 * Semantic Colors of the <code>ui5.odataTabValidation.ODataTabValidation.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
