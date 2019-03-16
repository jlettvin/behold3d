(function() {
	/**
	 * create a canvas and populate with tubulins
	**/
	"use strict";

	var the = document.BEHOLD3D = document.BEHOLD3D || {}

	the.loader = loader;

	function parser(text) {
		console.log(text);
	}

	function loader(url) {
		fetch(url).then(function(response) {
			return response.text();
		}).then(function(text) {
			parser(text);
		}).catch(function(err) {
			console.log("Error:", err);
		});
	}

})();
