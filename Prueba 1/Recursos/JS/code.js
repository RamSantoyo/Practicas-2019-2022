document.addEventListener('DOMContentLoaded', function(){
    Galeria();
});

function Galeria(){

    var clase = document.getElementsByClassName('enlace');

    for(var i = 0; i < clase.length; i++){
        clase[i].addEventListener('click', crear);
    }

    function crear(){

        const modal = document.querySelector('.contenedor-modal');
        const img = document.querySelector('.imagen-modal');
        var num = this.id;

        var elements = document.getElementsByClassName('imagen-modal');
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }

        const imagen = document.createElement('IMG');
        imagen.classList.add('imagen-modal');
        imagen.src = `Recursos/imagenes/${num}.gif`;                   
        modal.appendChild(imagen);
                  
    }

}

