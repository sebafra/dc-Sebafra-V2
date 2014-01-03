

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

		otherEvent:{
			code:"otherEvent",
			url:"/getotherEvent",
			fileName:"otherevent.json",
			folderName:"otherEvent"
		},
		service:{
			code:"service",
			url:"/getService",
			fileName:"service.json",
			folderName:"service"
		},
		festival:{
			code:"festival",
			url:"/getFestival",
			fileName:"festival.json",
			folderName:"festival"

		},
		cronograma:{
			code:"cronograma",
			url:"/getCronograma",
			fileName:"cronograma.json",
			folderName:"cronograma"

		},
		temporaryAccommodation:{
			code:"temporaryAccommodation",
			url:"/getTemporaryAccommodation",
			fileName:"temporaryAccommodation.json",
			folderName:"temporaryAccommodation"
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
			{
				"type":"hotel",
				"name":"Estancia Jesu\u00EDtica",
				"id":"1",
				"hotelType":"Hotel",
				"extendedView":"true",
				"listItemViewType":"featured",
				"address":"Av. del Trabajo 2811",
				"phoneNumber":"352545896",
				"image1":"image1.jpg"

			}
			,
			{
				"type":"hotel",
				"name":"Estacion de Trenes",
				"id":"2",
				"hotelType":"Hotel",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Av. del Trabajo 2811",
				"phoneNumber":"352545896"
			}
			,
			{
				"type":"hotel",
				"name":"Estacion de Trenes",
				"id":"3",
				"hotelType":"Hotel",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Av. del Trabajo 2811",
				"phoneNumber":"352545896"
			}
			,
			{
				"type":"hotel",
				"name":"Estacion de Trenes",
				"id":"4",
				"hotelType":"Hotel",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Av. del Trabajo 2811",
				"phoneNumber":"352545896"
			}

			],
			labelPlural: "Hoteles",
			labelSingular: "Hotel",
			type: "hotel"
		},
		otherEvent:{
			items: [
			{
				"type":"otherEvent",
				"name":"Festival 4 estaciones",
				"id":"1",
				"extendedView":"true",
				"featured":"true",
				"description":"<p>4 Estaciones es un festival gratuito, que se realiza en la plaza principal de Jes\u00FAs Mar\u00EDa, desagregado a lo largo del año. Son cuatro fechas que se desarrollan en la segunda mitad del verano, hacia fines de febrero o principios de marzo, en otoño, por lo general en mayo, invierno, en agosto o primeros días de septiembre y primavera, en el mes de noviembre. Tiene por objeto romper la fuerte estacionalidad que genera el Festival de Doma y Folclore.</p> <p>Por este han pasado distintos artistas variando la propuesta de acuerdo a los géneros. Ejemplo de esto son: </p><ul> <li>Iñaki Urlezaga y el Ballet Concierto. </li> <li>Murga Agarrate Catalina (Uruguay) </li> <li>Raúl Lavié.</li> <li>Caligaris, La Pata de la Tuerta y Circo Z</li> <li>Chébere. Retorno con el Turco Julio</li> <li>Los Manseros Santiagueños</li> <li>Baglieto y Vitale</li> <li>Cacho Buenaventura</li> </ul> <p>Además de estos artistas, la grilla siempre se compone de artistas locales con lo que se refuerza su desarrollo y proyección.</p>",
				"image1":"4estaciones1.jpg",
				"image2":"4estaciones2.jpg"
			}
			,
			{
				"type":"otherEvent",
				"name":"Jesus Mar\u00EDa Rock",
				"id":"2",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>Es un festival de 2 días donde el Rock se adueña del Anfiteatro Jos\u00E9 Hernández, el predio donde se realiza el Festival de Doma y Folclore de Jesús María. Se desarrolla el fin de semana largo de octubre, sábado y domingo. En su primera edición pasaron Estelares, Kapanga, Catupecu Machu, Las Pastillas del Abuelo, La Vela Puerca y Las Pelotas. Es un festival de gran magnitud que promete.</p>",
				"image1":"rock1.jpg",
				"image2":"rock2.jpg",
				"image3":"rock3.jpg",
				"image4":"rock4.jpg"
			}
			,
			{
				"type":"otherEvent",
				"name":"Carnaval y Quema del Rey Momo",
				"id":"3",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>En Jesús María se han desarrollado carnavales desde los inicios de la villa. Han ido variando en el tiempo. Hoy es una fiesta popular y gratuita donde participan comparsas, carrozas y disfrazados de la zona. </p>",
				"image1":"carnaval1.jpg",
				"image2":"carnaval2.jpg"
			}
			,
			{
				"type":"otherEvent",
				"name":"Jesús María Gourmet",
				"id":"4",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>Es un torneo de cocina clasificatorio para el Córdoba Cocina y al Torneo Argentino de Chefs. Participan establecimientos gastronómicos del Norte con un menú de tres pasos elaborado en dos horas y presentado al jurado. Atento el público sigue el desarrollo del evento en las tribunas con una vista inmejorable del proceso de elaboración de estos maestros de la cocina. Su fecha es variable ya que se encuentra supeditada a los campeonatos superiores pero se estima para los primeros días de Junio.</p>",
				"image1":"parrillada1.jpg"
			}
			,
			{
				"type":"otherEvent",
				"name":"Otros Encuentros",
				"id":"5",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>Encuentro de Pintores Paisajistas. Abril.</p><p>Córdoba Jazz Camp. Segunda semana de vacaciones de Julio.</p><p>Festival de Destrezas Gauchas. Agosto.</p><p>Encuentro de Coros. Noviembre.</p>"
			}

			],
			labelPlural: "Eventos",
			labelSingular: "Evento",
			type: "otherEvent"
		},
		attraction:{
			items: [
			{
				"type":"attraction",
				"name":"Estancia Jesu\u00EDtica",
				"id":"1",
				"extendedView":"true",
				"listItemViewType":"simple",
				"address":"Av. del Trabajo 2811",
				"phoneNumber":"352545896",
				"latitude":"-30.970447",
				"longitud":"-64.097558",
				"description":"<p>Tierras a orillas del R\u00EDo Guanusacate, tierras de Sanavirones, al pie de las Sierras Chicas, al norte de la C\u00F3rdoba de la Nueva Andaluc\u00EDa fundada por Cabrera. Fueron merced de Don Pedro Deza, encomendero de su Majestad, fueron propiedad de Don Gaspar de Quevedo, fueron vendidas a la Compa\u00F1\u00EDa de Jes\u00FAs en 1618. Los hermanos jesuitas fundaron la Estancia, y la llamaron Jes\u00FAs Mar\u00EDa. Y la hicieron crecer. Trigo y harina, vid y vino, trabajo, aire puro, rezos, sol, indios y curas.</p><p>El Edificio: La construcci\u00F3n se desarrolla en dos plantas. En el ala noroeste, en planta baja, solo tiene galer\u00EDas y en planta alta galer\u00EDa y habitaciones. El parejo muro que contiene al suelo en planta baja, todo en piedra bola entera, es probable que sea la parte  m\u00E1s antigua de la construcci\u00F3n. Los arcos del claustro, de gran solidez, tienen en sus enjutas pintorescos \u00F3culos cuadrifolios y en este sector, a pesar de tener las impostas para las b\u00F3vedas, el techo es plano de tiranter\u00EDa y bovedillas. El ala noreste incluye en planta baja, el amplio local de la vieja bodega y sobre ella, las habitaciones de los sacerdotes. Este es el sector que, seg\u00FAn los documentos, se le atribuye, en forma directa al Hermano Bianchi. La Iglesia es una cl\u00E1sica planta en cruz latina con una nave principal robusta, dividida en tres cuerpos. El transepto est\u00E1 coronado por una gran c\u00FApula sin tambor pero con linterna. La b\u00F3veda es de ca\u00F1\u00F3n corrido con importantes cornisas que rodean toda construcci\u00F3n. El tajamar que remata el parque es una muestra de las magn\u00EDficas obras de infraestructura de la Hermandad.</p><p>La Estancia Jesu\u00EDtica de Jes\u00FAs Mar\u00EDa es parte del Patrimonio de la Humanidad declarado por UNESCO en 2000  junto con todo el complejo de Estancias Jesu\u00EDticas de C\u00F3rdoba. Hoy alberga el Museo Jesu\u00EDtico Nacional, con salas de arte sacro, numism\u00E1tica y pintura, pero tambi\u00E9n los restos de dos molinos, un perchel y las acequias que regaron toda la propiedad.</p>",
				"description-en":"<p>These lands, crossed by Guanusacate River were the home of the Sanaviron people, one of the many aborigine cultures living in America prior to the Spanish arrival. Don Pedro Deza, commissioner of His Majesty, the Spanish King, was given the lands, and later on they were property of Don Gaspar de Quevedo. The Jesuits bought them in 1618 and established the Estancia, naming it Jesus Maria. And they made it thrive.</p><p>Wheat and flour, grapes and wine, hard work, pure air, prayers and the sun, Indians and priests.</p><p>The building: It includes a church or chapel, priests’ residence, ranches for slaves and indigenous peoples, work areas (camps, mills, beating mills, etc.), hydraulic systems (breakwaters, irrigation ditches, canals, etc.), farmhouses, and large extents of land for cattle breeding.</p><p>The Jesuit Estancia of Jesus Maria was declared World Heritage by UNESCO in 2000 along with all the Jesuit ensamble in Cordoba. Nowadays it houses the National Jesuit Museum, with exhibits of sacred art, numismatic, paintings and pre-Columbian relics.</p><p>The remains of two mills, a granary and the irrigation ditches can also be seen.</p>",
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
				"extendedView":"true",
				"listItemViewType":"simple",
				"address":"Cleto Perez y Tucuman",
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
				"extendedView":"true",
				"listItemViewType":"simple",
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
				"extendedView":"true",
				"listItemViewType":"simple",
				"address":"C\u00E1stulo Pe\u00F1a esq. Col\u00F3n",
				"phoneNumber":"03525-443773",
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
				"extendedView":"true",
				"listItemViewType":"simple",
				"address":"Ingeniero Olmos 453",
				"phoneNumber":"03525-443773",
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
				"extendedView":"true",
				"listItemViewType":"simple",
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
				"extendedView":"true",
				"listItemViewType":"simple",
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
		},
		service:{
			items: [
			{
				"type":"service",
				"name":"Estancia Jesu\u00EDtica",
				"id":"1",
				"extendedView":"true",
				"featured":"true",
				"address":"Av. del Trabajo 2811",
				"phoneNumber":"352545896"
			}
			,
			{
				"type":"service",
				"name":"Estacion de Trenes",
				"id":"2",
				"extendedView":"false",
				"listItemViewType":"simple",
				"address":"Av. del Trabajo 2811",
				"phoneNumber":"352545896"
			}
			,
			{
				"type":"service",
				"name":"Estacion de Trenes",
				"id":"3",
				"listItemViewType":"simple",
				"address":"Av. del Trabajo 2811",
				"phoneNumber":"352545896"
			}
			,
			{
				"type":"service",
				"name":"Estacion de Trenes",
				"id":"4",
				"listItemViewType":"simple",
				"address":"Av. del Trabajo 2811",
				"phoneNumber":"352545896"
			}
			],
			labelPlural: "Servicios",
			labelSingular: "Servicio",
			type: "service"
		},
		festival:{
			items: [
			{
				"type":"festival",
				"name":"Información del Festival",
				"id":"1",
				"extendedView":"true",
				"listItemViewType":"simple",
				"address":"Cleto Perez y Tucuman",
				"description":"<p>En mayo de 1965, bajo la imperiosa necesidad de recaudar fondos para solventar la atenci\u00F3n de los ni\u00F1os de las escuelas se propone la idea de realizar un festival de doma. Convencidos de la relevancia que tendr\u00EDa el evento se invita a todas las Cooperadoras de las Escuelas de Jes\u00FAs Mar\u00EDa. Inicialmente se sumaron 10 Cooperadoras, luego se adhirieron otras m\u00E1s hasta conformar la \u0022Uni\u00F3n de Cooperadoras Escolares”. El trabajo de estas voluntades logr\u00F3 llevar adelante con absoluto \u00E9xito el primer festival que se inaugur\u00F3 en enero de 1966. M\u00E1s de 45.000 personas asistieron al evento gaucho. El resultado, una recaudaci\u00F3n que cumpli\u00F3 con creces el objetivo planteado hizo que este sue\u00F1o se convirtiera en el Festival m\u00E1s grande de Am\u00E9rica en su g\u00E9nero, atrayendo en cada edici\u00F3n a m\u00E1s de 400 mil espectadores que viven esta fiesta popular y un sin n\u00FAmero de televidentes y radioescuchas que lo siguen desde sus hogares en todo el pa\u00EDs. Hasta el d\u00EDa de hoy las Cooperadores Escolares siguen llevando adelante el evento y los fondos recaudados se reparten entre las escuelas para sostener la educaci\u00F3n de los ni\u00F1os.</p><p>El principal atractivo es el campeonato de Jineteada, que consiste en un jinete montando un potro que es especialmente preparado a lo largo del a\u00F1o para esta ocasi\u00F3n. Las categor\u00EDas de montas son tres.</p><p>Crina Limpia: En esta categor\u00EDa se puede usar una lonja que va alrededor del pescuezo del animal como \u00FAnico sost\u00E9n fuerte del jinete, qui\u00E9n no puede dejar de trabajar el animal con las espuelas. El tiempo de monta es de 8 segundos.</p><p>La Grupa Sure\u00F1a o Surera: En esta categor\u00EDa no se usan estribos, pero se utiliza un cuero de oveja sujetado por un cinch\u00F3n. El jinete debe sujetar las riendas con una mano y el azote (huasca, talero, etc.) con la otra. El tiempo de monta es de 12 segundos.</p><p>El Basto con Encimera: Aqu\u00ED el hombre no deber\u00E1 perder los estribos ni \u0022charquear\u0022 (tocar al animal con las manos). En las otras categor\u00EDas el charqueo tambi\u00E9n quita puntos. El tiempo de monta es de 15 segundos.</p>",
				"scheduleOfAttentionWeek":"De martes a domingos y feriados: de 10 a 19",
				"scheduleOfAttentionWeekend":"",
				"image1":"festival1.jpg",
				"image2":"festival2.jpg"
			}
			,
			{
				"type":"festival",
				"name":"Cronograma 2014",
				"id":"2",
				"extendedView":"true",
				"listItemViewType":"list",
				"listCode":"cronograma",
				"address":"Av. del Trabajo 2811",
				"phoneNumber":"352545896"
			}
			,
			{
				"type":"festival",
				"name":"Alojamiento Temporario",
				"id":"3",
				"extendedView":"true",
				"listItemViewType":"list",
				"listCode":"temporaryAccommodation",
				"address":"Av. del Trabajo 2811",
				"phoneNumber":"352545896"
			}
			],
			labelPlural: "Festival",
			labelSingular: "Festival",
			type: "festival"
		}
		,
		cronograma:{
			items: [
			{
				"type":"cronograma",
				"name":"Viernes 10",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Los Nocheros<br>Alma de Luna<br>Carlos Sánchez “El Tucu”<br>Jessica Benavidez<br>Julián Burgos<br>Acto Inaugural",
				"ticketGeneral":"Entrada General $70;  Jubilados $40;  Menores Gratis.",
				"ticketPremium":"Platea $ 170 (Fila 1 a 4); $ 150 (Fila 5 a 10)"
			}
			,
			{
				"type":"cronograma",
				"name":"Viernes 10",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Los Nocheros<br>Alma de Luna<br>Carlos Sánchez “El Tucu”<br>Jessica Benavidez<br>Julián Burgos<br>Acto Inaugural",
				"ticketGeneral":"Entrada General $70;  Jubilados $40;  Menores Gratis.",
				"ticketPremium":"Platea $ 170 (Fila 1 a 4); $ 150 (Fila 5 a 10)"
			}
			,
			{
				"type":"cronograma",
				"name":"Viernes 10",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Los Nocheros<br>Alma de Luna<br>Carlos Sánchez “El Tucu”<br>Jessica Benavidez<br>Julián Burgos<br>Acto Inaugural",
				"ticketGeneral":"Entrada General $70;  Jubilados $40;  Menores Gratis.",
				"ticketPremium":"Platea $ 170 (Fila 1 a 4); $ 150 (Fila 5 a 10)"
			}
			],
			labelPlural: "Cronograma",
			labelSingular: "Cronograma",
			type: "cronograma"
		}
		,
		temporaryAccommodation:{
			items: [
			{
				"type":"temporaryAccommodation",
				"name":"Beltrame Hugo José",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"hotelType":"2 Sgl",
				"address":"M. Moreno (n) 225",
				"phoneNumber":"426950",
				"garage":"true",
				"additionalInfo":"A compartir / vent. de techo / TV cable / asador"
			}
			,
			{
				"type":"temporaryAccommodation",
				"name":"Lloubell Juliana",
				"id":"2",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"hotelType":"2 Sgl",
				"address":"España 216",
				"phoneNumber":"4544479",
				"celNumber":"15644479",
				"additionalInfo":"Aquí va información adicional de los alojamientos"
			}
			,
			{
				"type":"temporaryAccommodation",
				"name":"Viernes 10",
				"id":"3",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"hotelType":"Hotel",
				"address":"Av. del Trabajo 2811",
				"phoneNumber":"352545896",
				"additionalInfo":"Aquí va información adicional de los alojamientos"
			}
			],
			labelPlural: "Alojamientos",
			labelSingular: "Alojamiento",
			type: "temporaryAccommodation"
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
		} else if(type == this.type.otherEvent.code){
			return this.type.otherEvent;
		} else if(type == this.type.service.code){
			return this.type.service;
		} else if(type == this.type.festival.code){
			return this.type.festival;
		} else if(type == this.type.cronograma.code){
			return this.type.cronograma;
		} else if(type == this.type.temporaryAccommodation.code){
			return this.type.temporaryAccommodation;
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
		} else if(type == this.type.otherEvent.code){
			return this.setup.otherEvent;
		} else if(type == this.type.service.code){
			return this.setup.service;
		} else if(type == this.type.festival.code){
			return this.setup.festival;
		} else if(type == this.type.cronograma.code){
			return this.setup.cronograma;
		} else if(type == this.type.temporaryAccommodation.code){
			return this.setup.temporaryAccommodation;
		}

		return;
	},

	//urlBase:"http://www.diproach.com/api/dc",
	urlBase:"http://192.168.1.5/jesus-maria",

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

        this.update(this.type.hotel);
   // 	_.each(this.type, function (item) {
   // 		this.update(item);
   // 	}, this);
    },

    updateTest:function(item){
    	var setup = this.getSetup(item.code);

        var jsonString = JSON.stringify(setup);

        JSonUtil.create(item.fileName, jsonString,
                      function(){
                      
                      
                      alert("save ok");
                      },
                      function(){alert("save error");}
                      );
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
                    var jsonString = JSON.stringify(setup);
                    JSonUtil.save(item.fileName, jsonString,
                                  function(){
                                  
                                  
                                  // If file was created we must try update from server
                                  ModelManager.updateFromServer(item);
                                  
                                  },
                                  function(){alert("save error");}
                                  );
                    },
                    function(){alert("exists error");}
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
