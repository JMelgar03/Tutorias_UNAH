$(document).ready(function(){
	listaSecciones=[];
	$.ajax({
		url:"ajax/getInfo.php?accion=seccionesT",
			   data:"",
			   method:"POST",
			   success:function(respuesta){

					$("#seccionesContainer").html(respuesta);
				/*for (var j = 0; j < respuesta.length; j++) {
			card = 
		'<div class="card">'
			+'<div class="card-body">'
				+'<h5 class="card-title">'+ respuesta[i].nombreSeccion +'</h5>'
				+'<div class="row">'
					+'<div class = "col-10">'
						+'<p class="card-text"> Materia: '+ respuesta[i].nombreMateria +'</p>'
							+'<div class="row">'
								+'<div class="col-6">'
									+'<p class="card-text"> Hora Inicial: '+ respuesta[i].horaInicial +'</p>'
								+'</div>'
								+'<div class="col-6">'
									+'<p class="card-text"> Hora Final: '+ respuesta[i].horaFinal +'</p>'
								+'</div><br><br>'
							+'</div>'
						+'<p class="card-text"> Dias: '+ respuesta[i].dias +'</p>'
						+'<p class="card-text"> Cupos Disponibles: '+ respuesta[i].cupos +'</p>'
					+'</div>'
					+'<div class = "col-2">'
						+'<div class="img-container"><img src="img/imgunah/cropped-logo-2.png" class="logo-seccion"></div>'
						+'<p class="card-text card-calificacion"> Calificación: </p>'
					+'</div>'
				+'</div>'
			+'</div>'
			+'<input type="button" class="btn btn-danger" onclick="eliminarSeccion('.$fila.')">'
		+'</div>'*/
		

			   
			},
			   error:function(e){
	   
				  console.log(e);
			   }
	   
		});
	
/*	listaSecciones = [
		{
			nombreSeccion: "0900",
			nombreMateria: "Programación I",
			horaInicial : "9:00AM",
			horaFinal : "10:00AM",
			cupos: "22",
			dias: "Lunes,Martes,Miercoles",
			calificacion: "9.8"
		},
		{
			nombreSeccion: "1100",
			nombreMateria: "Geometría y Trigonometría",
			horaInicial : "11:00AM",
			horaFinal : "12:00PM",
			cupos: "15",
			dias: "Martes,Miercoles",
			calificacion: "7"
		}
	]*/

	/*for (var i = 0; i < listaSecciones.length; i++) {
		card = 
		'<div class="card">'
			+'<div class="card-body">'
				+'<h5 class="card-title">'+ listaSecciones[i].nombreSeccion +'</h5>'
				+'<div class="row">'
					+'<div class = "col-10">'
						+'<p class="card-text"> Materia: '+ listaSecciones[i].nombreMateria +'</p>'
							+'<div class="row">'
								+'<div class="col-6">'
									+'<p class="card-text"> Hora Inicial: '+ listaSecciones[i].horaInicial +'</p>'
								+'</div>'
								+'<div class="col-6">'
									+'<p class="card-text"> Hora Final: '+ listaSecciones[i].horaFinal +'</p>'
								+'</div><br><br>'
							+'</div>'
						+'<p class="card-text"> Dias: '+ listaSecciones[i].dias +'</p>'
						+'<p class="card-text"> Cupos Disponibles: '+ listaSecciones[i].cupos +'</p>'
					+'</div>'
					+'<div class = "col-2">'
						+'<div class="img-container"><img src="img/imgunah/cropped-logo-2.png" class="logo-seccion"></div>'
						+'<p class="card-text card-calificacion"> Calificación: '+ listaSecciones[i].calificacion +'</p>'
					+'</div>'
				+'</div>'
			+'</div>'
		+'</div>'
		$("#seccionesContainer").append(card)*/
	

	$("#btn-crearSeccion").click(function(){
		window.location.href='NuevaSeccion.html';
	})
	
});


function eliminarSeccion(a){
	var parametro = 'idSeccion='+a;
	$.ajax({
		url:"ajax/gestion-matricula.php?accion=eliminarSeccion",
	   data:parametro,
	   method:"POST",
	   success:function(respuesta){

		 alert(respuesta);
		 window.location= 'HomeTutor.php';
	   },
	   error:function(e){

		  console.log(e);
	   }

});
  }