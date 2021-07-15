document.addEventListener('DOMContentLoaded', ()=>{
    const elementosCarousel = document.querySelectorAll('.carousel');
M.Carousel.init(elementosCarousel,{
    duration: 150, 
    dist: -80, /*distancia entre imagenes*/
    shift: 5,
    padding: 5,
    numVisible: 5, /*las imagenes visibles*/
    indicators: true,
    noWrap: false,
} );
});
