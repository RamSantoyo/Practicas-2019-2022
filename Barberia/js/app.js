document.addEventListener('DOMContentLoaded', function(){
    
    galeria();
    noche();
})



function galeria(){

    const imagenes = document.querySelector('.galeria');

    if(imagenes){

        for(let i = 1; i <= 9; i++){
            
            //Generar imagen
            const imagen = document.createElement('IMG');
            imagen.src = `recursos/galery-${i}.webp`;        
            imagen.className = `imagen-galeria`;
            imagen.id = i;
            imagen.alt= `galeria`;

            //Mostrar imagen en HTML
            imagenes.appendChild(imagen);

            imagen.onclick = function(){
                mostrarimagen(i);
            }

        }
    }
}

function mostrarimagen(id){
    
    const imagengrande = document.createElement('picture');
    imagengrande.innerHTML = `<img src="recursos/galery-${id}.webp" class="img-overly" alt="galeria">`;

    const botoncerrar = document.createElement('DIV');    
    botoncerrar.innerHTML = `<i class="fa-solid fa-circle-xmark fa-5x" id="btncerrar"></i>`;
    botoncerrar.onclick = function(){        
        const body = document.querySelector('body')
        body.classList.remove('scroll');
        overly.remove();
    }

    const overly = document.createElement('DIV');
    overly.classList.add('overly');
    overly.appendChild(imagengrande);
    overly.appendChild(botoncerrar);
    overly.onclick = function(){        
        const body = document.querySelector('body')
        body.classList.remove('scroll');
        overly.remove();
    }    

    const body = document.querySelector('body')
    body.classList.add('scroll');
    body.appendChild(overly);

}

function noche(){
    const moon = document.querySelector('.moon');
    const body = document.querySelector('body');

    moon.onclick = function(){
        if(moon.classList.contains('fa-solid')){
            moon.classList.remove('fa-solid')
            body.classList.remove('oscuro');
            localStorage.removeItem('modo')                               
        }else{            
            moon.classList.add('fa-solid')
            body.classList.add('oscuro');            
            localStorage.setItem('modo', 'noche') 
        }         
    }
    
    if(localStorage.getItem('modo')){
        moon.classList.add('fa-solid')
        body.classList.add('oscuro');
    }
    
}
