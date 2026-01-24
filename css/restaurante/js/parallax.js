$(document).ready(function(){
	
	$(window).scroll(function(){ //accede al scroll de la ventana
		var anchoVentana = $(window).width(); //accede al ancho de la ventana

		if(anchoVentana > 800){ //tiene q concordar con el del @query
			var scroll = $(window).scrollTop(); //calcula el scroll de la ventana
			
			$('header .textos').css({
				'transform': 'translate(0px,'+ scroll/2 +'%)' //para q se muevan los textos
				//translate(horizontal, vertical) movimiento
			});

			$('.acerca-de article').css({
				'transform': 'translate(0px, -'+ scroll/4 +'%)'
			});
		}	
	});
	//se ejecuta cada q hay un cambio de tamaño en la pantalla
	$(window).resize(function(){
		var anchoVentana = $(window).width();
		if(anchoVentana < 800){
			$('.acerca-de article').css({
				'transform': 'translate(0px, 0px)' //inicializa los valores
			});
		}
	});
});
