/*var carrusel = [{
   img1 :'/assets/img/ProyectoJaponViews.png', 
}];

var imagen = document.getElementById("projects"); 
imagen.innerHTML = '<img src="/assets/img/ProyectoJaponViews.png">';*/


window.onload = function{
    var carrusel = [
        '/assets/img/ProyectoJaponViews.png',
        '/assets/img/l.png',
        '/assets/img/m.png' 
     ];
     
     let posicionInicial = 0;
     let $proyectos = document.querySelector('#projects');

     
        $proyectos.style.backgroundImage = `url(${carrusel[posicionInicial]})`;

         if (posicionInicial < 2){
            posicionInicial++;
         } else {
            posicionInicial = 0;
         }
         
    }
    
    