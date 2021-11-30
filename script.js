
var uno = document.getElementById("e1");
var dos = document.getElementById("e2");
var tres = document.getElementById("e3");
var menuToogle = document.getElementById("nav-links");

function inicio() {
    uno.classList.add("Cblack");
    dos.classList.add("Cblack");
    tres.classList.add("Cblack");
    menuToogle.classList.add("menuInvisible");
};

inicio();

var x = 0;

function menui() {
    
    if(x==0){
    menuToogle.classList.remove("menuInvisible");
    menuToogle.classList.add("menuVisible");
    x=1
    } else {
    menuToogle.classList.remove("menuVisible");
    menuToogle.classList.add("menuInvisible");
    x=0;
    }
};

/*
Contact Javascript Form
*/

/*var focusedName = document.getElementById("nombres");
focusedName.addEventListener('input', function(e){
    document.getElementById("mensaje").innerHTML="Hola";
    focusedName.classList.add("green");
    focusedName.addEventListener('blur', function(e){
        document.getElementById("mensaje").innerHTML="Bienvenido";
    })
});*/

focusedName = document.getElementById("nombres");
focusedCorreo = document.getElementById("correo");
btnEnviar = document.getElementById("botons");
btnEnviar.addEventListener('click', function(e){
    if(focusedName.value === '' && focusedCorreo.value === ''){
        alert("Hay campos obligatorios");
    }
    });

/*
Form javascript finishes 
 * 
*/

function hoverover1() {
    
    uno.classList.remove("Cblack");
    uno.classList.add("Cwhite");
};

function hoverover2() {

    dos.classList.remove("Cblack");
    dos.classList.add("Cwhite");
}

function hoverover3() {

    tres.classList.remove("Cblack");
    tres.classList.add("Cwhite");
}

function hoverout1() {
    
    uno.classList.remove("Cwhite");
    uno.classList.add("Cblack");
};

function hoverout2() {

    dos.classList.remove("Cwhite");
    dos.classList.add("Cblack");
};

function hoverout3() {

    tres.classList.remove("Cwhite");
    tres.classList.add("Cblack");
};

function Href0(){
    window.open('https://wa.me/524495407591','_blank');
}

function Href1(){
    window.open('https://www.linkedin.com/in/knobody-k-402221220/','_blank');
}

function Href2(){
    window.open('https://github.com/AllIThinkAboutIsKarma','_blank');
}



