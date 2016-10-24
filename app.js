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
						.done(this.ajaxDone.bind(this));//unexpected token
						.fail(app.ajaxFail);
						.always(app.ajaxAlways);
		},

		ajaxDone : function(places) {
			//Afficher les places dans la console -> marche
			var this.listPlaces = places;
			console.log(this.listPlaces);
			for(var i= 0; i < this.listPlaces.length; i++);
				console.log(listPlaces[i]); //undefined
			//Afficher les places dans la page -> ne marche pas, rep : il faut créer des <li> à l'interieur de<ul> non?		
			$('li').append(listPlaces);
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