
function sumar(numero1 = 0, numero2 = 0) { // numero1, 2 son parametros el 0 es para que tenga un valor 
    console.log(  numero2 + numero1);
}
sumar(10, 5); // Argumentos para los parametros
sumar(3, 3);
sumar(3, 6);
sumar(1);
 
 //Otra forma poner las funciones 
const sumar2 = function(n1, n2) {
    console.log(n1 * n2);
}
sumar2(10, 10);