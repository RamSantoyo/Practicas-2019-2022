// function sumar(n1, n2) {
//     return n1 + n2;
// }

// const resultado = sumar(2, 3);

// console.log(resultado);


let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

precio = agregarCarrito(200);
precio = agregarCarrito(400);
precio = agregarCarrito(600);
precio = agregarCarrito(100);


function calcularImpuesto(total) {
    return total * 0.16 + total;
}



console.log(total);

const totalAPagar = calcularImpuesto(total);

console.log(`El total a pagar con impuestos es de: $${totalAPagar}`);