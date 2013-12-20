

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
                   	 "name":"Estancia Jesu\u00EDtica",
                   	 "id":"1",
                   	 "address":"Av. del Trabajo 2811",
                   	 "phoneNumber":"352545896",
                   	 "latitude":"-30.970447",
                   	 "longitud":"-64.097558",
                   	 "description":"<p>Tierras a orillas del R\u00EDo Guanusacate, tierras de Sanavirones, al pie de las Sierras Chicas, al norte de la C\u00F3rdoba de la Nueva Andaluc\u00EDa fundada por Cabrera. Fueron merced de Don Pedro Deza, encomendero de su Majestad, fueron propiedad de Don Gaspar de Quevedo, fueron vendidas a la Compa\u00F1\u00EDa de Jes\u00FAs en 1618. Los hermanos jesuitas fundaron la Estancia, y la llamaron Jes\u00FAs Mar\u00EDa. Y la hicieron crecer. Trigo y harina, vid y vino, trabajo, aire puro, rezos, sol, indios y curas.</p><p>El Edificio: La construcci\u00F3n se desarrolla en dos plantas. En el ala noroeste, en planta baja, solo tiene galer\u00EDas y en planta alta galer\u00EDa y habitaciones. El parejo muro que contiene al suelo en planta baja, todo en piedra bola entera, es probable que sea la parte  m\u00E1s antigua de la construcci\u00F3n. Los arcos del claustro, de gran solidez, tienen en sus enjutas pintorescos \u00F3culos cuadrifolios y en este sector, a pesar de tener las impostas para las b\u00F3vedas, el techo es plano de tiranter\u00EDa y bovedillas. El ala noreste incluye en planta baja, el amplio local de la vieja bodega y sobre ella, las habitaciones de los sacerdotes. Este es el sector que, seg\u00FAn los documentos, se le atribuye, en forma directa al Hermano Bianchi. La Iglesia es una cl\u00E1sica planta en cruz latina con una nave principal robusta, dividida en tres cuerpos. El transepto est\u00E1 coronado por una gran c\u00FApula sin tambor pero con linterna. La b\u00F3veda es de ca\u00F1\u00F3n corrido con importantes cornisas que rodean toda construcci\u00F3n. El tajamar que remata el parque es una muestra de las magn\u00EDficas obras de infraestructura de la Hermandad.</p><p>La Estancia Jesu\u00EDtica de Jes\u00FAs Mar\u00EDa es parte del Patrimonio de la Humanidad declarado por UNESCO en 2000  junto con todo el complejo de Estancias Jesu\u00EDticas de C\u00F3rdoba. Hoy alberga el Museo Jesu\u00EDtico Nacional, con salas de arte sacro, numism\u00E1tica y pintura, pero tambi\u00E9n los restos de dos molinos, un perchel y las acequias que regaron toda la propiedad.</p>",
                   	 "scheduleOfAttentionWeek":"De martes a viernes: de 8 a 19",
                   	 "scheduleOfAttentionWeekend":"S\u00E1bados y domingos: de 10 a 12 y de 14 a 19",
                   	 "image1":"estancia1.jpg",
                   	 "image2":"estancia2.jpg",
                   	 "image3":"estancia3.jpg",
                   	 "image4":"estancia4.jpg"
                   	 
                    }
	           		,
	           		{
	           			"type":"attraction",
	           			"name":"Festival de Doma y Folclore",
	           			"id":"2",
	                   	"address":"Cleto Perez y Tucuman",
	                	"phoneNumber":"",
	                	"latitude":"",
	                	"longitud":"",
                  	 	"description":"<p>En mayo de 1965, bajo la imperiosa necesidad de recaudar fondos para solventar la atenci\u00F3n de los ni\u00F1os de las escuelas se propone la idea de realizar un festival de doma. Convencidos de la relevancia que tendr\u00EDa el evento se invita a todas las Cooperadoras de las Escuelas de Jes\u00FAs Mar\u00EDa. Inicialmente se sumaron 10 Cooperadoras, luego se adhirieron otras m\u00E1s hasta conformar la \u0022Uni\u00F3n de Cooperadoras Escolares”. El trabajo de estas voluntades logr\u00F3 llevar adelante con absoluto \u00E9xito el primer festival que se inaugur\u00F3 en enero de 1966. M\u00E1s de 45.000 personas asistieron al evento gaucho. El resultado, una recaudaci\u00F3n que cumpli\u00F3 con creces el objetivo planteado hizo que este sue\u00F1o se convirtiera en el Festival m\u00E1s grande de Am\u00E9rica en su g\u00E9nero, atrayendo en cada edici\u00F3n a m\u00E1s de 400 mil espectadores que viven esta fiesta popular y un sin n\u00FAmero de televidentes y radioescuchas que lo siguen desde sus hogares en todo el pa\u00EDs. Hasta el d\u00EDa de hoy las Cooperadores Escolares siguen llevando adelante el evento y los fondos recaudados se reparten entre las escuelas para sostener la educaci\u00F3n de los ni\u00F1os.</p><p>El principal atractivo es el campeonato de Jineteada, que consiste en un jinete montando un potro que es especialmente preparado a lo largo del a\u00F1o para esta ocasi\u00F3n. Las categor\u00EDas de montas son tres.</p><p>Crina Limpia: En esta categor\u00EDa se puede usar una lonja que va alrededor del pescuezo del animal como \u00FAnico sost\u00E9n fuerte del jinete, qui\u00E9n no puede dejar de trabajar el animal con las espuelas. El tiempo de monta es de 8 segundos.</p><p>La Grupa Sure\u00F1a o Surera: En esta categor\u00EDa no se usan estribos, pero se utiliza un cuero de oveja sujetado por un cinch\u00F3n. El jinete debe sujetar las riendas con una mano y el azote (huasca, talero, etc.) con la otra. El tiempo de monta es de 12 segundos.</p><p>El Basto con Encimera: Aqu\u00ED el hombre no deber\u00E1 perder los estribos ni \u0022charquear\u0022 (tocar al animal con las manos). En las otras categor\u00EDas el charqueo tambi\u00E9n quita puntos. El tiempo de monta es de 15 segundos.</p>",
                  	 	"scheduleOfAttentionWeek":"De martes a domingos y feriados: de 10 a 19",
                  	 	"scheduleOfAttentionWeekend":"",
                  	 	"image1":"festival1.jpg",
                  	 	"image2":"festival2.jpg"
	           		}
	           		,
	           		{
	           			"type":"attraction",
	           			"name":"Estaci\u00F3n de Trenes",
	           			"id":"3",
	                   	"address":"",
	                	"phoneNumber":"",
	                	"latitude":"",
	                	"longitud":"",
                  	 	"description":"<p>En 1875 es inaugurado el ferrocarril que une C\u00F3rdoba capital con la localidad santiague\u00F1a de Recreo. La estaci\u00F3n de trenes hace de la ciudad un \u00EDcono importante, como ya lo fuera en la \u00E9poca colonial por estar situada sobre el Camino Real.</p><p>Hoy la Estaci\u00F3n recibe dos trenes de carga semanales y en su explanada se llevan a cabo numerosos espect\u00E1culos art\u00EDsticos de danza, m\u00FAsica, teatro y muestras fotogr\u00E1ficas entre otros.</p>",
                  	 	"scheduleOfAttentionWeek":"",
                  	 	"scheduleOfAttentionWeekend":"",
                  	 	"image1":"estacion1.jpg",
                  	 	"image2":"estacion2.jpg",
                  	 	"image3":"estacion3.jpg"
	           		}
	           		,
	           		{
	           			"type":"attraction",
	           			"name":"Torre C\u00E9spedes",
	           			"id":"4",
	                   	"address":"C\u00E1stulo Pe\u00F1a esq. Col\u00F3n",
	                	"phoneNumber":"03525-443773",
	                	"latitude":"",
	                	"longitud":"",
	                   	"description":"<p>El edificio data de fines del siglo XIX. Se trataba  de la casa de veraneo de Gabriel C\u00E9spedes y su familia. C\u00E9spedes se desempe\u00F1\u00F3 como intendente de la ciudad entre los a\u00F1os 1914 y 1918. La torre fue construida entre los  a\u00F1os 1896 y 1898. Dise\u00F1ada y dirigida por el Ingeniero y Constructor Pedro Busc\u00E1, un espa\u00F1ol que lleg\u00F3 a la Argentina por pedido de su coterr\u00E1neo Juan BialetMass\u00E9. El castillo parte de una base octogonal central y cuatro torres circulares. Est\u00E1 dividido en dos plantas. En el interior de una de las torres se alza la escalera caracol que conduce a una terraza cuyo per\u00EDmetro es cerrado. Fue declarada de inter\u00E9s Municipal y componente del patrimonio arquitect\u00F3nico y urban\u00EDstico de Jes\u00FAs Mar\u00EDa en el a\u00F1o 1995.</p>",
	                	"scheduleOfAttentionWeek":"",
	                	"scheduleOfAttentionWeekend":"",
	                	"image1":"jesusmaria.jpg"
	           		}
	           		,
	           		{
	           			"type":"attraction",
	           			"name":"Museo de la Ciudad Luis Biondi",
	           			"id":"5",
	                   	"address":"Ingeniero Olmos 453",
	                	"phoneNumber":"03525-443773",
	                	"latitude":"",
	                	"longitud":"",
                  	 	"description":"<p>El 27 de Septiembre de 2012 se Inaugura la Sala de Exposiciones en la Antigua Casa Ghersi. Esta Casona de estilo franc\u00E9s de fines de siglo XIX, construida como casa de veraneo, alberga la sala que recibe exposiciones pict\u00F3ricas todos los meses. La restauraci\u00F3n de la casa, en su tramo final, tiene por objeto la instalaci\u00F3n del Museo de la Ciudad que se encuentra en proceso de conformaci\u00F3n.</p>",
                  	 	"scheduleOfAttentionWeek":"Jueves a domingos: de 17 a 21",
                  	 	"scheduleOfAttentionWeekend":"",
                  	 	"image1":"museo1.jpg",
                  	 	"image2":"museo2.jpg"
	           		}
	           		,
	           		{
	           			"type":"attraction",
	           			"name":"Capilla Kronfuss",
	           			"id":"6",
	                   	"address":"",
	                	"phoneNumber":"",
	                	"latitude":"",
	                	"longitud":"",
                  	 	"description":"<p>Obra de inspiraci\u00F3n del Barroco Colonial dise\u00F1ada por el ingeniero y arquitecto Juan Kronfuss, que junto al Hospital Vicente Agüero datan del a\u00F1o 1925. Kronfuss naci\u00F3 en Bulgaria y lleg\u00F3 a Argentina en 1910. Su trabajo intenta rescatar la importancia del desarrollo de una arquitectura local vinculada a los materiales de la zona y no a la importaci\u00F3n de mercader\u00EDas y dise\u00F1os for\u00E1neos. Adem\u00E1s de esta capilla, en Jes\u00FAs Mar\u00EDa destacamos “El Cortijo” la casa de la familia Agüero construida en 1930 que se encuentra en el barrio Los Nogales (propiedad privada).</p>",
                  	 	"scheduleOfAttentionWeek":"Se la puede vistar en horario de misa: mi\u00E9rcoles, s\u00E1bados y domingos a las 18:30 hs.",
                  	 	"scheduleOfAttentionWeekend":"",
                  	 	"image1":"capilla1.jpg",
                  	 	"image2":"capilla2.jpg"
	           		}
	           		,
	           		{
	           			"type":"attraction",
	           			"name":"Parrillas de Jes\u00FAs Mar\u00EDa",
	           			"id":"7",
	                   	"address":"",
	                	"phoneNumber":"",
	                	"latitude":"",
	                	"longitud":"",
                  	 	"description":"<p>Las parrillas se han ganado el mote de \u0022el mejor asado del mundo\u0022. M\u00E1s de cincuenta a\u00F1os de asado compartido en tablas \u0022de a dos\u0022 donde los cortes llegan uno a uno en su punto justo. Se degustan entre 10 y 15 piezas coronadas con los mejores vinos de la Argentina. Los cuadriles y los lomitos de cerdo son tan famosos como los mejores churrascos de la pampa h\u00FAmeda. Una conjunci\u00F3n de carne sabrosa y tierna con un m\u00E9todo especialmente pensado para la misma. Las pasturas y suelos del norte cordob\u00E9s le dan a las carnes gran sabor, pero si los animales son grandes sus carnes se vuelven duras. Por eso se consumen animales peque\u00F1os que a\u00FAn tienen un sabor intenso y guardan la ternura en sus fibras. As\u00ED, los cortes son todos peque\u00F1os, por lo que comer una parrillada completa en Jes\u00FAs Mar\u00EDa es una suerte de degustaci\u00F3n de diferentes cortes de vaca, cerdo y cabrito.</p><p>Asimismo la cocina gourmet se ha instalado en la ciudad para decir que no todo es asado. Es una opci\u00F3n novedosa y creativa que va de la mano de j\u00F3venes autores que desarrollan su arte con gran pasi\u00F3n. Premios como Mejor Plato de Vanguardia (Inocencio), Mejor Plato Regional (El Museo Resto Bar) y un puesto para competir en el Torneo Argentino de Chef (La Torgnole Gastronomique) atestiguan el desarrollo de alta calidad de estos establecimientos que participan constantemente en competencias, demostraciones y clases en centros de ense\u00F1anza de C\u00F3rdoba.</p>",
                  	 	"scheduleOfAttentionWeek":"",
                  	 	"scheduleOfAttentionWeekend":"",
                  	 	"image1":"parrillada1.jpg",
                  	 	"image2":"parrillada2.jpg",
                  	 	"image3":"parrillada3.jpg",
                  	 	"image4":"parrillada4.jpg",
                  	 	"image5":"parrillada5.jpg"
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
