$(document).ready(function(){
	//efecto menu
	$('.menu a').each(function(index, elemento){
		//each | para aplicar a cada uno de los elementos 
		//index es como un arreglo el primero es 0
		$(this).css({ //array
			'top': '-200px' //subimos el texto (esconde)
		});

		$(this).animate({ //array
			top: '0' //le devolvemos en donde estaba
		}, 2000 + (index * 500)); //para que el efecto se de cada cierto tiempo
	});
	//efecto header
	if($(window).width() > 800){ //si la ventana es mayor a 800
		$('header .textos').css({
			opacity: 0, //como que esconde el texto
			marginTop: 0 //inicializa el margen 
		});

		$('header .textos').animate({
			opacity: 1, //para q aparezca el texto
			marginTop: '-52px' //para q el texto suba desde abajo
		}, 1500); //15 s
	}

	//Scroll Elementos Menu
	var acercaDe = $('#acerca-de').offset().top; //metodo para obtener la ubicacion de la cima del id
		menu = $('#platillos').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top;

	//evento al dar click al enlace
	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault(); //previene el envio de datos por default
		$('html, body').animate({ //animacion en el body
			scrollTop: acercaDe + 100 //nos lleva al lugar donde se encuentra
		}, 500);
	});

	$('#btn-menu').on('click', function(e){
		e.preventDefault(); //previene el envio de datos por default
		$('html, body').animate({ //animacion en el body
			scrollTop: menu //nos lleva al lugar donde se encuentra
		}, 500);
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault(); //previene el envio de datos por default
		$('html, body').animate({ //animacion en el body
			scrollTop: galeria //nos lleva al lugar donde se encuentra
		}, 500);
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault(); //previene el envio de datos por default
		$('html, body').animate({ //animacion en el body
			scrollTop: ubicacion //nos lleva al lugar donde se encuentra
		}, 500);
	});
});
