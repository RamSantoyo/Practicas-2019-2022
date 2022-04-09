// Arreglos o Arrays

const numeros = [10,20,30,40,50];
console.log(numeros);

// Conocer la extensión de un arreglo
console.log(meses.length);

// Acceder a los valores de un arreglo
console.log(numeros[0]);
console.log(numeros[1]);

//recorrer el listado
numeros.forEach( function(numero) {
    console.log(numero);
})


numeros.push(60,70,80); // Aagrega los numeros al final del arreglo
numeros.unshift(-10,-20,-30); //Aagrega los numero al inicio del arreglo

console.table(numeros);


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// meses.pop(); // elimina el último elemento
// meses.shift(); // elimina el primer elemento

// meses.splice(2, 1);// elimina los datos deacuerdo a las posiciones
// console.table(meses);

//const nuevoArreglo = ['Junio', ...meses]; //agregar al arreglo
//console.log(nuevoArreglo);
