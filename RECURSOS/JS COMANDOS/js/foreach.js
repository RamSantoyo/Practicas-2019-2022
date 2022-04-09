const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// ForEach muestra en pantalla el listado
carrito.forEach( variable => console.log(variable.nombre));

// map crea un nuevo arreglo
const arreglo1 = carrito.map( variable => `${variable.nombre}`);

const arreglo2 = carrito.map( variable => `${variable.precio}`);

const arreglo3 = carrito.map( variable => `${variable.precio} - ${variable.nombre}`);


console.log(arreglo1);
console.log(arreglo2);
console.log(arreglo3);