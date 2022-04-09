
// Declaración de Función
function sumar() {
    console.log(10 * 10);
}

sumar(); //llamar la funcion para accion


// Expresión de la función
const sumar2 = function() {
    console.log( 3 + 3);
}

sumar2();


//IIFE SE UTILIZA PARA QUE LAS VARIABLES SOLO SE USEN EN ESTA FUNCION Y NO SE LLAMEN POR OTRAS 
(function(){
	console.log('esto es una funcion reservada '+ (5 + 5));
})();


