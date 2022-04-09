document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
    modeDark();

})

function eventListeners(){
    const mobilMenu = document.querySelector('.menu-mobile');
    const luna = document.querySelector('.icono-luna');

    mobilMenu.addEventListener('click', navresponsiv);
    luna.addEventListener('click', lunallena);

}

function navresponsiv(){
    const navegacion = document.querySelector('.navegacion');

    if(navegacion.classList.contains('mostrar')){
        navegacion.classList.remove('mostrar')
    }else{
        navegacion.classList.add('mostrar')
    }
}

function lunallena(){

    const icono = document.querySelector('.moon');

    if(icono.classList.contains('far')){
        icono.classList.remove('far')        
        icono.classList.add('fas')
        document.body.classList.add('dark-mode')
        localStorage.setItem('modo', 'noche')
    }else if(icono.classList.contains('fas')){
        icono.classList.remove('fas')
        icono.classList.add('far')
        document.body.classList.remove('dark-mode')
        localStorage.removeItem('modo')
    }
    
}

function modeDark(){
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
    const icono = document.querySelector('.moon');
    
    if(darkMode.matches == true){
        document.body.classList.add('dark-mode')
    }else{
        document.body.classList.remove('dark-mode')
    }

    if(localStorage.getItem('modo')){
        document.body.classList.add('dark-mode')
        icono.classList.remove('far')        
        icono.classList.add('fas')
    }else{
        document.body.classList.remove('dark-mode')
    }

}