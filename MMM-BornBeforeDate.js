/* MagicMIrror Module - MMM-BornBeforeDate
 *
 * This is a module for the [MagicMirror² By Michael Teeuw http://michaelteeuw.nl]
 * (https://github.com/MichMich/MagicMirror/).
 *
 * version: 1.0.0
 *
 * Modified module by Jim Hallock (justjim1220@gmail.com)
 *
 * Licensed with a crapload of good ole' Southern Sweet Tea
 * and a lot of Cheyenne Extreme Menthol cigars!!!
 */

Module.register("MMM-BornBeforeDate", {

	requiresVersion: "2.1.0",


	// Define required scripts.
	getScripts: function() {
		return ["moment.js", "moment-timezone.js", "MMM-BornBeforeDate.js"];
	},

	// Define styles.
	getStyles: function() {
		return ["MMM-BornBeforeDate.css"];
    },
    
    // Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		// Schedule update interval.
		var self = this;
		setInterval(function() {
			self.updateDom();
		}, 1000);

		"use strict";
	},

	getDom: function() {
		var wrapper = document.createElement("div");
		var dateWrapper = document.createElement("div");
		dateWrapper.className = "date";
		var y = moment().subtract('years', 21).format('MMMM DD, YYYY');
        dateWrapper.innerHTML = "<h5>You Must Be Born On Or Before This Date:</h5>" + "<p><h4>" + y + "</p></h4>";
        wrapper.appendChild(dateWrapper);
        return wrapper;
    }
});
