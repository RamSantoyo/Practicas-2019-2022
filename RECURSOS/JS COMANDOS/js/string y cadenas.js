// String o Cadenas de Texto

const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const producto2 = 'Monitor HD"';
const nombre = 'Juan Pablo';
const email = 'correo@correo.com';

// length es para la extension
console.log(tweet.length);//mensiona cuantos caracteres tiene el texto//
console.log(producto2);

// IndexOf (retorna posición)
console.log(tweet.indexOf('Java'));//Busca una palabra en la cadena y muesra la posicion en la que esta//
console.log(producto2.indexOf('Tablet'));
console.log(email.indexOf('@'));

// Includes (retorna true o false)
console.log(tweet.includes('JavaScript')); //Busca si el dato existe y lo muestra con una palabra booleana//
console.log(producto2.includes('Tablet'));

