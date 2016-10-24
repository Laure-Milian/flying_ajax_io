(function() {

	var app = {

		init : function() {
			this.listeners();
		},
		
		listeners : function() {
			$("#ajaxBtn").on("click", this.getData.bind(this));
			$("#weatherBtn").on('click', this.getMeteo.bind(this));
		},

		getData : function() {
			var url = "http://192.168.1.21:3000/places";
			var data = $.ajax(url)
				.done(app.ajaxDone)
				.fail(app.ajaxFail)
				.always(app.ajaxAlways);
		},

		ajaxDone : function(response) {

			var listPlaces = response.places;
			console.log(listPlaces);

			for(i = 0; i < listPlaces.length; i++){
				$('ul').append('<li>' + listPlaces[i].nom + '</li>');

				if (listPlaces[i].nom === "IoT Valley") {
					$("#troll").html(listPlaces[i].password);
				}
			}
		},

		ajaxFail : function() {
			alert("fail");
		},

		ajaxAlways : function() {
			console.log("complete");
		},

		getMeteo : function() {
			$.ajax('http://api.openweathermap.org/data/2.5/weather?id=2972315&APPID=e05300d9bacf77c059ab39927fd4909d&units=metric')
				.done(this.meteoDone)
				.fail(this.meteoFail)
				.always(this.meteoAlways)
		},

		meteoDone : function(response) {
			$('#temp').html("La température est : " + response.main.temp);
			$('#descriptionMeteo').html("Description de la météo : " + response.weather[0].description);
		},

		meteoFail : function() {
			console.log("fail");
		},

		meteoAlways : function() {
			console.log("complete");
		}

	}

	app.init();

})();