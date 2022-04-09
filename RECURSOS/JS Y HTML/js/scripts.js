

//------------------------//
//Cambioar texto de un HTML
//------------------------//

//QuerySelector
const textoHeading = document.querySelector('.header__texto h2');
textoHeading.textContent = 'Nuevo Titulo'; // También se puede utilizar .text
console.log(textoHeading);

//QuerySelector All
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = "Nuevo texto en lace";
enlaces[0].href = 'https://www.google.es/?gfe_rd=mr&pli=1';
enlaces[0].classList.add('nueva_clase');
enlaces[0].classList.remove('navegacion__enlace');
console.log(enlaces);

//------------------------//
//Crear HTML 
//------------------------//


//Elemento por ID
const heading = document.getElementById('heading');
console.log(heading);

//Generar nuevo enlace
const nuevoEnlace = document.createElement('A')

//Agregar href
nuevoEnlace.href = 'https://www.google.es/?gfe_rd=mr&pli=1';

//Agregar texto
nuevoEnlace.textContent = "Enlace nuevo";

//Agregar clase

nuevoEnlace.classList.add('navegacion__enlace');



//Agregar al HTML
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

//------------------------//
//Eventos
//------------------------//


console.log(1);



console.log(5);

window.addEventListener('load', function(){
	console.log("Carga despues de HTML y ARCHIVOS 1"); //Espera a que carge el HTML IMAGENES CSS Y ARCHIVOS
});


window.onload = function(){
	console.log("Carga despues de HTML y ARCHIVOS 2"); //Espera a que carge el HTML IMAGENES CSS Y ARCHIVOS
}

document.addEventListener('DOMContentLoaded', function(){
	console.log("carga despues del HTML"); //Espera a que carge SOLO el HTML 
});


//------------------------//
//Scroll
//------------------------//
window.onscroll = function(){
	console.log('scroling');
}

window.onscroll = function(evento){
	console.log(evento);
}

//------------------------//
//Seleccionar elementos y añadir eventos
//------------------------//

const btnEnviar = document.querySelector('.boton-primario');

btnEnviar.addEventListener('click', function(){
	console.log('Enviando Mensaje');
});



//------------------------//
//Eventos de Imputs y TextArea
//------------------------//

//Leer datos en conjunto
const datos = {
	nombre:'',
	email:'',
	mensaje:''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(evento){
	//console.log(evento.target.value); //lee lo que hay en los imputs con un function 
	datos[evento.target.id] = evento.target.value;//agrega al objeto lo que estamos ecribiendo
	console.log(datos);
}


//Leer datos en individual

nombre.addEventListener('input', function(){
	console.log('escribiendo.....');
});

//------------------------//
//Evento Submit para validar formulario
//------------------------//
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
	evento.preventDefault();
	//Validar formulario
	const { nombre, email, mensaje} = datos;

	if(nombre == '' || email == '' || mensaje == ''){
		MostrarError('Todos los campos son obligatorios');
		return;
	}
	else{
		Mostrarmensaje('El mensaje fue enviado correctamente');
	}

	console.log(nombre);
	console.log(email);
	console.log(mensaje);

	//Enviar formulario
	console.log('enviando formulario...');
});

//----------------------
//Mostrar error en  pantalla
//----------------------
function MostrarError(mensaje){
	const error = document.createElement('P');
	error.textContent = mensaje;
	error.classList.add('error');

	formulario.appendChild(error);

	//----------------------
	//Desaparecer anuncio despues de 3 segundos
	//----------------------
	setTimeout(()=>{
		error.remove();
	},3000)

}

//----------------------
//Mostrar mensaje en  pantalla
//----------------------
function Mostrarmensaje(mensaje){
	const sms = document.createElement('P');
	sms.textContent = mensaje;
	sms.classList.add('mensaje');

	formulario.appendChild(sms);

	//----------------------
	//Desaparecer anuncio despues de 3 segundos
	//----------------------
	setTimeout(()=>{
		sms.remove();
	},3000)

}


//----------------------
//Factory version corta
//----------------------

function MotrarAlerta(mensaje, error = null){

	const alerta = document.createElement('P');
	alerta.textContent = mensaje;

	if(error){
		alerta.classList.add('error');
	}else{
		alerta.classList.add('correcto');	
	}

	formulario.appendChild(alerta);

	setTimeout(()=>{
		alerta.remove();
	},3000);

}

