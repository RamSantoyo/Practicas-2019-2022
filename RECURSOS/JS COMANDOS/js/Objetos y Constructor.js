// POO 

/** Object Literal */
//const producto = {
//    nombre: 'Tablet',
//    precio: 500
//}

// Object Constructor
//function Producto(nombre, precio) {
//    this.nombre = nombre;
//    this.precio = precio;
//}

//const producto2 = new Producto('Monitor Curvo de 49"', 800);
//const producto3 = new Producto('Laptop', 300);

//console.log(producto2);
//console.log(producto3);

// POO 

/** Object Literal */
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Cliente(nombre, apellido, id) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = id;
}
Cliente.prototype.formatearCliente = function() {
    return `Comprado por el Cliente: ${this.nombre} ${this.apellido} con un ID: ${this.id}`;
}


function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}
// Crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);
const producto4 = new Producto('Celular', 9000);
const cliente = new Cliente('Juan', 'De la torre', 320);


console.log(producto2);
console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );
console.log(producto4.formatearProducto() );
console.log(cliente.formatearCliente() );

