(function() {

	var app = {
		
		init : function() {
			this.listeners();
		},
		
		listeners : function() {
			$("button").on("click", this.getData.bind(this));
		},

		getData : function() {
			var url = "http://192.168.1.21:3000/places";
			var data = $.ajax(url)
						.done(app.ajaxDone)
						.fail(app.ajaxFail)
						.always(app.ajaxAlways);
		},

		ajaxDone : function(places) {
			var listPlaces = places;
			console.log(listPlaces);
		},

		ajaxFail : function() {
			alert("fail");
		},

		ajaxAlways : function() {
			console.log("always");
		}

	}

app.init();

})();