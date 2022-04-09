// "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto); // Impide que el objeto se modifique
Object.seal(producto); // Solo deja modificar los valores existentes no deja agregar ni eliminar


producto.precio = 'NUEVO PRECIO'; 

delete producto.precio;

console.log(producto);