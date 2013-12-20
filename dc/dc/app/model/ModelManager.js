

window.ModelManager = {

	type:{
		hotel:{
				code:"hotel",
				url:"/getHotels",
				fileName:"hotel.json",
				folderName:"hotel"
		},

		restaurant:{
				code:"restaurant",
				url:"/getRestaurants",
				fileName:"restaurant.json",
				folderName:"restaurant"

		},

		adScreen:{
			code:"adScreen",
			url:"/getAdScreens",
			fileName:"adScreen.json",
			folderName:"adScreen"
		},

		attraction:{
				code:"attraction",
				url:"/getAttractions",
				fileName:"attraction.json",
				folderName:"attraction",
				adScreen:"yes"
		}
	},

	setup:{
		hotel:{
	            items: [
	                     {"name":"hotel 1","id":"1"}
		           		,{"name":"hotel 2","id":"2"}
		           		,{"name":"hotel 3","id":"3"}
		           		,{"name":"hotel 4","id":"4"}
	           	   ],
	           labelPlural: "Hoteles",
	           labelSingular: "Hotel",
	           type: "hotel"
		},
		attraction:{
            items: [
                     {
                    	 "type":"attraction",
                    	 "name":"Estancias Jesuiticas",
                    	 "id":"1",
                    	 "address":"Av. del Trabajo 2811",
                    	 "phoneNumber":"352545896",
                    	 "latitude":"-30.970447",
                    	 "longitud":"-64.097558",
                    	 "description":"La Estancia de Jesus Maria se encuentra cuatro kilometros al norte de la Estancia de La Caroya, siguiendo siempre por la Ruta Nacional 9 en la provincia de Cordoba. Su ubicacion no es fortuita: por alli pasaba el camino real hacia la capital del Virreinato. En sus tierras se origino la actual ciudad cordobesa de ciudad de Jesus Maria.</p><p>En 1618, los jesuitas adquirieron por ocho mil pesos, las 20 mil cepas de vinas, el molino, 250 vacas, 25 bueyes y 30 cerdos de la Chacra de Guanusacate, nombre con el que designaban a esas tierras los indigenas sanavirones.</p><p>En 1620, rebautizada con su actual nombre cristiano, este segundo emprendimiento productivo de la Compania de Jesus concentraba a los aborigenes que eran asalariados y a cerca de trescientos esclavos, comprados en el puerto de Buenos Aires, que llevaban la mayor carga de trabajo. Como era de esperar, en la finca no s&oacute;lo se hablaba el latin, el espanol y el italiano, sino tambien las lenguas aborigenes y africanas.</p> <p>Mitad monasterio y mitad factoria, los ranchos destinados a los indios y a los esclavos, fueron cambiando por las construcciones de ladrillo, piedra y teja, caracteristicas de la Orden. El patio central cerrado en dos costados por un claustro de dos niveles, las amplias galerias, los arcos de medio punto, cierran el estilo propio de la Compania. La iglesia, de fachada sobria y nave unica abovedada, muestra en su interior una importante cupula central ornamentada con relieves que denotan las manos de los artistas aborigenes. Junto a la sacristia, la elegante espadana de piedra completa la arquitectura de la finca.",
                    	 "scheduleOfAttentionWeek":"De martes a viernes: de 8 a 19",
                    	 "scheduleOfAttentionWeekend":"Sabados y domingos: de 10 a 12 y de 14 a 19",
                    	 "image1":"estancia1.jpg",
                    	 "image2":"estancia2.jpg",
                    	 "image3":"estancia3.jpg",
                    	 "image4":"estancia4.jpg"

                     }
	           		,
	           		{
	           			"type":"attraction",
	           			"name":"Torre",
	           			"id":"2",
	                   	"address":"Av. del Trabajo 2811",
	                	"phoneNumber":"352545896",
	                	"latitude":"-30.970447",
	                	"longitud":"-64.097558",
	                   	"description":"La Estancia de Jesus Maria se encuentra cuatro kilometros al norte de la Estancia de La Caroya, siguiendo siempre por la Ruta Nacional 9 en la provincia de Cordoba. Su ubicacion no es fortuita: por alli pasaba el camino real hacia la capital del Virreinato. En sus tierras se origino la actual ciudad cordobesa de ciudad de Jesus Maria.</p><p>En 1618, los jesuitas adquirieron por ocho mil pesos, las 20 mil cepas de vinas, el molino, 250 vacas, 25 bueyes y 30 cerdos de la Chacra de Guanusacate, nombre con el que designaban a esas tierras los indigenas sanavirones.</p><p>En 1620, rebautizada con su actual nombre cristiano, este segundo emprendimiento productivo de la Compania de Jesus concentraba a los aborigenes que eran asalariados y a cerca de trescientos esclavos, comprados en el puerto de Buenos Aires, que llevaban la mayor carga de trabajo. Como era de esperar, en la finca no s&oacute;lo se hablaba el latin, el espanol y el italiano, sino tambien las lenguas aborigenes y africanas.</p> <p>Mitad monasterio y mitad factoria, los ranchos destinados a los indios y a los esclavos, fueron cambiando por las construcciones de ladrillo, piedra y teja, caracteristicas de la Orden. El patio central cerrado en dos costados por un claustro de dos niveles, las amplias galerias, los arcos de medio punto, cierran el estilo propio de la Compania. La iglesia, de fachada sobria y nave unica abovedada, muestra en su interior una importante cupula central ornamentada con relieves que denotan las manos de los artistas aborigenes. Junto a la sacristia, la elegante espadana de piedra completa la arquitectura de la finca.",
	                	"scheduleOfAttentionWeek":"De martes a viernes: de 8 a 19",
	                	"scheduleOfAttentionWeekend":"Sabados y domingos: de 10 a 12 y de 14 a 19",
                    	"image1":"estancia1.jpg",
                    	"image2":"estancia2.jpg",
                    	"image3":"estancia3.jpg"
	           		}
	           		,
	           		{
	           			"type":"attraction",
	           			"name":"Festival",
	           			"id":"3",
	                   	"address":"Av. del Trabajo 2811",
	                	"phoneNumber":"352545896",
	                	"latitude":"-30.970447",
	                	"longitud":"-64.097558",
                   	 	"description":"La Estancia de Jesus Maria se encuentra cuatro kilometros al norte de la Estancia de La Caroya, siguiendo siempre por la Ruta Nacional 9 en la provincia de Cordoba. Su ubicacion no es fortuita: por alli pasaba el camino real hacia la capital del Virreinato. En sus tierras se origino la actual ciudad cordobesa de ciudad de Jesus Maria.</p><p>En 1618, los jesuitas adquirieron por ocho mil pesos, las 20 mil cepas de vinas, el molino, 250 vacas, 25 bueyes y 30 cerdos de la Chacra de Guanusacate, nombre con el que designaban a esas tierras los indigenas sanavirones.</p><p>En 1620, rebautizada con su actual nombre cristiano, este segundo emprendimiento productivo de la Compania de Jesus concentraba a los aborigenes que eran asalariados y a cerca de trescientos esclavos, comprados en el puerto de Buenos Aires, que llevaban la mayor carga de trabajo. Como era de esperar, en la finca no s&oacute;lo se hablaba el latin, el espanol y el italiano, sino tambien las lenguas aborigenes y africanas.</p> <p>Mitad monasterio y mitad factoria, los ranchos destinados a los indios y a los esclavos, fueron cambiando por las construcciones de ladrillo, piedra y teja, caracteristicas de la Orden. El patio central cerrado en dos costados por un claustro de dos niveles, las amplias galerias, los arcos de medio punto, cierran el estilo propio de la Compania. La iglesia, de fachada sobria y nave unica abovedada, muestra en su interior una importante cupula central ornamentada con relieves que denotan las manos de los artistas aborigenes. Junto a la sacristia, la elegante espadana de piedra completa la arquitectura de la finca.",
                   	 	"scheduleOfAttentionWeek":"no definido",
                   	 	"scheduleOfAttentionWeekend":"",
                   	 	"image1":"estancia1.jpg",
                   	 	"image2":"estancia2.jpg"
	           		}
	           		,
	           		{
	           			"type":"attraction",
	           			"name":"Estacion",
	           			"id":"4",
	                   	"address":"Av. del Trabajo 2811",
	                	"phoneNumber":"352545896",
	                	"latitude":"-30.970447",
	                	"longitud":"-64.097558",
                   	 	"description":"La Estancia de Jesus Maria se encuentra cuatro kilometros al norte de la Estancia de La Caroya, siguiendo siempre por la Ruta Nacional 9 en la provincia de Cordoba. Su ubicacion no es fortuita: por alli pasaba el camino real hacia la capital del Virreinato. En sus tierras se origino la actual ciudad cordobesa de ciudad de Jesus Maria.</p><p>En 1618, los jesuitas adquirieron por ocho mil pesos, las 20 mil cepas de vinas, el molino, 250 vacas, 25 bueyes y 30 cerdos de la Chacra de Guanusacate, nombre con el que designaban a esas tierras los indigenas sanavirones.</p><p>En 1620, rebautizada con su actual nombre cristiano, este segundo emprendimiento productivo de la Compania de Jesus concentraba a los aborigenes que eran asalariados y a cerca de trescientos esclavos, comprados en el puerto de Buenos Aires, que llevaban la mayor carga de trabajo. Como era de esperar, en la finca no s&oacute;lo se hablaba el latin, el espanol y el italiano, sino tambien las lenguas aborigenes y africanas.</p> <p>Mitad monasterio y mitad factoria, los ranchos destinados a los indios y a los esclavos, fueron cambiando por las construcciones de ladrillo, piedra y teja, caracteristicas de la Orden. El patio central cerrado en dos costados por un claustro de dos niveles, las amplias galerias, los arcos de medio punto, cierran el estilo propio de la Compania. La iglesia, de fachada sobria y nave unica abovedada, muestra en su interior una importante cupula central ornamentada con relieves que denotan las manos de los artistas aborigenes. Junto a la sacristia, la elegante espadana de piedra completa la arquitectura de la finca.",
                   	 	"scheduleOfAttentionWeek":"De martes a viernes: de 8 a 19",
                   	 	"scheduleOfAttentionWeekend":"Sabados y domingos: de 10 a 12 y de 14 a 19",
                   	 	"image1":"estancia1.jpg"
	           		}
	           		,
	           		{
	           			"type":"attraction",
	           			"name":"Museo",
	           			"id":"5",
	                   	"address":"Av. del Trabajo 2811",
	                	"phoneNumber":"352545896",
	                	"latitude":"-30.970447",
	                	"longitud":"-64.097558",
                   	 	"description":"La Estancia de Jesus Maria se encuentra cuatro kilometros al norte de la Estancia de La Caroya, siguiendo siempre por la Ruta Nacional 9 en la provincia de Cordoba. Su ubicacion no es fortuita: por alli pasaba el camino real hacia la capital del Virreinato. En sus tierras se origino la actual ciudad cordobesa de ciudad de Jesus Maria.</p><p>En 1618, los jesuitas adquirieron por ocho mil pesos, las 20 mil cepas de vinas, el molino, 250 vacas, 25 bueyes y 30 cerdos de la Chacra de Guanusacate, nombre con el que designaban a esas tierras los indigenas sanavirones.</p><p>En 1620, rebautizada con su actual nombre cristiano, este segundo emprendimiento productivo de la Compania de Jesus concentraba a los aborigenes que eran asalariados y a cerca de trescientos esclavos, comprados en el puerto de Buenos Aires, que llevaban la mayor carga de trabajo. Como era de esperar, en la finca no s&oacute;lo se hablaba el latin, el espanol y el italiano, sino tambien las lenguas aborigenes y africanas.</p> <p>Mitad monasterio y mitad factoria, los ranchos destinados a los indios y a los esclavos, fueron cambiando por las construcciones de ladrillo, piedra y teja, caracteristicas de la Orden. El patio central cerrado en dos costados por un claustro de dos niveles, las amplias galerias, los arcos de medio punto, cierran el estilo propio de la Compania. La iglesia, de fachada sobria y nave unica abovedada, muestra en su interior una importante cupula central ornamentada con relieves que denotan las manos de los artistas aborigenes. Junto a la sacristia, la elegante espadana de piedra completa la arquitectura de la finca.",
                   	 	"scheduleOfAttentionWeek":"De martes a viernes: de 8 a 19",
                   	 	"scheduleOfAttentionWeekend":"Sabados y domingos: de 10 a 12 y de 14 a 19",
                   	 	"image1":"estancia1.jpg",
                   	 	"image2":"estancia2.jpg",
                   	 	"image3":"estancia3.jpg",
                   	 	"image4":"estancia4.jpg"
	           		}
	           		,
	           		{
	           			"type":"attraction",
	           			"name":"Parrilla",
	           			"id":"6",
	                   	"address":"Av. del Trabajo 2811",
	                	"phoneNumber":"352545896",
	                	"latitude":"-30.970447",
	                	"longitud":"-64.097558",
                   	 	"description":"La Estancia de Jesus Maria se encuentra cuatro kilometros al norte de la Estancia de La Caroya, siguiendo siempre por la Ruta Nacional 9 en la provincia de Cordoba. Su ubicacion no es fortuita: por alli pasaba el camino real hacia la capital del Virreinato. En sus tierras se origino la actual ciudad cordobesa de ciudad de Jesus Maria.</p><p>En 1618, los jesuitas adquirieron por ocho mil pesos, las 20 mil cepas de vinas, el molino, 250 vacas, 25 bueyes y 30 cerdos de la Chacra de Guanusacate, nombre con el que designaban a esas tierras los indigenas sanavirones.</p><p>En 1620, rebautizada con su actual nombre cristiano, este segundo emprendimiento productivo de la Compania de Jesus concentraba a los aborigenes que eran asalariados y a cerca de trescientos esclavos, comprados en el puerto de Buenos Aires, que llevaban la mayor carga de trabajo. Como era de esperar, en la finca no s&oacute;lo se hablaba el latin, el espanol y el italiano, sino tambien las lenguas aborigenes y africanas.</p> <p>Mitad monasterio y mitad factoria, los ranchos destinados a los indios y a los esclavos, fueron cambiando por las construcciones de ladrillo, piedra y teja, caracteristicas de la Orden. El patio central cerrado en dos costados por un claustro de dos niveles, las amplias galerias, los arcos de medio punto, cierran el estilo propio de la Compania. La iglesia, de fachada sobria y nave unica abovedada, muestra en su interior una importante cupula central ornamentada con relieves que denotan las manos de los artistas aborigenes. Junto a la sacristia, la elegante espadana de piedra completa la arquitectura de la finca.",
                   	 	"scheduleOfAttentionWeek":"De martes a viernes: de 8 a 19",
                   	 	"scheduleOfAttentionWeekend":"Sabados y domingos: de 10 a 12 y de 14 a 19",
                   	 	"image1":"estancia1.jpg",
                   	 	"image2":"estancia2.jpg",
                   	 	"image3":"estancia3.jpg"
	           		}
	           		,
	           		{
	           			"type":"attraction",
	           			"name":"Circuito Autoguiado",
	           			"id":"7",
	                   	"address":"Av. del Trabajo 2811",
	                	"phoneNumber":"352545896",
	                	"latitude":"-30.970447",
	                	"longitud":"-64.097558",
                   	 	"description":"La Estancia de Jesus Maria se encuentra cuatro kilometros al norte de la Estancia de La Caroya, siguiendo siempre por la Ruta Nacional 9 en la provincia de Cordoba. Su ubicacion no es fortuita: por alli pasaba el camino real hacia la capital del Virreinato. En sus tierras se origino la actual ciudad cordobesa de ciudad de Jesus Maria.</p><p>En 1618, los jesuitas adquirieron por ocho mil pesos, las 20 mil cepas de vinas, el molino, 250 vacas, 25 bueyes y 30 cerdos de la Chacra de Guanusacate, nombre con el que designaban a esas tierras los indigenas sanavirones.</p><p>En 1620, rebautizada con su actual nombre cristiano, este segundo emprendimiento productivo de la Compania de Jesus concentraba a los aborigenes que eran asalariados y a cerca de trescientos esclavos, comprados en el puerto de Buenos Aires, que llevaban la mayor carga de trabajo. Como era de esperar, en la finca no s&oacute;lo se hablaba el latin, el espanol y el italiano, sino tambien las lenguas aborigenes y africanas.</p> <p>Mitad monasterio y mitad factoria, los ranchos destinados a los indios y a los esclavos, fueron cambiando por las construcciones de ladrillo, piedra y teja, caracteristicas de la Orden. El patio central cerrado en dos costados por un claustro de dos niveles, las amplias galerias, los arcos de medio punto, cierran el estilo propio de la Compania. La iglesia, de fachada sobria y nave unica abovedada, muestra en su interior una importante cupula central ornamentada con relieves que denotan las manos de los artistas aborigenes. Junto a la sacristia, la elegante espadana de piedra completa la arquitectura de la finca.",
                   	 	"scheduleOfAttentionWeek":"De martes a viernes: de 8 a 19",
                   	 	"scheduleOfAttentionWeekend":"Sabados y domingos: de 10 a 12 y de 14 a 19",
                   	 	"image1":"estancia1.jpg",
                   	 	"image2":"estancia2.jpg"
	           		}
           	   ],
           labelPlural: "Atracciones",
           labelSingular: "Atraccion",
           type: "attraction"
		},
		adScreen:{
            items: [
                     {name:"adScreen1",id:"1", fileName:"3-fernet-listo2.png"}
	           		,{name:"adScreen2",id:"2", fileName:"12.png"}
	           		,{name:"adScreen3",id:"3", fileName:"23.png"}
	           		,{name:"adScreen4",id:"4", fileName:"diproach-180x180.jpg"}
           	   ],
           labelPlural: "Publicidades de Pantall",
           labelSingular: "Publicidad de pantalla",
           type: "adScreen"
		},
		restaurant:{
	            items: [
	                     {"name":"rest 1","id":"1"}
		           		,{"name":"rest 2","id":"2"}
		           		,{"name":"rest 3","id":"3"}
		           		,{"name":"rest 4","id":"4"}
	           	   ],
	           labelPlural: "Restaurantes",
	           labelSingular: "Restaurante",
	           type: "restaurant"
		}
	},

	getDefinition:function (type) {

    	if(type == this.type.restaurant.code){
    		return this.type.restaurant;
    	} else if(type == this.type.hotel.code){
    		return this.type.hotel;
    	} else if(type == this.type.attraction.code){
    		return this.type.attraction;
    	} else if(type == this.type.adScreen.code){
    		return this.type.adScreen;
    	}

    	return;
    },

	getSetup:function (type) {

    	if(type == this.type.restaurant.code){
    		return this.setup.restaurant;
    	} else if(type == this.type.hotel.code){
    		return this.setup.hotel;
    	} else if(type == this.type.attraction.code){
    		return this.setup.attraction;
    	} else if(type == this.type.adScreen.code){
    		return this.setup.adScreen;
    	}

    	return;
    },

	urlBase:"http://www.diproach.com/api/dc",
	//urlBase:"http://localhost:8888/api/dc",

    getAll:function (type, successCallback, errorCallback) {

		var definition = this.getDefinition(type);

    	if(App.isEnvironmentWeb()){
    		var setup = this.getSetup(type);
    		//successCallback(JSON.stringify(setup));
    		successCallback(setup);
    	} else {
    		JSonUtil.read(definition.fileName, successCallback, errorCallback);
    	}

    },


    getById:function (id, collection) {

		for (var x=0; x < collection.length; x++) {
            var item = collection[x];
            if (item.id == id){
                return item;
            }
        }
        return null;
    },

    updateAll:function(){
    	if(App.isEnvironmentWeb()) return;

    	_.each(this.type, function (item) {
        	this.update(item);
        }, this);
    },

    update:function(item){

    	var setup = this.getSetup(item.code);

    	JSonUtil.exists(item.fileName,
			function(){
    			// If exists update from server
				ModelManager.updateFromServer(item);
			},
			function(){

				// If not exist create file with setup values
				JSonUtil.save(item.fileName, setup,
					function(){


						// If file was created we must try update from server
						ModelManager.updateFromServer(item);

					},
					function(){}
				);
			},
			function(){}
		);
    },

    updateFromServer:function(definition){

		var loadUrl = this.urlBase + definition.url;

		$.getJSON(loadUrl, function(result) {


			var jsonString = JSON.stringify(result.data);
        	JSonUtil.save(definition.fileName, jsonString, function(){}, function(){} );

		  }).error(function(result) {
		  });

    }


};
