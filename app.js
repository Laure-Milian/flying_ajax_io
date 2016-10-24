/*(function() {

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
			//ajout du nouveau code par Zélia
			for(i = 0; i < listPlaces.length; i++){
				var place = listPlaces[i];
				console.log(place);
				$('ul').append('<li>' + listPlaces + '</li>');
			}
		},

		ajaxFail : function() {
			alert("fail");
		},

		ajaxAlways : function() {
			
		}

	}

	app.init();

})();*/


$("#weatherBtn").click(function(){
	console.log("click");
	$.ajax({
		url : "api.openweathermap.org/data/2.5/weather?q=Toulouse",
		type : "GET",
		sucess : function(){}

	});

});