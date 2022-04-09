/*Crear elementos de html en un recorrido de for en la galeria*/
document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 8; i++){
        
        //Generar imagen
        const imagen = document.createElement('IMG');
        imagen.src = `Recursos/imagenes/imgs/${i}.png`;

        //Añadiendo funcion mostrar imagen
        imagen.dataset.imagenId = i;
        imagen.onclick = mostrarImagen;
        
        //Mostrar en HTML
        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }

}

function mostrarImagen(e){
    //Convierte el ID en numero entero
    const id = parseInt(e.target.dataset.imagenId);

    //Generar imagen
    const imagen = document.createElement('IMG');
    imagen.src = `Recursos/imagenes/imgb/${id}.png`;

    //Crear div
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay2');

    //Cerrar imagen cuando se le de en la pantalla
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove("fijar-body");
    }

    //Boton cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');
    
    overlay.appendChild(cerrarImagen);

    //Cerrar al presionar
    cerrarImagen.onclick = function(){
        overlay.remove();
        body.classList.remove("fijar-body");
    }

    overlay.appendChild(cerrarImagen);

    //Mostrar en HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    //Impedir scroll
    body.classList.add('fijar-body');
}