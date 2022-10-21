/*var carrusel = [{
   img1 :'/MartinMares/assets/img/ProyectoJaponViews.png', 
}];

var imagen = document.getElementById("projects"); 
imagen.innerHTML = '<img src="/MartinMares/assets/img/ProyectoJaponViews.png">';*/


window.onload = function(){
   
    var carrusel = [
       '/MartinMares/assets/img/ProyectoJaponViews.png',
       '/MartinMares/assets/img/l.png',
       '/MartinMares/assets/img/m.png'
     ];
     
     let posicionInicial = 0;
     let $proyectos = document.querySelector('#projects');
     $proyectos.style.backgroundImage = `url(${carrusel[posicionInicial]})`;
     /*var flechaDerecha = document.getElementById("fder");*/


     /*flechaDerecha.addEventListener('click', function () {*/
     
      
         /*if (posicionInicial < 2){
            posicionInicial++;
         } else {
            posicionInicial = 0;
         }*/
      
     /*});*/

     var fIzquierda = document.getElementById("fder");
     fIzquierda.addEventListener('click', function () {
       
      if (posicionInicial < 2){
          posicionInicial++;
          $proyectos.style.backgroundImage = `url(${carrusel[posicionInicial]})`;
       } else {
          posicionInicial = 0;
          $proyectos.style.backgroundImage = `url(${carrusel[posicionInicial]})`;
       }
       
     });

     var fDerecha = document.getElementById("fizq");
     fDerecha.addEventListener('click', function () {
       
      if (posicionInicial > 0){
          posicionInicial--;
          $proyectos.style.backgroundImage = `url(${carrusel[posicionInicial]})`;
       } else {
          posicionInicial = 2;
          $proyectos.style.backgroundImage = `url(${carrusel[posicionInicial]})`;
       }
       
     });
     

    }

   
    
    
