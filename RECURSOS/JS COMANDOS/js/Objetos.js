//Variables
const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//Acceder a los valores
console.log(producto.precio);//mostrar solo el precio del objeto
console.log(producto.nombreProducto);//mostrar solo el nombre del objeto
console.log(producto.disponible);//mostrar si esta disponible en el objeto


// Agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg'; 

// Eliminar propiedades en el objeto
delete producto.disponible;
console.log(producto);