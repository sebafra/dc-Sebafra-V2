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
				"name":"Hotel Jes\u00FAs Mar\u00EDa",
				"id":1,
				"hotelType":"Hotel",
				"extendedView":"false",
				"listItemViewType":"extended",
				"nameLabel":"\u2605 \u2605 \u2605",
				"address":"Almafuerte 177",
				"phoneNumber":3525445888,
				"email":"info@hoteljesusmaria.com.ar"
			},
			{
				"type":"hotel",
				"name":"Hotel La Caba\u00F1a",
				"id":2,
				"hotelType":"Hotel",
				"extendedView":"false",
				"listItemViewType":"extended",
				"nameLabel":"",
				"address":"Ruta 9 m. 754",
				"phoneNumber":3525420563,
				"email":"lacabana@coop5.com.ar"
			},
			{
				"type":"hotel",
				"name":"Hotel Napole\u00F3n",
				"id":3,
				"hotelType":"Hotel",
				"extendedView":"false",
				"listItemViewType":"extended",
				"nameLabel":"\u2605 \u2605 \u2605",
				"address":"Espa\u00F1a 675",
				"phoneNumber":3525401700,
				"email":"info@napoleononline.com.ar "
			},
			{
				"type":"hotel",
				"name":"Residencial Santa Rita",
				"id":4,
				"hotelType":"Residencial",
				"extendedView":"false",
				"listItemViewType":"extended",
				"nameLabel":"",
				"address":"Gregorio Carreras 255",
				"phoneNumber":3525423752,
				"email":""
			},
			{
				"type":"hotel",
				"name":"Apart Libertador",
				"id":5,
				"hotelType":"Apart",
				"extendedView":"false",
				"listItemViewType":"extended",
				"nameLabel":"",
				"address":"Tucum\u00E1n 660",
				"phoneNumber":3525425502,
				"email":""
			},
			{
				"type":"hotel",
				"name":"Posada Henen",
				"id":6,
				"hotelType":"Posada",
				"extendedView":"false",
				"listItemViewType":"extended",
				"nameLabel":"",
				"address":"Bv. Ag\u00FCero 67",
				"phoneNumber":3525445960,
				"email":"posada_henen@outlook.com"
			},
			{
				"type":"hotel",
				"name":"Benzoni Posada SPA",
				"id":7,
				"hotelType":"Hotel",
				"extendedView":"false",
				"listItemViewType":"extended",
				"nameLabel":"",
				"address":"La Toma 830",
				"phoneNumber":3525424686,
				"email":"info@benzoniposadaspa.com.ar"
			},
			{
				"type":"hotel",
				"name":"Residencial La Misionera",
				"id":8,
				"hotelType":"Residencial",
				"extendedView":"false",
				"listItemViewType":"extended",
				"nameLabel":"",
				"address":"",
				"phoneNumber":null,
				"email":""
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
				"description":"<p>4 Estaciones es un festival gratuito, que se realiza en la plaza principal de Jes\u00FAs Mar\u00EDa, desagregado a lo largo del a\u00F1o. Son cuatro fechas que se desarrollan en la segunda mitad del verano, hacia fines de febrero o principios de marzo, en oto\u00F1o, por lo general en mayo, invierno, en agosto o primeros d\u00EDas de septiembre y primavera, en el mes de noviembre. Tiene por objeto romper la fuerte estacionalidad que genera el Festival de Doma y Folclore.</p> <p>Por este han pasado distintos artistas variando la propuesta de acuerdo a los g\u00E9neros. Ejemplo de esto son: </p><ul> <li>I\u00F1aki Urlezaga y el Ballet Concierto. </li> <li>Murga Agarrate Catalina (Uruguay) </li> <li>Ra\u00FAl Lavi\u00E9.</li> <li>Caligaris, La Pata de la Tuerta y Circo Z</li> <li>Ch\u00E9bere. Retorno con el Turco Julio</li> <li>Los Manseros Santiague\u00F1os</li> <li>Baglieto y Vitale</li> <li>Cacho Buenaventura</li> </ul> <p>Adem\u00E1s de estos artistas, la grilla siempre se compone de artistas locales con lo que se refuerza su desarrollo y proyecci\u00F3n.</p>",
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
				"description":"<p>Es un festival de 2 d\u00EDas donde el Rock se adue\u00F1a del Anfiteatro Jos\u00E9 Hern\u00E1ndez, el predio donde se realiza el Festival de Doma y Folclore de Jes\u00FAs Mar\u00EDa. Se desarrolla el fin de semana largo de octubre, s\u00E1bado y domingo. En su primera edici\u00F3n pasaron Estelares, Kapanga, Catupecu Machu, Las Pastillas del Abuelo, La Vela Puerca y Las Pelotas. Es un festival de gran magnitud que promete.</p>",
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
				"description":"<p>En Jes\u00FAs Mar\u00EDa se han desarrollado carnavales desde los inicios de la villa. Han ido variando en el tiempo. Hoy es una fiesta popular y gratuita donde participan comparsas, carrozas y disfrazados de la zona. </p>",
				"image1":"carnaval1.jpg",
				"image2":"carnaval2.jpg"
			}
			,
			{
				"type":"otherEvent",
				"name":"Jes\u00FAs Mar\u00EDa Gourmet",
				"id":"4",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>Es un torneo de cocina clasificatorio para el C\u00F3rdoba Cocina y al Torneo Argentino de Chefs. Participan establecimientos gastron\u00F3micos del Norte con un men\u00FA de tres pasos elaborado en dos horas y presentado al jurado. Atento el p\u00FAblico sigue el desarrollo del evento en las tribunas con una vista inmejorable del proceso de elaboraci\u00F3n de estos maestros de la cocina. Su fecha es variable ya que se encuentra supeditada a los campeonatos superiores pero se estima para los primeros d\u00EDas de Junio.</p>",
				"image1":"gourmet1.jpg",
				"image2":"gourmet2.jpg"
			}
			,
			{
				"type":"otherEvent",
				"name":"Otros Encuentros",
				"id":"5",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>Encuentro de Pintores Paisajistas. Abril.</p><p>C\u00F3rdoba Jazz Camp. Segunda semana de vacaciones de Julio.</p><p>Festival de Destrezas Gauchas. Agosto.</p><p>Encuentro de Coros. Noviembre.</p>",
				"image1":"otroevento1.jpg",
				"image2":"otroevento2.jpg"
			}

			],
			labelPlural: "Eventos",
			labelSingular: "Evento",
			type: "otherEvent"
		},
		attraction:{
			items: [
			{
				"multiLanguage":"yes",
				"type":"attraction",
				"name":"Estancia Jesu\u00EDtica",
				"name-en":"Jesuit Estancia of Jes\u00FAs Mar\u00EDa",
				"id":"1",
				"extendedView":"true",
				"listItemViewType":"simple",
				"address":"Pedro de O\u00F1ate s/n",
				"phoneNumber":"3525420126",
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
				"multiLanguage":"yes",
				"type":"attraction",
				"name":"Festival de Doma y Folclore",
				"name-en":"Festival of Doma and Folclore",
				"id":"2",
				"extendedView":"true",
				"listItemViewType":"simple",
				"address":"Cleto Pe\u00F1a y Tucum\u00E1n",
				"description":"<p>En mayo de 1965, bajo la imperiosa necesidad de recaudar fondos para solventar la atenci\u00F3n de los ni\u00F1os de las escuelas se propone la idea de realizar un festival de doma. Convencidos de la relevancia que tendr\u00EDa el evento se invita a todas las Cooperadoras de las Escuelas de Jes\u00FAs Mar\u00EDa. Inicialmente se sumaron 10 Cooperadoras, luego se adhirieron otras m\u00E1s hasta conformar la \u0022Uni\u00F3n de Cooperadoras Escolares”. El trabajo de estas voluntades logr\u00F3 llevar adelante con absoluto \u00E9xito el primer festival que se inaugur\u00F3 en enero de 1966. M\u00E1s de 45.000 personas asistieron al evento gaucho. El resultado, una recaudaci\u00F3n que cumpli\u00F3 con creces el objetivo planteado hizo que este sue\u00F1o se convirtiera en el Festival m\u00E1s grande de Am\u00E9rica en su g\u00E9nero, atrayendo en cada edici\u00F3n a m\u00E1s de 400 mil espectadores que viven esta fiesta popular y un sin n\u00FAmero de televidentes y radioescuchas que lo siguen desde sus hogares en todo el pa\u00EDs. Hasta el d\u00EDa de hoy las Cooperadores Escolares siguen llevando adelante el evento y los fondos recaudados se reparten entre las escuelas para sostener la educaci\u00F3n de los ni\u00F1os.</p><p>El principal atractivo es el campeonato de Jineteada, que consiste en un jinete montando un potro que es especialmente preparado a lo largo del a\u00F1o para esta ocasi\u00F3n. Las categor\u00EDas de montas son tres.</p><p>Crina Limpia: En esta categor\u00EDa se puede usar una lonja que va alrededor del pescuezo del animal como \u00FAnico sost\u00E9n fuerte del jinete, qui\u00E9n no puede dejar de trabajar el animal con las espuelas. El tiempo de monta es de 8 segundos.</p><p>La Grupa Sure\u00F1a o Surera: En esta categor\u00EDa no se usan estribos, pero se utiliza un cuero de oveja sujetado por un cinch\u00F3n. El jinete debe sujetar las riendas con una mano y el azote (huasca, talero, etc.) con la otra. El tiempo de monta es de 12 segundos.</p><p>El Basto con Encimera: Aqu\u00ED el hombre no deber\u00E1 perder los estribos ni \u0022charquear\u0022 (tocar al animal con las manos). En las otras categor\u00EDas el charqueo tambi\u00E9n quita puntos. El tiempo de monta es de 15 segundos.</p>",
				"description-en":"<p>In May 1965, parents of school children, seeing the lack of good political measures in the area of Education, thought of having a Doma Festival as a way of raising funds. These persons invited people from other school boards and together they formed the Union of School Boards. Thanks to them, in January 1966 the first Festival was held. More than 45.000 people attended it, and the objective was amply reached.</p><p>The Festival is now the most important festival of its type in America, attracting every January more than 400 thousand spectators, and great TV and radio audience from all over the country. It is, as always, organized by the Union of School Boards, and the raised funds are divided among the schools to help support the education of our children.</p><p>The main attraction is the horseback riding championship, where a rider tries to stay on the back of the horse for a certain amount of time. The horses are specially bred and kept for this activity.</p><p> There are three categories in the competition: </p><ul><li>Crina Limpia: In this category the rider can only use a strip of leather around the horse´s neck for support, while poking the horse´s belly with his heels. Length of the ride: 8 seconds. </li><li>Grupa Sure\u00F1a or Surera: In this category no stirrups can be used, although a skin of sheep is tied to the middle of the horse by a leather strip. The rider has to hold it for support with one hand while with the other holds the whip (called “huasca” or “talero”) Length of the ride: 12 seconds.</li><li>Basto con Encimera: In this one the rider must not lose the stirrups or 'charquear' (To touch the animal with the hands) Length of the ride: 15 seconds.</li></ul>",
				"scheduleOfAttentionWeek":"De martes a domingos y feriados: de 10 a 19",
				"image1":"festival1.jpg",
				"image2":"festival2.jpg",
				"image3":"festival3.jpg",
				"image4":"festival4.jpg",
				"image5":"festival5.jpg"
			}
			,
			{
				"multiLanguage":"yes",
				"type":"attraction",
				"name":"Estaci\u00F3n de Trenes",
				"name-en":"Jesus Maria Train Station",
				"id":"3",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>En 1875 es inaugurado el ferrocarril que une C\u00F3rdoba capital con la localidad santiague\u00F1a de Recreo. La estaci\u00F3n de trenes hace de la ciudad un \u00EDcono importante, como ya lo fuera en la \u00E9poca colonial por estar situada sobre el Camino Real.</p><p>Hoy la Estaci\u00F3n recibe dos trenes de carga semanales y en su explanada se llevan a cabo numerosos espect\u00E1culos art\u00EDsticos de danza, m\u00FAsica, teatro y muestras fotogr\u00E1ficas entre otros.</p>",
				"description-en":"<p>The train line linking the city of Cordoba with the town of Recreo, in Santiago del Estero, started working in 1875. And the Train Station renewed the importance of the town of Jesus Maria, importance it had had back in colonial times for being on the Royal Road to Alto Peru.</p><p>Nowadays the Station sees two cargo trains a week, and every weekend artistic performances, such as music, dancing, theater and photography, on its terrace.</p>",
				"image1":"estacion1.jpg",
				"image2":"estacion2.jpg",
				"image3":"estacion3.jpg"
			}
			,
			{
				"multiLanguage":"yes",
				"type":"attraction",
				"name":"Torre C\u00E9spedes",
				"name-en":"Cespedes Tower",
				"id":"4",
				"extendedView":"true",
				"listItemViewType":"simple",
				"address":"Castulo Pe\u00F1a and Colon streets",
				"phoneNumber":"03525443773",
				"description":"<p>El edificio data de fines del siglo XIX. Se trataba  de la casa de veraneo de Gabriel C\u00E9spedes y su familia. C\u00E9spedes se desempe\u00F1\u00F3 como intendente de la ciudad entre los a\u00F1os 1914 y 1918. La torre fue construida entre los  a\u00F1os 1896 y 1898. Dise\u00F1ada y dirigida por el Ingeniero y Constructor Pedro Busc\u00E1, un espa\u00F1ol que lleg\u00F3 a la Argentina por pedido de su coterr\u00E1neo Juan BialetMass\u00E9. El castillo parte de una base octogonal central y cuatro torres circulares. Est\u00E1 dividido en dos plantas. En el interior de una de las torres se alza la escalera caracol que conduce a una terraza cuyo per\u00EDmetro es cerrado. Fue declarada de inter\u00E9s Municipal y componente del patrimonio arquitect\u00F3nico y urban\u00EDstico de Jes\u00FAs Mar\u00EDa en el a\u00F1o 1995.</p>",
				"description-en":"<p>It was the summer residence of the Cespedes family by the end of the 19th century. Mr. Gabriel Cespedes was Major of the City between 1914 and 1918. The tower was designed and built by the Spanish engineer and constructor Pedro Busc\u00E1 between 1896 and 1898. The base is an octagon with four circular towers attached. A spiral staircase, situated in one of the towers, leads to the second floor and up onto the terrace.</p><p>The tower was declared of Municipal Interest and part of the Architectural Heritage of the City in 1995.</p>",
				"image1":"torre1.jpg",
				"image2":"torre2.jpg",
				"image3":"torre3.jpg"
			}
			,
			{
				"multiLanguage":"yes",
				"type":"attraction",
				"name":"Museo de la Ciudad Luis Biondi",
				"name-en":"Museum of the City “Luis Biondi",
				"id":"5",
				"extendedView":"true",
				"listItemViewType":"simple",
				"address":"Ingeniero Olmos 453",
				"phoneNumber":"03525443773",
				"description":"<p>El 27 de Septiembre de 2012 se Inaugura la Sala de Exposiciones en la Antigua Casa Ghersi. Esta Casona de estilo franc\u00E9s de fines de siglo XIX, construida como casa de veraneo, alberga la sala que recibe exposiciones pict\u00F3ricas todos los meses. La restauraci\u00F3n de la casa, en su tramo final, tiene por objeto la instalaci\u00F3n del Museo de la Ciudad que se encuentra en proceso de conformaci\u00F3n.</p>",
				"description-en":"<p>It was inaugurated on September 27th 2012 in the Old Ghersi House. This place was built in the French style in the late 19th century as a summer home, and it had been practically abandoned of late. The local Municipality started the restoration works with the aim of settling there the Museum of the City. It now holds monthly exhibits of art.</p>",
				"scheduleOfAttentionWeek":"Jueves a domingos: de 17 a 21",
				"image1":"museo1.jpg",
				"image2":"museo2.jpg",
				"image3":"museo3.jpg",
				"image4":"museo4.jpg"
			}
			,
			{
				"multiLanguage":"yes",
				"type":"attraction",
				"name":"Capilla Kronfus",
				"name-en":"Kronfus Chapel",
				"id":"6",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>Obra de inspiraci\u00F3n del Barroco Colonial dise\u00F1ada por el ingeniero y arquitecto Juan Kronfuss, que junto al Hospital Vicente Ag\u00FCero datan del a\u00F1o 1925. Kronfuss naci\u00F3 en Bulgaria y lleg\u00F3 a Argentina en 1910. Su trabajo intenta rescatar la importancia del desarrollo de una arquitectura local vinculada a los materiales de la zona y no a la importaci\u00F3n de mercader\u00EDas y dise\u00F1os for\u00E1neos. Adem\u00E1s de esta capilla, en Jes\u00FAs Mar\u00EDa destacamos “El Cortijo” la casa de la familia Ag\u00FCero construida en 1930 que se encuentra en el barrio Los Nogales (propiedad privada).</p>",
				"description-en":"<p>This neo-colonial baroque chapel was designed by engineer and architect Juan Kronfus and, along with Vicente Ag\u00FCero Hospital, built in 1925. Juan Kronfus was born in Bulgary but moved to Argentina in 1910. He dedicated his efforts to the study of the architecture of Colonial Barroque in Latin America and the importance of using local materials against imported goods.</p><p>Kronfus designed as well the residence of Vicente Ag\u00FCero´s family, called “El Cortijo” in Los Nogales suburb, built in 1930. (Not open to visit)</p>",
				"scheduleOfAttentionWeek":"Se la puede vistar en horario de misa: mi\u00E9rcoles, s\u00E1bados y domingos a las 18:30 hs.",
				"image1":"capilla1.jpg",
				"image2":"capilla2.jpg"
			}
			,
			{
				"multiLanguage":"yes",
				"type":"attraction",
				"name":"Parrillas de Jes\u00FAs Mar\u00EDa",
				"name-en":"Parrillas of Jes\u00FAs Mar\u00EDa",
				"id":"7",
				"extendedView":"true",
				"listItemViewType":"simple",
				"description":"<p>Las parrillas se han ganado el mote de \u0022el mejor asado del mundo\u0022. M\u00E1s de cincuenta a\u00F1os de asado compartido en tablas \u0022de a dos\u0022 donde los cortes llegan uno a uno en su punto justo. Se degustan entre 10 y 15 piezas coronadas con los mejores vinos de la Argentina. Los cuadriles y los lomitos de cerdo son tan famosos como los mejores churrascos de la pampa h\u00FAmeda. Una conjunci\u00F3n de carne sabrosa y tierna con un m\u00E9todo especialmente pensado para la misma. Las pasturas y suelos del norte cordob\u00E9s le dan a las carnes gran sabor, pero si los animales son grandes sus carnes se vuelven duras. Por eso se consumen animales peque\u00F1os que a\u00FAn tienen un sabor intenso y guardan la ternura en sus fibras. As\u00ED, los cortes son todos peque\u00F1os, por lo que comer una parrillada completa en Jes\u00FAs Mar\u00EDa es una suerte de degustaci\u00F3n de diferentes cortes de vaca, cerdo y cabrito.</p><p>Asimismo la cocina gourmet se ha instalado en la ciudad para decir que no todo es asado. Es una opci\u00F3n novedosa y creativa que va de la mano de j\u00F3venes autores que desarrollan su arte con gran pasi\u00F3n. Premios como Mejor Plato de Vanguardia (Inocencio), Mejor Plato Regional (El Museo Resto Bar) y un puesto para competir en el Torneo Argentino de Chef (La Torgnole Gastronomique) atestiguan el desarrollo de alta calidad de estos establecimientos que participan constantemente en competencias, demostraciones y clases en centros de ense\u00F1anza de C\u00F3rdoba.</p>",
				"description-en":"<p>The Parrilla restaurants are of great importance in Jesus Maria and the surrounding region, offering the visitor a specially served treat. We boast of serving “the best asado in the world”</p><p>People sit at a table with a wooden plate between them. The meat is brought perfectly cooked, in small pieces, so nothing gets cold: beef, pork and kid in its different cuts and servings, accompanied by French fries topped with scrambled eggs or garden salads. The best wines of the country are available as well.</p><p>The gourmet cuisine has landed in the region to prove that not everything is asado. Young and daring new Chefs offer creative and delicious dishes and desserts.</p><p>Awards to The Best Vanguard Dish (Inocencio Resto), Best Regional Dish (El Museo Resto-Bar), and a chance to participate in the Argentinian Tournament for Chefs (La Torgnole Gastronomique) show the high developement and quality of these restaurants.</p>",
				"image1":"parrillada1.jpg",
				"image2":"parrillada2.jpg",
				"image3":"parrillada3.jpg",
				"image4":"parrillada4.jpg",
				"image5":"parrillada5.jpg"
			}
			],
			labelPlural: "Atracciones",
			labelSingular: "Atracci\u00F3n",
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
		service:{
			items: [
			{
				"type":"service",
				"name":"Banco Galicia",
				"id":1,
				"hotelType":"Banco",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Tucum\u00E1n 570",
				"phoneNumber":3525427605
			},
			{
				"type":"service",
				"name":"Banco Macro",
				"id":2,
				"hotelType":"Banco",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"San Mart\u00EDn 544",
				"phoneNumber":3525420840
			},
			{
				"type":"service",
				"name":"Banco Naci\u00F3n",
				"id":3,
				"hotelType":"Banco",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Col\u00F3n 82",
				"phoneNumber":3525420006
			},
			{
				"type":"service",
				"name":"Banco Provincia de C\u00F3rdoba",
				"id":5,
				"hotelType":"Banco",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"San Mart\u00EDn 498",
				"phoneNumber":3525420226
			},
			{
				"type":"service",
				"name":"Banco Santander R\u00EDo",
				"id":6,
				"hotelType":"Banco",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Col\u00F3n 26",
				"phoneNumber":3525423856
			},
			{
				"type":"service",
				"name":"Cajero Supermercado Disco",
				"id":7,
				"hotelType":"Banco",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Ingeniero Olmos 43",
				"phoneNumber":null
			},
			{
				"type":"service",
				"name":"Cajero Supermercado Mariano Max",
				"id":8,
				"hotelType":"Banco",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Italia 363",
				"phoneNumber":null
			},
			{
				"type":"service",
				"name":"Petrobras",
				"id":10,
				"hotelType":"Estaci\u00F3n de Servicio",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Ruta 9 km. 746",
				"phoneNumber":null
			},
			{
				"type":"service",
				"name":"Petrol",
				"id":11,
				"hotelType":"Estaci\u00F3n de Servicio",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Pedro J. Fr\u00EDas y Ameghino",
				"phoneNumber":3525443446
			},
			{
				"type":"service",
				"name":"Shell",
				"id":12,
				"hotelType":"Estaci\u00F3n de Servicio",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Ruta 9 y Av San Mart\u00EDn",
				"phoneNumber":null
			},
			{
				"type":"service",
				"name":"YPF Centro",
				"id":14,
				"hotelType":"Estaci\u00F3n de Servicio",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Gral. Cabrera 17",
				"phoneNumber":3525401160
			},
			{
				"type":"service",
				"name":"YPF El Cruce",
				"id":15,
				"hotelType":"Estaci\u00F3n de Servicio",
				"extendedView":"false",
				"listItemViewType":"extended",
				"nameLabel":"GNC",
				"address":"Ruta 9 y Corrientes",
				"phoneNumber":3525422294
			},
			{
				"type":"service",
				"name":"Jema Gas",
				"id":15,
				"hotelType":"Estaci\u00F3n de Servicio",
				"extendedView":"false",
				"listItemViewType":"extended",
				"nameLabel":"GNC",
				"address":"Ruta 9 km 752",
				"phoneNumber":3525422108
			},
			{
				"type":"service",
				"name":"Jema Gas II",
				"id":15,
				"hotelType":"Estaci\u00F3n de Servicio",
				"extendedView":"false",
				"listItemViewType":"extended",
				"nameLabel":"GNC",
				"address":"Pedro J. Fr\u00EDas 1056",
				"phoneNumber":null
			},
			{
				"type":"service",
				"name":"Farmacia Daniotti",
				"id":16,
				"hotelType":"Farmacia",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Vicente Aguero 336",
				"phoneNumber":3525400200
			},
			{
				"type":"service",
				"name":"Farmacia Flores",
				"id":18,
				"hotelType":"Farmacia",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Italia esq. Ameghino",
				"phoneNumber":3525425274
			},
			{
				"type":"service",
				"name":"Hospital Vicente Aguero",
				"id":19,
				"hotelType":"Hospital",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525426703
			},
			{
				"type":"service",
				"name":"America",
				"id":20,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525444000
			},
			{
				"type":"service",
				"name":"Central",
				"id":22,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525445100
			},
			{
				"type":"service",
				"name":"Col\u00F3n",
				"id":24,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525444900
			},
			{
				"type":"service",
				"name":"Jes\u00FAs Mar\u00EDa",
				"id":29,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Vicente Aguero 336",
				"phoneNumber":3525400200
			},
			{
				"type":"service",
				"name":"Los Hermanos",
				"id":31,
				"hotelType":"Taxis y Remis",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"",
				"phoneNumber":3525401101
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
				"name":"Informaci\u00F3n del Festival",
				"name-en":"Festival Information",
				"id":"1",
				"extendedView":"true",
				"listItemViewType":"simple",
				"address":"Cleto Perez y Tucuman",
				"description":"<p>En mayo de 1965, bajo la imperiosa necesidad de recaudar fondos para solventar la atenci\u00F3n de los ni\u00F1os de las escuelas se propone la idea de realizar un festival de doma. Convencidos de la relevancia que tendr\u00EDa el evento se invita a todas las Cooperadoras de las Escuelas de Jes\u00FAs Mar\u00EDa. Inicialmente se sumaron 10 Cooperadoras, luego se adhirieron otras m\u00E1s hasta conformar la \u0022Uni\u00F3n de Cooperadoras Escolares”. El trabajo de estas voluntades logr\u00F3 llevar adelante con absoluto \u00E9xito el primer festival que se inaugur\u00F3 en enero de 1966. M\u00E1s de 45.000 personas asistieron al evento gaucho. El resultado, una recaudaci\u00F3n que cumpli\u00F3 con creces el objetivo planteado hizo que este sue\u00F1o se convirtiera en el Festival m\u00E1s grande de Am\u00E9rica en su g\u00E9nero, atrayendo en cada edici\u00F3n a m\u00E1s de 400 mil espectadores que viven esta fiesta popular y un sin n\u00FAmero de televidentes y radioescuchas que lo siguen desde sus hogares en todo el pa\u00EDs. Hasta el d\u00EDa de hoy las Cooperadores Escolares siguen llevando adelante el evento y los fondos recaudados se reparten entre las escuelas para sostener la educaci\u00F3n de los ni\u00F1os.</p><p>El principal atractivo es el campeonato de Jineteada, que consiste en un jinete montando un potro que es especialmente preparado a lo largo del a\u00F1o para esta ocasi\u00F3n. Las categor\u00EDas de montas son tres.</p><p>Crina Limpia: En esta categor\u00EDa se puede usar una lonja que va alrededor del pescuezo del animal como \u00FAnico sost\u00E9n fuerte del jinete, qui\u00E9n no puede dejar de trabajar el animal con las espuelas. El tiempo de monta es de 8 segundos.</p><p>La Grupa Sure\u00F1a o Surera: En esta categor\u00EDa no se usan estribos, pero se utiliza un cuero de oveja sujetado por un cinch\u00F3n. El jinete debe sujetar las riendas con una mano y el azote (huasca, talero, etc.) con la otra. El tiempo de monta es de 12 segundos.</p><p>El Basto con Encimera: Aqu\u00ED el hombre no deber\u00E1 perder los estribos ni \u0022charquear\u0022 (tocar al animal con las manos). En las otras categor\u00EDas el charqueo tambi\u00E9n quita puntos. El tiempo de monta es de 15 segundos.</p>",
				"description-en":"<p>In May 1965, parents of school children, seeing the lack of good political measures in the area of Education, thought of having a Doma Festival as a way of raising funds. These persons invited people from other school boards and together they formed the Union of School Boards. Thanks to them, in January 1966 the first Festival was held. More than 45.000 people attended it, and the objective was amply reached.</p><p>The Festival is now the most important festival of its type in America, attracting every January more than 400 thousand spectators, and great TV and radio audience from all over the country. It is, as always, organized by the Union of School Boards, and the raised funds are divided among the schools to help support the education of our children.</p><p>The main attraction is the horseback riding championship, where a rider tries to stay on the back of the horse for a certain amount of time. The horses are specially bred and kept for this activity.</p><p> There are three categories in the competition: </p><ul><li>Crina Limpia: In this category the rider can only use a strip of leather around the horse´s neck for support, while poking the horse´s belly with his heels. Length of the ride: 8 seconds. </li><li>Grupa Sure\u00F1a or Surera: In this category no stirrups can be used, although a skin of sheep is tied to the middle of the horse by a leather strip. The rider has to hold it for support with one hand while with the other holds the whip (called “huasca” or “talero”) Length of the ride: 12 seconds.</li><li>Basto con Encimera: In this one the rider must not lose the stirrups or 'charquear' (To touch the animal with the hands) Length of the ride: 15 seconds.</li></ul>",
				"xtraInfo":"<strong>Entradas Anticipadas</strong><br>AUTOENTRADA: www.autoentrada.com<br>C\u00F3rdoba: Patio Olmos<br>Nuevo Centro Shopping<br>C\u00F3rdoba Shopping<br>Shopping Paseo Rivera<br>Carlos Paz: Teatro Zorba<br>Villa Allende Shopping<br>Boleter\u00EDas del Anfiteatro del Festival<br>Informes del Festival: Tel. 03525-605005",
				"image1":"festival1.jpg",
				"image2":"festival2.jpg",
				"image3":"festival3.jpg",
				"image4":"festival4.jpg",
				"image5":"festival5.jpg"
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
		},
		restaurant:{
			items: [
			{
				"type":"restaurant",
				"name":"Parrilla Don Arist\u00F3bulo",
				"id":1,
				"hotelType":"Parrilla",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Ruta 9 km. 754",
				"phoneNumber":3525442260,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Rancho el Cruce",
				"id":2,
				"hotelType":"Parrilla",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Corrientes y Ruta 9",
				"phoneNumber":3525429989,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Cayoba",
				"id":3,
				"hotelType":"Parrilla",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Almafuerte y Pedro J. Fr\u00EDas",
				"phoneNumber":3525422713,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Parrilla El Pipi",
				"id":4,
				"hotelType":"Parrilla",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Ameghino 543",
				"phoneNumber":3543442555,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"La Parrilla de Julio",
				"id":5,
				"hotelType":"Parrilla",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Almafuerte y Belgrano",
				"phoneNumber":3525420347,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"El Ceibo",
				"id":6,
				"hotelType":"Parrilla",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Pedro J. Fr\u00EDas 1457",
				"phoneNumber":3525400531,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"La Huella",
				"id":7,
				"hotelType":"Parrilla",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Tucum\u00E1n 144",
				"phoneNumber":null,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Inocencio",
				"id":8,
				"hotelType":"Restaurante",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"C\u00F3rdoba 750",
				"phoneNumber":3525401940,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Camino Real",
				"id":9,
				"hotelType":"Restaurante",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Pedro de O\u00F1ate s/n",
				"phoneNumber":null,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Waterloo",
				"id":10,
				"hotelType":"Restaurante",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Espa\u00F1a y Ameghino",
				"phoneNumber":3525606966,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"El Padrino",
				"id":11,
				"hotelType":"Restaurante",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"9 de Julio y Tucum\u00E1n ",
				"phoneNumber":3525426295,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Ventimiglia",
				"id":12,
				"hotelType":"Restaurante",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"San Luis y Pedro J. Fr\u00EDas",
				"phoneNumber":3525425410,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"La Torgnole",
				"id":13,
				"hotelType":"Restaurante",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Ruta E-66 Km 12",
				"phoneNumber":3525546946,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Por Ah\u00ED",
				"id":14,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Julio A. Roca y C\u00F3rdoba",
				"phoneNumber":null,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Mora",
				"id":15,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"C\u00E1stulo Pe\u00F1a 537",
				"phoneNumber":3525453397,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Roca",
				"id":16,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Julio A. Roca 89",
				"phoneNumber":3525445990,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Mr. Wine",
				"id":17,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Z\u00EDpoli 176",
				"phoneNumber":3525401310,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Rep\u00FAblica Carancho",
				"id":18,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"C\u00E1stulo Pe\u00F1a",
				"phoneNumber":null,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Kariba",
				"id":19,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Tucum\u00E1n esq. John Kennedy",
				"phoneNumber":3525423202,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"El Paso",
				"id":20,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Cleto Pe\u00F1a y Tucum\u00E1n",
				"phoneNumber":3525442244,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Neo's",
				"id":21,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"P\u00EDo Le\u00F3n 50",
				"phoneNumber":3525444344,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Victorino",
				"id":22,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Tucum\u00E1n y Julio A. Roca",
				"phoneNumber":3525400614,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Aladino",
				"id":23,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Tucum\u00E1n 440",
				"phoneNumber":3525423760,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Dolomiti",
				"id":24,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Tucum\u00E1n 745",
				"phoneNumber":3525605360,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"La Estaci\u00F3n",
				"id":25,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"C\u00F3rdoba 384",
				"phoneNumber":3525445555,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Puerto Mar\u00EDa",
				"id":26,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"C\u00F3rdoba 326",
				"phoneNumber":352544626,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Don Pepe",
				"id":27,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Delf\u00EDn D\u00EDaz y Tucum\u00E1n",
				"phoneNumber":null,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Betos",
				"id":28,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Tucum\u00E1n 140",
				"phoneNumber":3525426565,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"4 Elementos",
				"id":29,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Jhon Kennedy y Tucum\u00E1n",
				"phoneNumber":null,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Chihuahua Charlie",
				"id":30,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"C\u00E1stulo Pe\u00F1a y Jhon Kennedy",
				"phoneNumber":3525426165,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"Las Mar\u00EDas (Boliche)",
				"id":31,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Camino a Ascochinga",
				"phoneNumber":null,
				"email":""
			},
			{
				"type":"restaurant",
				"name":"La Nueva F\u00E1brica",
				"id":32,
				"hotelType":"Bar | Resto",
				"extendedView":"false",
				"listItemViewType":"extended",
				"address":"Julio A. Roca 185",
				"phoneNumber":3525442440,
				"email":""
			}
			],
			labelPlural: "Gastronom\u00EDa",
			labelSingular: "Gastronom\u00EDa",
			type: "restaurant"
		},
		cronograma:{
			items: [
			{
				"type":"cronograma",
				"name":"Viernes 10",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Los Nocheros<br>Alma de Luna<br>Carlos S\u00E1nchez “El Tucu”<br>Jessica Benavidez<br>Juli\u00E1n Burgos<br>Acto Inaugural",
				"ticketGeneral":"$70",
				"ticketOldMan":"$40",
				"ticketHigh":"$170",
				"ticketLow":"$150",
				"ticketKids":"gratis"
			}
			,
			{
				"type":"cronograma",
				"name":"S\u00E1bado 11",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Nacho y Daniel<br>Los Huayras<br>Por Siempre Tucu<br>Los de Alberdi<br>Silvia Lallana<br>Los de Cabrera<br>Grupo Im\u00E1n<br>Claudio Acosta<br>4x4 y Pastor Luna<br>Flaco Pe\u00F1a<br>Desfile de Emprendados",
				"ticketGeneral":"$110",
				"ticketOldMan":"$40",
				"ticketHigh":"$90",
				"ticketLow":"$70",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Domingo 12",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Sergio Galleguillo y la Fiesta Chayera<br>Raly Barriouevo<br>Pi\u00F1\u00F3n Fijo<br>Las Valijas | Ambo\u00E9<br>Gisela Santa Cruz<br>Jos\u00E9 Galante<br>Pe\u00F1eros<br>Desfile 'La Uni\u00F3n de los pueblos'<br>2° Campeonato Nacional de Destrezas Gauchas",
				"ticketGeneral":"$80",
				"ticketOldMan":"$40",
				"ticketHigh":"$100",
				"ticketLow":"$80",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Lunes 13",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Los Tekis<br>Nestor Garnica<br>Tru-la-la | La Cantada<br>5 Sentidos<br>Los Izkierdos de la Cueva<br>Los Trajinantes<br>Ganador Pe\u00F1a 'El Aljibe'<br>Juegos Gauchos y Rastr\u00EDn",
				"ticketGeneral":"$80",
				"ticketOldMan":"$40",
				"ticketHigh":"$150",
				"ticketLow":"$130",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Martes 14",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Chaque\u00F1o Palavecino<br>Cacho Buenaventura<br>Guitarreros | La Callejera<br>Juan Bautista<br>Voces de Provincia<br>Cristian Quiroga<br>El Chofer del Chamam\u00E9 y su conjunto<br>Vanina y su Folklore<br>Tropillas Entabladas",
				"ticketGeneral":"$100",
				"ticketOldMan":"$40",
				"ticketHigh":"$200",
				"ticketLow":"$180",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Mi\u00E9rcoles 15",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Le\u00F3n Gieco<br>D\u00FAo Coplanacu<br>La Copla<br><Los del Suqu\u00EDa<br>Leandro Lovato<br>Matacos<br>Senderos<br>Tropillas Entabladas",
				"ticketGeneral":"$80",
				"ticketOldMan":"$40",
				"ticketHigh":"$140",
				"ticketLow":"$120",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Jueves 16",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Abel Pintos<br>Fabricio Rodriguez<br>Almakanto<br>Cielo Tierra<br>Brisas del Norte<br>Chango Ju\u00E1rez<br>Los Infernales<br>Delegaci\u00F3n de Entre R\u00EDos<br>Los Surcos<br>Exhibici\u00F3n de Pato (Gendarmer\u00EDa Nacional)",
				"ticketGeneral":"$100",
				"ticketOldMan":"$40",
				"ticketHigh":"$200",
				"ticketLow":"$180",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Viernes 17",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Soledad<br>Jairo<br>Los Caligaris<br>La Huella<br>Murmullos<br>Los Legales<br>Ariel Rojas<br>Ana Rodriguez<br>Camperada",
				"ticketGeneral":"$90",
				"ticketOldMan":"$40",
				"ticketHigh":"$150",
				"ticketLow":"$130",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"S\u00E1bado 18",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Los Manseros Santiague\u00F1os<br>Carabajalazo<br>Do\u00F1a Jovita<br>Simplemente Los Cantores<br>Mario Alvarez Quiroga<br>Negro Ferreyra<br>Los Dioses del Chamam\u00E9<br>Paola Gudi\u00F1o<br>Mar\u00EDa Luz<br>Chango Coplero<br>C\u00E9sar Lagos<br>Camperada",
				"ticketGeneral":"$110",
				"ticketOldMan":"$40",
				"ticketHigh":"$150",
				"ticketLow":"$130",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Domingo 19",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Luciano Pereyra<br>Facundo Toro<br>Los Caldenes<br>Cuervos del Malambo<br>Los Quilme\u00F1os<br>Kmila Reynoso<br>Final del Campeonato Nacional de Jineteada",
				"ticketGeneral":"$70",
				"ticketOldMan":"$40",
				"ticketHigh":"$150",
				"ticketLow":"$130",
				"ticketKids":"$20"
			}
			,
			{
				"type":"cronograma",
				"name":"Lunes 20",
				"id":"1",
				"extendedView":"false",
				"listItemViewType":"cronograma",
				"description":"Banda XXI | La Fiesta<br>Espect\u00E1culo de campo con:<br>18 Tropillas<br>Campeonato Nacional de Jineteada<br>75 jineteadas<br>6 montas especiales de Jinetes de la Patria por noche",
				"ticketGeneral":"$70",
				"ticketOldMan":"$40",
				"ticketHigh":"$150",
				"ticketLow":"$130",
				"ticketKids":"$20"
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
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":1,
				"name":"Beltrame Hugo Jos\u00E9",
				"address":"M. Moreno (n) 225",
				"phoneNumber":3525426950,
				"celNumber":null,
				"hotelType":"2 sgl",
				"garage":"true",
				"aditionalInfo":"A compartir / vent. de techo / TV cable / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":2,
				"name":"Lloubell Juliana",
				"address":"Espa\u00F1a 216",
				"phoneNumber":3525445584,
				"celNumber":3525644479,
				"hotelType":"2 sgl. ",
				"garage":"",
				"aditionalInfo":"Dto. Completo/ventiladores/cocina/heladera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":3,
				"name":"Su\u00E1rez, Lidia",
				"address":"C\u00E1rcano 508 Dpto 3",
				"phoneNumber":3525443530,
				"celNumber":3525646082,
				"hotelType":"1 mat",
				"garage":"",
				"aditionalInfo":"Para compartit -  patio con asador - ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":4,
				"name":"Avalos, Diana Teresita",
				"address":"Florencia 485",
				"phoneNumber":3525445949,
				"celNumber":3525640524,
				"hotelType":"2 sgl",
				"garage":"true",
				"aditionalInfo":"Para compratir - Ventiladores - Patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":5,
				"name":"Angulo, N\u00E9lida",
				"address":"Av. Miguel Juarez 939",
				"phoneNumber":3525400413,
				"celNumber":3525455249,
				"hotelType":"2 sgl",
				"garage":"",
				"aditionalInfo":"Dpto completo entrada para auto- Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":6,
				"name":"Mendoza, Rosa",
				"address":"Av. Miguel Ju\u00E1rez 874",
				"phoneNumber":3525443542,
				"celNumber":null,
				"hotelType":"1 mat",
				"garage":"true",
				"aditionalInfo":"Para Compartir - Ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":7,
				"name":"Mendoza, Rosa",
				"address":"Av. Miguel Ju\u00E1rez 874",
				"phoneNumber":3525443542,
				"celNumber":null,
				"hotelType":"2 sgl",
				"garage":"true",
				"aditionalInfo":"Dpto completo - Ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":8,
				"name":"Mendoza, Rosa",
				"address":"Av. Miguel Ju\u00E1rez 874",
				"phoneNumber":3525443542,
				"celNumber":null,
				"hotelType":"2 sgl",
				"garage":"true",
				"aditionalInfo":"Dpto completo - Ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":9,
				"name":"Flores, Ofelia",
				"address":"Santiago del Estero 1134",
				"phoneNumber":3525445696,
				"celNumber":null,
				"hotelType":"2 sgl.",
				"garage":"",
				"aditionalInfo":"Dpto completo - Patio - Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":10,
				"name":"Angulo Nora del Valle",
				"address":"Indepencia 1325",
				"phoneNumber":3525400692,
				"celNumber":null,
				"hotelType":"3 sgl.",
				"garage":"",
				"aditionalInfo":"Monoambiente / ventilador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":11,
				"name":"C\u00E1ceres Ismael",
				"address":"M. Moreno 1090",
				"phoneNumber":3525401327,
				"celNumber":3525435994,
				"hotelType":"3 sgl.",
				"garage":"",
				"aditionalInfo":"Dto. Completo / vent. De techo / patio / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":12,
				"name":"Dalla Costa Beatriz",
				"address":"Mariano Moreno 770",
				"phoneNumber":3525401489,
				"celNumber":null,
				"hotelType":"3 sgl",
				"garage":"",
				"aditionalInfo":"Dto completo/cocina/heladera/anafe/ventilador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":13,
				"name":"Micolini N\u00E9lida",
				"address":"Pedro de O\u00F1ate s/n",
				"phoneNumber":3525422138,
				"celNumber":3525517910,
				"hotelType":"1 sgl./1 cuch.",
				"garage":"",
				"aditionalInfo":"Dto. Completo / aire acond. / entrada de veh\u00EDculos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":14,
				"name":"Alzualde, H\u00E9ctor",
				"address":"Libertad 1388",
				"phoneNumber":3525400334,
				"celNumber":3525481720,
				"hotelType":"1 mat/1sgl",
				"garage":"",
				"aditionalInfo":"Casa a compartir"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":15,
				"name":"Marshall, Paula",
				"address":"Rondeau 1540",
				"phoneNumber":3525442185,
				"celNumber":3525643469,
				"hotelType":"3 sgl",
				"garage":"",
				"aditionalInfo":"Para Compartir - Aire acondicionado - entrada para auto - internet"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":16,
				"name":"Contreras, Sara In\u00E9s",
				"address":"Am\u00E9rica y R\u00EDo Gallegos",
				"phoneNumber":3525443355,
				"celNumber":3525517455,
				"hotelType":"1 mat / 1 sgl ",
				"garage":"",
				"aditionalInfo":"Casa completa -Entrada p/auto con techo - Ventiladores de Techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":17,
				"name":"Alvarez Simona Adelina",
				"address":"Buchardo 1369",
				"phoneNumber":3525400879,
				"celNumber":35254166027,
				"hotelType":"4 sgl",
				"garage":"true",
				"aditionalInfo":"Casa ccompleta - patio - asador - vajilla - vantiladores - TV"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":18,
				"name":"Montero Juan Carlos",
				"address":"Dorrego 849",
				"phoneNumber":3525400459,
				"celNumber":3525536618,
				"hotelType":"2sgl. / 1 cuch.",
				"garage":"true",
				"aditionalInfo":"Dto. Completo / ventilador / TV / Quincho / asador interno"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":19,
				"name":"C\u00FAchero Rodolfo Juan",
				"address":"O'Higgins 58",
				"phoneNumber":3525444492,
				"celNumber":null,
				"hotelType":"4 sgl",
				"garage":"",
				"aditionalInfo":"Wi Fi - Tv "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":20,
				"name":"Arrieta Juana",
				"address":"San Juan 377",
				"phoneNumber":3525400672,
				"celNumber":3525517269,
				"hotelType":"4 sgl.",
				"garage":"",
				"aditionalInfo":"Casa a compartir/ventiladores/living/cocina/heladera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":21,
				"name":"Baz\u00E1n Javier",
				"address":"Potos\u00ED 243",
				"phoneNumber":3525400408,
				"celNumber":null,
				"hotelType":"2 cuch.",
				"garage":"",
				"aditionalInfo":"Dto. Completo - cocina - termotanque - vajilla"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":22,
				"name":"Benedetto Julio C\u00E9sar",
				"address":"Mauricio Yadarola 344",
				"phoneNumber":3525401513,
				"celNumber":null,
				"hotelType":"4 sgl. ",
				"garage":"",
				"aditionalInfo":"Dto. Completo/ventilador/patio interior/TV cable"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":23,
				"name":"Bernabey, Alfredo Antonio",
				"address":"Ameghino 385",
				"phoneNumber":3525605303,
				"celNumber":3525418921,
				"hotelType":"1 mat 2 sgl",
				"garage":"",
				"aditionalInfo":" Casa  a compartir-ventiladores-patio-asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":24,
				"name":"Bustos Luciana Cecilia",
				"address":"Pje. Miguel Ju\u00E1rez 838",
				"phoneNumber":3525444137,
				"celNumber":3525641789,
				"hotelType":"1 matr./ 1 cuch. ",
				"garage":"",
				"aditionalInfo":"Dto. Completo - cocina-comedor-ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":25,
				"name":"Casimiro, Sabino",
				"address":"Am\u00E9rica 1193",
				"phoneNumber":3525400506,
				"celNumber":null,
				"hotelType":"4 sgl",
				"garage":"true",
				"aditionalInfo":"Casa a Compartir- cochera- Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":26,
				"name":"Cisterna, Mar\u00EDa Isabel",
				"address":"Av 28 de Julio 8",
				"phoneNumber":3525401291,
				"celNumber":null,
				"hotelType":"4 sgl",
				"garage":"",
				"aditionalInfo":"Dpto Completo-Ventiladores-Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":27,
				"name":"Coll, Jorge",
				"address":"Av. 28 de Julio 196 esq. C. Pe\u00F1a",
				"phoneNumber":3525427876,
				"celNumber":3525564070,
				"hotelType":"4 sgl.",
				"garage":"",
				"aditionalInfo":"Dto. Completo/cocina comedor "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":28,
				"name":"Correa, Liliana Isabel",
				"address":"Lavalleja 1546",
				"phoneNumber":null,
				"celNumber":3525415465,
				"hotelType":"1 mat 2 sgl",
				"garage":"",
				"aditionalInfo":"Dto Completo- Ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":29,
				"name":"De Almir\u00F3n Marta",
				"address":"25 de Mayo esq. M Moreno 199",
				"phoneNumber":3525421353,
				"celNumber":null,
				"hotelType":"2 cuch./12 sgl/2 matr.",
				"garage":"",
				"aditionalInfo":"Dt.o. completo / ventiladores / entr. para veh\u00EDculos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":30,
				"name":"D'andrea Juan Manuel",
				"address":"Delf\u00EDn D\u00EDaz 247",
				"phoneNumber":3525400492,
				"celNumber":null,
				"hotelType":"1 matr./2 sgl. ",
				"garage":"",
				"aditionalInfo":"Aire acondicionado/patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":31,
				"name":"Di Filippo Pedro",
				"address":"San Juan 917",
				"phoneNumber":3525422271,
				"celNumber":3525641032,
				"hotelType":"2 cuch.",
				"garage":"",
				"aditionalInfo":"Asador / Patio / ventiladores / entr. para veh\u00EDculos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":32,
				"name":"Hildbrand R. Carlos",
				"address":"O'Higgins 35",
				"phoneNumber":3525400027,
				"celNumber":null,
				"hotelType":"4 sgl.",
				"garage":"",
				"aditionalInfo":"Dto. Completo / ventilador de techo "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":33,
				"name":"Lamothe Carlos",
				"address":"Av. Mguel Ju\u00E1rez 954 ",
				"phoneNumber":3525422066,
				"celNumber":3525533533,
				"hotelType":"4 sgl. ",
				"garage":"",
				"aditionalInfo":"Dto. Completo/cocina comedor/heladera/microondas"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":34,
				"name":"Leisa Alejandra",
				"address":"Pasaje Sur 1276",
				"phoneNumber":3525401714,
				"celNumber":3525480040,
				"hotelType":"1 dbl. / 2 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa / ventiladores / 2 patios / TV cable"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":35,
				"name":"Lloubell Juliana",
				"address":"Espa\u00F1a 126",
				"phoneNumber":3525445584,
				"celNumber":3525644479,
				"hotelType":"4 sgl.",
				"garage":"",
				"aditionalInfo":"Dto. Completo/ventiladores/cocina/heladera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":36,
				"name":"Luna Norma",
				"address":"Almafuerte 346",
				"phoneNumber":null,
				"celNumber":3525457760,
				"hotelType":"4 sgl. ",
				"garage":"",
				"aditionalInfo":"Casa completa / ventiladores / entr. para veh\u00EDculos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":37,
				"name":"Luna Oscar",
				"address":"Salta 845",
				"phoneNumber":3525401849,
				"celNumber":3525548275,
				"hotelType":"1 matr./ 2 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa/patio/asador/ventilador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":39,
				"name":"Gonz\u00E1lez, Fernando",
				"address":"Juan truetrueIII 155",
				"phoneNumber":3525400410,
				"celNumber":3525535246,
				"hotelType":"1 mat/ 1 cuch",
				"garage":"",
				"aditionalInfo":"Casa Completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":40,
				"name":"G\u00F3mez, Mariana",
				"address":"Sucre 425 (Dpto Fondo)",
				"phoneNumber":null,
				"celNumber":3525488403,
				"hotelType":"1 mat / 2 sgl",
				"garage":"",
				"aditionalInfo":"Dpto Completo - patio - cochera descubierta - Ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":41,
				"name":"Lovaiza, Norma Beatr\u00EDz",
				"address":"Malvinas Argentinas 1414",
				"phoneNumber":3525422904,
				"celNumber":3525475409,
				"hotelType":"1 mat / 2 sgl",
				"garage":"true",
				"aditionalInfo":"Casa completa - Aires  - NI\u00F1OS NO - Etruecelente estado"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":42,
				"name":"Martinengo, Sebasti\u00E1n",
				"address":"M\u00E9trueico 1150",
				"phoneNumber":3525444321,
				"celNumber":3525562176,
				"hotelType":"2 mat",
				"garage":"true",
				"aditionalInfo":"Dpto Completo -Aire acondicionado - Alarma"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":43,
				"name":"Manzur, Fabiana",
				"address":"Independencia 1020",
				"phoneNumber":3525444771,
				"celNumber":3525453083,
				"hotelType":"2 sgl 1 cuch",
				"garage":"",
				"aditionalInfo":"Casa a Compartir- entrada p/ veh\u00EDculo- Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":44,
				"name":"Acosta, Ernesto",
				"address":"C\u00E1stulo Pe\u00F1a 688 (planta Alta)",
				"phoneNumber":null,
				"celNumber":3525534814,
				"hotelType":"1 mat/ 2 sgl",
				"garage":"",
				"aditionalInfo":"Dpto completo - Ventiladores - Asador - Terraza"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":45,
				"name":"Sarmiento, Alinda Edith",
				"address":"Rioja 520",
				"phoneNumber":3525401792,
				"celNumber":null,
				"hotelType":"1 mat / 2 sgl",
				"garage":"",
				"aditionalInfo":"Para compartir - Entrada para auto - asador - patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":46,
				"name":"Ojeda, Irma",
				"address":"Buchardo 1370",
				"phoneNumber":3525400755,
				"celNumber":3525522793,
				"hotelType":"4 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa - entrada p/ auto - patio - asador - heladera - ventiladores- Aire acondicionado"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":47,
				"name":"Gonzalez Cresp\u00EDn, Carlos",
				"address":"Buenos Aires 437",
				"phoneNumber":3525400722,
				"celNumber":3525487616,
				"hotelType":"2 sgl . / 1 matr.",
				"garage":"",
				"aditionalInfo":"Monoambiente Completo / aire acond. / patio / asador / "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":48,
				"name":"Angelini, Gabriela",
				"address":"Pompeya 722",
				"phoneNumber":3525400745,
				"celNumber":3525458780,
				"hotelType":"5 sgl",
				"garage":"",
				"aditionalInfo":"Casa Completa-aire acondicionado-Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":49,
				"name":"Babiuch, Fabi\u00E1n",
				"address":"Valencia 516",
				"phoneNumber":3525442938,
				"celNumber":3525449810,
				"hotelType":"1 mat-1 sgl 1 cuch",
				"garage":"",
				"aditionalInfo":"Casa Completa- aire acondicionado- entrada p/auto- tv cable"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":50,
				"name":"Borgogno, Daniel",
				"address":"Italia 807",
				"phoneNumber":3525401531,
				"celNumber":3525644975,
				"hotelType":"5 sgl.",
				"garage":"true",
				"aditionalInfo":"Casa completa/patio/asador/cocina"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":51,
				"name":"Brizuela, Elisa",
				"address":"Independencia 990",
				"phoneNumber":3525444836,
				"celNumber":null,
				"hotelType":"1 matr./1 sgl./1 cuch.",
				"garage":"",
				"aditionalInfo":"Casa completa/ventilador/cocina"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":52,
				"name":"Cardozo, Hilda Noem\u00ED",
				"address":"Santiago del Estero 885",
				"phoneNumber":3525606014,
				"celNumber":null,
				"hotelType":"1 sgl/2 cuch.",
				"garage":"",
				"aditionalInfo":"Dt.o. completo / ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":53,
				"name":"C\u00F3rdoba Silvina In\u00E9s",
				"address":"San Lorenzo 240",
				"phoneNumber":3525401389,
				"celNumber":3525535747,
				"hotelType":"1 matr./1 sgl./1 cuch.",
				"garage":"true",
				"aditionalInfo":"Dto completo / con  cochera  "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":54,
				"name":"Criado, Cristina Luisa",
				"address":"San Lorenzo 245",
				"phoneNumber":3525443532,
				"celNumber":3525404748,
				"hotelType":"1 matr. / 3 ind. ",
				"garage":"true",
				"aditionalInfo":"Casa a compartir / ventiladores de techo / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":55,
				"name":"Curto, Jos\u00E9 Luis",
				"address":"Neuqu\u00E9n 1398",
				"phoneNumber":3525400121,
				"celNumber":null,
				"hotelType":"1 mat-1 sgl-1 cuch",
				"garage":"true",
				"aditionalInfo":"Casa a Compartir-quincho-asador-cochera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":56,
				"name":"Fantini, Liliana Beatriz",
				"address":"Ingeniero Olmos 793",
				"phoneNumber":3525401290,
				"celNumber":3525415998,
				"hotelType":"1 matr./ 1 sgl./ 1 cuch.",
				"garage":"",
				"aditionalInfo":"Dto. Completo en P.A./ terraza / asador / TV cable"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":57,
				"name":"Flores, Ofelia",
				"address":"Santiago del Estero 1134",
				"phoneNumber":3525445696,
				"celNumber":3525520684,
				"hotelType":"1 matr./3 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa/asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":58,
				"name":"Gonzalez, Juan Oscar",
				"address":"Sargento Acosta 290",
				"phoneNumber":3525401161,
				"celNumber":null,
				"hotelType":"5 sgl. ",
				"garage":"",
				"aditionalInfo":"Ventilador de techo / TV / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":59,
				"name":"Herrera, Jacinto",
				"address":"La Isla 740",
				"phoneNumber":3525401894,
				"celNumber":null,
				"hotelType":"1 matr./3 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa/cocina/microondas/lavadero/lavarropas"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":60,
				"name":"Moreno, Silvia",
				"address":"Cuba 1288",
				"phoneNumber":3525444380,
				"celNumber":null,
				"hotelType":"1 matr./ 1 sgl. / 1 cuch.",
				"garage":"true",
				"aditionalInfo":"Casa completa / ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":61,
				"name":"Campos Mar\u00EDa Luj\u00E1n",
				"address":"Ant\u00E1rtida Argentina 215",
				"phoneNumber":3525423107,
				"celNumber":3525482414,
				"hotelType":"1 sgl./2 cuch.",
				"garage":"true",
				"aditionalInfo":"Dto. Completo/entrada individual "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":62,
				"name":"Romanutti, Ana Mar\u00EDa",
				"address":"Sarmiento 154",
				"phoneNumber":null,
				"celNumber":3525641358,
				"hotelType":"1 mat- 3 sgl",
				"garage":"true",
				"aditionalInfo":"Dpto Completo-aire acondicionado-quincho-patio-cochera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":63,
				"name":"Salvucci Omar Daniel",
				"address":"Mariano Moreno 131",
				"phoneNumber":3525443968,
				"celNumber":3525642907,
				"hotelType":"2 matr./1 sgl.",
				"garage":"true",
				"aditionalInfo":"Casa a compartit/TV/ventiladores/living/patio/asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":64,
				"name":"Tuli\u00E1n, Gabriela Mar\u00EDa",
				"address":"Almafuerte 352",
				"phoneNumber":null,
				"celNumber":3525529841,
				"hotelType":"1mat-1 cuch-1 sgl",
				"garage":"",
				"aditionalInfo":"Casa a Compartir-entrada p/ autos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":65,
				"name":"Zan\u00F3n, Nancy Elizabeth",
				"address":"Tilcara 288",
				"phoneNumber":3525442198,
				"celNumber":null,
				"hotelType":"1 mat/ 3 sgl",
				"garage":"",
				"aditionalInfo":"Casa Completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":66,
				"name":"Ojeda, Irma",
				"address":"Am\u00E9rica 1122",
				"phoneNumber":3525400755,
				"celNumber":3525522793,
				"hotelType":"1 mat. / 3 sgl.",
				"garage":"true",
				"aditionalInfo":"Casa Completa - Asador - Patio - Ventiladores de Techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":67,
				"name":"Domene, Claudia",
				"address":"Ayacucho 271",
				"phoneNumber":null,
				"celNumber":3525530528,
				"hotelType":"1 mat / 1 sgl / 1 cuch",
				"garage":"true",
				"aditionalInfo":"Dpto completo - asador - patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":68,
				"name":"Rodr\u00EDguez, C\u00E9sar Anibal",
				"address":"Buchardo 1458",
				"phoneNumber":3525445280,
				"celNumber":3525555140,
				"hotelType":"1 mat / 3 sgl",
				"garage":"true",
				"aditionalInfo":"Casa completa - Ventiladores - Lavarropas - Heladera - cocina"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":69,
				"name":"P\u00E1ez, Oscar",
				"address":"Congreso 1151",
				"phoneNumber":3525400597,
				"celNumber":3525643261,
				"hotelType":"5 sgl",
				"garage":"true",
				"aditionalInfo":"Dpto completo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":70,
				"name":"Angulo, Alba Luz",
				"address":"Corrientes 931",
				"phoneNumber":3525442108,
				"celNumber":null,
				"hotelType":"1 mat 2 cuch",
				"garage":"",
				"aditionalInfo":"Casa a Compatir- patio- calef\u00F3n el\u00E9ctrico"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":71,
				"name":"Aguirre, Luis Evaristo",
				"address":"Santiago del Estero 1135",
				"phoneNumber":3525426134,
				"celNumber":null,
				"hotelType":"6 sgl",
				"garage":"true",
				"aditionalInfo":"Casa Completa- cochera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":72,
				"name":"Alvarez Jorge ",
				"address":"Santiago del Estero 971",
				"phoneNumber":null,
				"celNumber":3525554675,
				"hotelType":"3 cuch.",
				"garage":"",
				"aditionalInfo":"Dto. Completo/patio/cocina completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":73,
				"name":"Carrizo, Sergio Eduardo",
				"address":"Rio Gallegos 1432",
				"phoneNumber":3525445486,
				"celNumber":3525441704,
				"hotelType":"1 mat 2 cuch",
				"garage":"",
				"aditionalInfo":"Casa Completa- patio-asador ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":74,
				"name":"Chavarr\u00EDa Graciela",
				"address":"Ram\u00F3n J. C\u00E1rcano 240",
				"phoneNumber":3525444182,
				"celNumber":3525410700,
				"hotelType":"4 sgl./1 cuch.",
				"garage":"true",
				"aditionalInfo":"Dto. Completo / patio / asador /aire acondicionado"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":75,
				"name":"C\u00FAchero Rodolfo Juan",
				"address":"O'Higgins 58",
				"phoneNumber":3525444492,
				"celNumber":null,
				"hotelType":"1 matr./ 1 cuch./2 sgl. ",
				"garage":"",
				"aditionalInfo":"Casa completa / aire acond. / TV cable / Wi Fi / "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":76,
				"name":"Diale Juan Carlos",
				"address":"Espa\u00F1a 832",
				"phoneNumber":null,
				"celNumber":3525647080,
				"hotelType":"1 matr./ 4 sgl. ",
				"garage":"",
				"aditionalInfo":"Dto. Completo/ventilador/TV cable"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":77,
				"name":"Di Filipo, Pedro",
				"address":"Sgo del Estero 1041",
				"phoneNumber":3525422271,
				"celNumber":3525641032,
				"hotelType":"2 sgl- 1 cuch",
				"garage":"true",
				"aditionalInfo":"Dpto Completo-  Cochera- Patio-asador-ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":78,
				"name":"Ledesma, Federico",
				"address":"Sarmiento 154",
				"phoneNumber":null,
				"celNumber":3525641358,
				"hotelType":"2 mat- 1 cuch",
				"garage":"true",
				"aditionalInfo":"Dpto Completo-Aire acondicionado internet wifi. Cochera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":79,
				"name":"L\u00E9gora Luis Alberto",
				"address":"L\u00F3pez y Planes 257",
				"phoneNumber":3525400585,
				"celNumber":3525529190,
				"hotelType":"1 matr. / 4 sgl.",
				"garage":"true",
				"aditionalInfo":"Dto.  compartir/asador/patio/ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":80,
				"name":"L\u00F3pez, Marco Eliseo",
				"address":"Av. 28 de Julio 972",
				"phoneNumber":null,
				"celNumber":3525413096,
				"hotelType":"1 matr./2 cuch.",
				"garage":"",
				"aditionalInfo":"Casa completa/patio/ventiladores/heladera/entrada para autos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":81,
				"name":"Llanos Claudio Ram\u00F3n",
				"address":"La Caba\u00F1a 1798",
				"phoneNumber":3525443976,
				"celNumber":3525406982,
				"hotelType":"1 matr./2 sgl./ 1cuch.",
				"garage":"true",
				"aditionalInfo":"Dto. Completo/ventiladores "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":82,
				"name":"Lloubell Juliana",
				"address":"Espa\u00F1a 126",
				"phoneNumber":3525445584,
				"celNumber":3525644479,
				"hotelType":"6 sgl.",
				"garage":"",
				"aditionalInfo":"Dto. Completo/ventiladores/cocina/heladera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":83,
				"name":"Martini, Margarita",
				"address":"Delf\u00EDn D\u00EDaz 30",
				"phoneNumber":3525421693,
				"celNumber":3525485114,
				"hotelType":"3 cuch.",
				"garage":"",
				"aditionalInfo":"Dto. En muy buen estado"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":84,
				"name":"Micolini N\u00E9lida",
				"address":"Pedro de O\u00F1ate s/n",
				"phoneNumber":3525422138,
				"celNumber":3525517910,
				"hotelType":"6 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa. Entrada para veh\u00EDculos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":85,
				"name":"Montenegro Marcela",
				"address":"Sucre 377",
				"phoneNumber":3525426640,
				"celNumber":null,
				"hotelType":"1 matr./ 4 sgl. ",
				"garage":"true",
				"aditionalInfo":"Casa completa / Buen estado / garage para dos autos / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":86,
				"name":"Noya Patricia Mar\u00EDa",
				"address":"Neuchatel 386",
				"phoneNumber":3525425598,
				"celNumber":3525480412,
				"hotelType":"4 sgl. / 1 matr. ",
				"garage":"true",
				"aditionalInfo":"Casa completa / piscina / ventiladores / patio / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":87,
				"name":"Oyola. Olga Rosa",
				"address":"Espa\u00F1a 1205 (dto. 4)",
				"phoneNumber":null,
				"celNumber":3525542071,
				"hotelType":"2 sgl. / 2 cuch.",
				"garage":"",
				"aditionalInfo":"Dto. Completo/ventiladores/tv cable"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":88,
				"name":"Oz\u00E1n Eduardo Alberto",
				"address":"San Juan 992 (Int. C\u00E9spedes)",
				"phoneNumber":3525424380,
				"celNumber":3525439065,
				"hotelType":"1 matr./4 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa/ventiladoes/anafe"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":89,
				"name":"Raggiotti, Lidia Raquel",
				"address":"Congreso 919",
				"phoneNumber":3525445873,
				"celNumber":3525455690,
				"hotelType":"4 sgl- 1 cuch",
				"garage":"",
				"aditionalInfo":"Casa Completa-Patio-Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":90,
				"name":"Zan\u00F3n Luc\u00EDa Rosa",
				"address":"Tilcara 288",
				"phoneNumber":3525442110,
				"celNumber":null,
				"hotelType":"6 sgl.",
				"garage":"",
				"aditionalInfo":"Ventilador/ patio / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":91,
				"name":"Heredia, Marcelo Ram\u00F3n",
				"address":"Independencia 1634",
				"phoneNumber":3525401804,
				"celNumber":3525547298,
				"hotelType":"1 mat/ 2 cuch",
				"garage":"",
				"aditionalInfo":"Casa Completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":92,
				"name":"D\u00EDaz, Sandra",
				"address":"La Caba\u00F1a 1768",
				"phoneNumber":3525443688,
				"celNumber":3525502090,
				"hotelType":"2 mat / 1 cuch",
				"garage":"",
				"aditionalInfo":"Dpto Completo, con pileta de nataci\u00F3n"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":93,
				"name":"Fanin, Iris Josefa",
				"address":"Sgto Acosta 16",
				"phoneNumber":3525422206,
				"celNumber":3525615856,
				"hotelType":"1 mat / 2 sgl",
				"garage":"",
				"aditionalInfo":"Para compartir - 2 Habitaciones con aire"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":94,
				"name":"Fernandez, Mar\u00EDa Mercedes",
				"address":"Antartida Argentina 175",
				"phoneNumber":3525400830,
				"celNumber":null,
				"hotelType":"4 sgl- 1 cuch",
				"garage":"",
				"aditionalInfo":"Dpto Completo-entrada p/ veh\u00EDculo- asador Patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":95,
				"name":"Mattos, Mart\u00EDn",
				"address":"R\u00EDo Gallegos 1238",
				"phoneNumber":3525445088,
				"celNumber":3525600135,
				"hotelType":"1 mat / 4 sgl",
				"garage":"",
				"aditionalInfo":"Casa Completa - Aire acondicionado - asador - patio - alarma"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":96,
				"name":"Lenarduzzi, Franco",
				"address":"Alte Brown esq. Tierral del Fuego",
				"phoneNumber":null,
				"celNumber":3525520377,
				"hotelType":"6 sgl",
				"garage":"",
				"aditionalInfo":"Dpto completo - 1 Ba\u00F1o solo con ducha - Asador a compartir"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":97,
				"name":"Molina, Jos\u00E9 Oscar",
				"address":"Viedma 1747",
				"phoneNumber":3525467314,
				"celNumber":3525441666,
				"hotelType":"1 mat / 2 cuch",
				"garage":"",
				"aditionalInfo":"Casa completa - entrada p/ auto - patio - cocina - heladera"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":98,
				"name":"Moyano, Humberto",
				"address":"Puerto de Palo 1135",
				"phoneNumber":null,
				"celNumber":3525416192,
				"hotelType":"6 sgl",
				"garage":"",
				"aditionalInfo":"Entrada para auto techada"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":99,
				"name":"Tribbia, Concepci\u00F3n Yolanda",
				"address":"Cº Champaqui 238",
				"phoneNumber":3525428582,
				"celNumber":3525545406,
				"hotelType":"6 sgl",
				"garage":"",
				"aditionalInfo":"Casa completa - Sin S\u00E1banas - Aire - entrada p/ auto - ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":100,
				"name":"Zan\u00F3n, Lucia Rosa",
				"address":"Tilcara 288",
				"phoneNumber":3525442110,
				"celNumber":null,
				"hotelType":"6 sgl.",
				"garage":"",
				"aditionalInfo":""
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":101,
				"name":"Zan\u00F3n Miguel Angel",
				"address":"Tilcara 288",
				"phoneNumber":3525442201,
				"celNumber":null,
				"hotelType":"1 matr./1 sgl./1 cuch.",
				"garage":"",
				"aditionalInfo":"Casa a compartir / ventilador "
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":102,
				"name":"Astrada Margarita",
				"address":"Bv. Ag\u00FCero 327",
				"phoneNumber":3525400491,
				"celNumber":null,
				"hotelType":"1 matr./4 sgl.",
				"garage":"",
				"aditionalInfo":"Hab. con entrada ind. /ventilador/asador - 1 hab. Con aire"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":103,
				"name":"Camino Laura Argentina",
				"address":"Potos\u00ED 338",
				"phoneNumber":3525605063,
				"celNumber":null,
				"hotelType":"1 matr./5 sgl. ",
				"garage":"",
				"aditionalInfo":"Casa completa-ba\u00F1o con ba\u00F1era/A. acond. / patio c/asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":104,
				"name":"Cuiti\u00F1o Nancy Isabel",
				"address":"Remedi 134",
				"phoneNumber":null,
				"celNumber":3525501183,
				"hotelType":"1 matr./1sgl./1 cuch.",
				"garage":"",
				"aditionalInfo":"Casa completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":105,
				"name":"Ferreyra Mar\u00EDa Anal\u00EDa",
				"address":"Formosa 321",
				"phoneNumber":3525425530,
				"celNumber":null,
				"hotelType":"1 matr./ 3 sgl / 1 cuch.",
				"garage":"true",
				"aditionalInfo":"Casa completa / patio / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":106,
				"name":"Grandi Armando ",
				"address":"Sarmiento 373",
				"phoneNumber":3525401178,
				"celNumber":3525509488,
				"hotelType":"1 matr. / 5 sgl.",
				"garage":"true",
				"aditionalInfo":"Dto. Completo / patio / calef\u00F3n el\u00E9ctrico / patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":108,
				"name":"Vega Julio Nicol\u00E1s",
				"address":"Libertad 1096 esq. Balcarce",
				"phoneNumber":null,
				"celNumber":3525643102,
				"hotelType":"1 matr./5 sgl. ",
				"garage":"true",
				"aditionalInfo":"Casa completa/cocina/lavarropa/2 TV/ventiladores/patio asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":109,
				"name":"Nievas Cristina Alejandra",
				"address":"Pje. Di Filippo 819",
				"phoneNumber":null,
				"celNumber":3525536841,
				"hotelType":"1 matr./1 sgl./2 cuch.",
				"garage":"",
				"aditionalInfo":"Casa completa/patio/Asador/Aire acondicionado/lavarropas"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":110,
				"name":"Reyna, Mar\u00EDa Cristina",
				"address":"Igualdad 1197",
				"phoneNumber":3525444773,
				"celNumber":3525644620,
				"hotelType":"1 mat/5 sgl",
				"garage":"",
				"aditionalInfo":"Casa completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":111,
				"name":"Angulo, N\u00E9lida",
				"address":"Av. Miguel Juarez 939",
				"phoneNumber":3525400413,
				"celNumber":3525533533,
				"hotelType":"8 sgl",
				"garage":"",
				"aditionalInfo":"Dpto Completo- entrada para auto-Asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":112,
				"name":"Quiroga Mirta Gladis",
				"address":"Int. C\u00E9spedes 640",
				"phoneNumber":3525443561,
				"celNumber":3525447804,
				"hotelType":"2 matr./4 sgl. ",
				"garage":"",
				"aditionalInfo":"Casa completa/ventiladres/estado regular"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":113,
				"name":"Rizzi, Ricardo",
				"address":"Mil\u00E1n 421",
				"phoneNumber":3525425139,
				"celNumber":3525537000,
				"hotelType":"2 mat- 2 cuch",
				"garage":"true",
				"aditionalInfo":"Casa Completa-quincho-asador- ventiladores  de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":114,
				"name":"Salas Rub\u00E9n",
				"address":"Formosa 224",
				"phoneNumber":3525444374,
				"celNumber":3525511366,
				"hotelType":"6 sgl. / 1 matr. ",
				"garage":"",
				"aditionalInfo":"Casa confortable/buena ventilaci\u00F3n"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":115,
				"name":"Serafini Margarita",
				"address":"Gral. O'Higgins 141",
				"phoneNumber":3525400485,
				"celNumber":null,
				"hotelType":"4 cuch",
				"garage":"",
				"aditionalInfo":"Dto. Completo con TV/anafe/patio (contrapiso)"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":116,
				"name":"Ver\u00F3n Luis Fernando",
				"address":"El Salvador 805",
				"phoneNumber":null,
				"celNumber":3525510482,
				"hotelType":"1 matr./2 sgl./2 cuch.",
				"garage":"",
				"aditionalInfo":"Habitaciones en muy buen estado/ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":117,
				"name":"Migotti, Sandra",
				"address":"Espa\u00F1a 235",
				"phoneNumber":3525400783,
				"celNumber":3525544845,
				"hotelType":"1 mat/ 4 sgl/ 1 cuch",
				"garage":"",
				"aditionalInfo":"Para compartir - Entrada para auto - Ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":118,
				"name":"Garione, Matilde del Carmen",
				"address":"Julio A. Roca 355",
				"phoneNumber":null,
				"celNumber":3525454551,
				"hotelType":"4 cuch",
				"garage":"",
				"aditionalInfo":"Dpto completo - Calefon el\u00E9ctrico - ventiladores de pie"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":119,
				"name":"Bustamante Teresa",
				"address":"Costanera oeste 610",
				"phoneNumber":3525401169,
				"celNumber":3525441317,
				"hotelType":"7 sgl. / 1 matr.",
				"garage":"true",
				"aditionalInfo":"Casa completa / Aire aconodicionado / Internet"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":120,
				"name":"Campos Mar\u00EDa Luj\u00E1n",
				"address":"Ant\u00E1rtida Argentina 215",
				"phoneNumber":3525423107,
				"celNumber":3525482414,
				"hotelType":"3 sgl./3 cuch.",
				"garage":"true",
				"aditionalInfo":"Casa completa-ventiladores de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":121,
				"name":"Chavarr\u00EDa Mafalda",
				"address":"Mauricio Yadarola 505 esq. Juan B. Alberdi 795",
				"phoneNumber":3525426480,
				"celNumber":null,
				"hotelType":"1 matr. / 9 sgl.",
				"garage":"",
				"aditionalInfo":"Casa a compartir / ba\u00F1os a compartir"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":122,
				"name":"Fantini, Liliana Beatriz",
				"address":"Paraguay 167",
				"phoneNumber":3525401290,
				"celNumber":3525415998,
				"hotelType":"9 sgl.",
				"garage":"",
				"aditionalInfo":"Casa completa/living/comedor/cocina/patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":123,
				"name":"Santucho Mar\u00EDa",
				"address":"Venezuela 135",
				"phoneNumber":3525423791,
				"celNumber":3525431810,
				"hotelType":"3 matr./3 sgl.",
				"garage":"",
				"aditionalInfo":"Patio con asador/aire acond. en 1 habitaci\u00F3n/ pileta"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":124,
				"name":"Cuiti\u00F1o, Nancy",
				"address":"Remedi 134",
				"phoneNumber":null,
				"celNumber":3525501183,
				"hotelType":"3 mat / 1 sgl / 1 cuch",
				"garage":"",
				"aditionalInfo":"Casa completa - Ventiladores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":125,
				"name":"Aguirre Luis Evaristo",
				"address":"Guayaquil 1447",
				"phoneNumber":3525426134,
				"celNumber":3525618838,
				"hotelType":"6 sgl./2 cuch.",
				"garage":"",
				"aditionalInfo":"Patio/ventiladores/asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":126,
				"name":"Bochetto Ricardo",
				"address":"Sucre 401",
				"phoneNumber":3525606298,
				"celNumber":null,
				"hotelType":"5 sgl. / 2 cuch.",
				"garage":"true",
				"aditionalInfo":"Casa completa / ventiladores / asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":127,
				"name":"Oviedo Carlos Jos\u00E9",
				"address":"Potos\u00ED 316",
				"phoneNumber":3525443810,
				"celNumber":null,
				"hotelType":"8 sgl. / 1 cuch.",
				"garage":"true",
				"aditionalInfo":"Vent. de techo / asador / tv / cocheras / aire acond."
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":128,
				"name":"Britos, Walter Fabi\u00E1n",
				"address":"Sargento Cabral 1634",
				"phoneNumber":3525443137,
				"celNumber":3525405534,
				"hotelType":"5 sgl / 2 cuch",
				"garage":"",
				"aditionalInfo":"Casa Completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":129,
				"name":"Quinteros Sandro",
				"address":"Mauricio Yadarola 265",
				"phoneNumber":3525442670,
				"celNumber":3525562330,
				"hotelType":"2 mat-6 sig",
				"garage":"true",
				"aditionalInfo":"Dto. Completo con aire acondicionado"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":131,
				"name":"Angulo Nora del Valle",
				"address":"Indepencia 1325",
				"phoneNumber":3525400692,
				"celNumber":null,
				"hotelType":"5 sgl./2 matr./ 1 cuch",
				"garage":"",
				"aditionalInfo":"A compartir / ventilador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":132,
				"name":"De C\u00E1ndido Esther Graciela",
				"address":"Mariano Moreno 183",
				"phoneNumber":3525423149,
				"celNumber":3525647228,
				"hotelType":"7 sgl. / 2 matr.",
				"garage":"",
				"aditionalInfo":"Casa a compartir / asadores"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":133,
				"name":"Llanos Claudio Ram\u00F3n",
				"address":"La Caba\u00F1a 1788",
				"phoneNumber":3525443976,
				"celNumber":3525406982,
				"hotelType":"9 sgl. /1 matr. ",
				"garage":"true",
				"aditionalInfo":"Casa comp. / aire acond. / ventiladores / coch. tres autos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":134,
				"name":"Moyano, Mar\u00EDa Josefina",
				"address":"L\u00F3pez y Planes 175",
				"phoneNumber":3525400442,
				"celNumber":3525547423,
				"hotelType":"1 mat/ 9 sgl",
				"garage":"",
				"aditionalInfo":"uno de los ba\u00F1os es a compartir"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":135,
				"name":"Chavarr\u00EDa Graciela",
				"address":"Ram\u00F3n J. C\u00E1rcano 248",
				"phoneNumber":3525444181,
				"celNumber":3525410700,
				"hotelType":"6 sgl./3 cuch.",
				"garage":"",
				"aditionalInfo":"Casa completa / patio  / ventiladores / aire acondicionado"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":136,
				"name":"Gerez Albana Mar\u00EDa",
				"address":"An\u00EDbal Viale 639",
				"phoneNumber":3525423870,
				"celNumber":3525645928,
				"hotelType":"2 cuch./2 matr./4 ind.",
				"garage":"true",
				"aditionalInfo":"Casa comp. / vent. / patio / piscina / garage p 2 veh\u00EDculos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":137,
				"name":"Herrera, Lorenza",
				"address":"Castulo Pe\u00F1a 1122",
				"phoneNumber":35250352515538249,
				"celNumber":null,
				"hotelType":"12 sgl",
				"garage":"true",
				"aditionalInfo":"Casa completa - Patio grande"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":138,
				"name":"Ispizua, Facundo",
				"address":"El Mirador 1781",
				"phoneNumber":35250351152445591,
				"celNumber":null,
				"hotelType":"12 sgl.",
				"garage":"true",
				"aditionalInfo":"Casa Completa-aire acondicionado- Pileta"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":139,
				"name":"Juncos Marta Elena",
				"address":"Bolivia 236",
				"phoneNumber":3525427115,
				"celNumber":3525643741,
				"hotelType":"6 cuch.",
				"garage":"",
				"aditionalInfo":"Casa a compartir/vantiladores/cocina a dispocisi\u00F3n"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":140,
				"name":"Migotti, Rolando/Domene Sandra",
				"address":"Juan B. Alberdi 150",
				"phoneNumber":3525401354 ,
				"celNumber":3525413013,
				"hotelType":"3 mat. 6 sgl",
				"garage":"",
				"aditionalInfo":"Casa Completa- entrada p/ veh\u00EDculos-Asador internet"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":141,
				"name":"Oron\u00E1 Teresita",
				"address":"Indepencia 1538",
				"phoneNumber":3525401422,
				"celNumber":3525542144,
				"hotelType":"2 matr./2 sgl. / 3 cuch.",
				"garage":"",
				"aditionalInfo":"Ba\u00F1o con jacuzzi / cocina comedor con aire"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":142,
				"name":"Roberto, Jos\u00E9 Luis",
				"address":"Independencia 1355",
				"phoneNumber":null,
				"celNumber":3525475457,
				"hotelType":"2 sgl./3 cuch.",
				"garage":"true",
				"aditionalInfo":"Casa completa/cocina comedor/heladera/patio con asador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":143,
				"name":"Angulo Selva In\u00E9s",
				"address":"Corrientes 936",
				"phoneNumber":3525400148,
				"celNumber":null,
				"hotelType":"3 sgl. / 2 matr. / 3 cuch.",
				"garage":"",
				"aditionalInfo":"Casa a compartir / entrada para veh\u00EDculos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":144,
				"name":"Angulo de Junco Rosa",
				"address":"Gral. O'Higgins 156",
				"phoneNumber":3525443559,
				"celNumber":null,
				"hotelType":"12 sgl. / 1 matr.",
				"garage":"",
				"aditionalInfo":"Casa a compartir / patio / asador / ventilador de techo"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":145,
				"name":"De Blas Pura Rosa",
				"address":"9 de Julio 174",
				"phoneNumber":3525401945,
				"celNumber":3525436119,
				"hotelType":"8 sgl. / 2 cuch. / 1 matr.",
				"garage":"",
				"aditionalInfo":"Casa a compartir / Aire acondicionado / TV"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":146,
				"name":"Gele Diego",
				"address":"Bolivia 271 ",
				"phoneNumber":3525442050,
				"celNumber":3525576973,
				"hotelType":"10 sgl. 2 matr.",
				"garage":"",
				"aditionalInfo":"Casa completa / asador / patio"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":147,
				"name":"Astrada Margarita",
				"address":"Bv. Ag\u00FCero 327",
				"phoneNumber":3525400491,
				"celNumber":null,
				"hotelType":"4 matr./4 sgl./2 cuch.",
				"garage":"",
				"aditionalInfo":"2Dptos 1 Hab.c/uno. Con entrada ind. y comp. / ventiladores/ba\u00F1os a comp."
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":148,
				"name":"Ispizua, Facundo",
				"address":"El Mirador 1781",
				"phoneNumber":null,
				"celNumber":3512445591,
				"hotelType":"16 sgl",
				"garage":"true",
				"aditionalInfo":"Casa Completa. Aire Acondicionado- Pileta"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":149,
				"name":"Posta de la Caridad ",
				"address":"Alte Brown 1450",
				"phoneNumber":3525401333,
				"celNumber":null,
				"hotelType":"9 sgl./4 cuch.",
				"garage":"",
				"aditionalInfo":"Cada habitaci\u00F3n tiene ba\u00F1o privado/ entrada para vehiculos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":150,
				"name":"Sarmiento Jos\u00E9 Mar\u00EDa",
				"address":"Gregorio Carreras 544",
				"phoneNumber":3525606625,
				"celNumber":null,
				"hotelType":"1 matr./9 sgl./3 cuch.",
				"garage":"",
				"aditionalInfo":"Casa a compartir/asador/patio/vent./3 hab. con a. acond."
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":151,
				"name":"Bizzocchi, de Marino, Irma",
				"address":"Lucerna 338",
				"phoneNumber":null,
				"celNumber":3515185652,
				"hotelType":"2 mat-10 sgl 1 cuch 2 c",
				"garage":"true",
				"aditionalInfo":"Casa Completa-quincho-pileta patio cochera-horno chileno"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":152,
				"name":"Bustos, Floreana",
				"address":"Tucum\u00E1n 1346",
				"phoneNumber":null,
				"celNumber":3515462718,
				"hotelType":"10 sgl. 4 matr.",
				"garage":"",
				"aditionalInfo":"Csa Completa"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":153,
				"name":"Rocha, Benito Eduardo",
				"address":"Mauricio Yadarola 120",
				"phoneNumber":35256065500,
				"celNumber":3525447665,
				"hotelType":"11 sgl  4 cuch",
				"garage":"",
				"aditionalInfo":"Casa Completa-aire acondicionado- entrada p/ vehiculos"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":154,
				"name":"De Almir\u00F3n Marta",
				"address":"25 de Mayo esq. M Moreno 199",
				"phoneNumber":3525421353,
				"celNumber":null,
				"hotelType":"2 cuch./12 sgl/2 matr.",
				"garage":"true",
				"aditionalInfo":"A compartir / ventilador"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":155,
				"name":"Ispizua, Facundo",
				"address":"El Mirador 1781",
				"phoneNumber":null,
				"celNumber":3512415591,
				"hotelType":"20 sgl",
				"garage":"true",
				"aditionalInfo":"Casa Completa-aire acondicionado- Pileta"
			},
			{
				"type":"temporaryAccommodation",
				"extendedView":"false",
				"listItemViewType":"temporaryAccommodation",
				"id":156,
				"name":"Juncos Marta Elena",
				"address":"Bolivia 236",
				"phoneNumber":3525427115,
				"celNumber":3525643741,
				"hotelType":"4 matr./5 sgl./9 cuch.",
				"garage":"",
				"aditionalInfo":"Dto completo/cocina/heladera/cocina/ventilador"
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


	urlBase:"http://www.diproach.com/api/dc",
	//urlBase:"http://localhost:8888/api/dc",

	getAll:function (type, successCallback, errorCallback) {

		var definition = this.getDefinition(type);

		if(App.isOnlineEnabled() == false){
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
    	if(App.isOnlineEnabled() == false) return;

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
