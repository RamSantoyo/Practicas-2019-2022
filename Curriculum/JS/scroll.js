document.addEventListener('DOMContentLoaded', function(){

    scrollNav();
    navegacionFija();
});

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');

    enlaces.forEach( function( enlace ) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function navegacionFija() {
    const observer = new IntersectionObserver( function(entries){

        const barra = document.querySelector('.header');

        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }else{
            barra.classList.add('fijo');
        }

    });
    observer.observe(document.querySelector('.sobre-mi'));
}