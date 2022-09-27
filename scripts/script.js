//BOTONES DE LA BARRA DE NAVEGACION
//Primer boton
var pressButton = document.getElementById('btn1'),
    section = document.getElementById('content');

pressButton.addEventListener('click', function(){
    section.classList.add('active');
    section2.classList.remove('active');
    section3.classList.remove('active');
    section4.classList.remove('active');
    section5.classList.remove('active');
    section6.classList.remove('active');
    section7.classList.remove('active');
    section8.classList.remove('active');
    section9.classList.remove('active');
});

//Segundo boton
var pressButton2 = document.getElementById("btn2"),
    section2 = document.getElementById("academic");

pressButton2.addEventListener('click', function(){
    section2.classList.add('active');
    section.classList.remove('active');
    section3.classList.remove("active");
    section4.classList.remove('active');
    section5.classList.remove('active');
    section6.classList.remove('active');
    section7.classList.remove('active');
    section8.classList.remove('active');
    section9.classList.remove('active');
});

//Tercer boton
var pressButton3 = document.getElementById("btn3"),
    section3 = document.getElementById("intro");

pressButton3.addEventListener('click', function(){
    section3.classList.add('active');
    section.classList.remove('active');
    section2.classList.remove('active');
    section4.classList.remove('active');
    section5.classList.remove('active');
    section6.classList.remove('active');
    section7.classList.remove('active');
    section8.classList.remove('active');
    section9.classList.remove('active');
});

//Cuarto boton
var pressButton4 = document.getElementById("btn4"),
    section4 = document.getElementById("concept");

pressButton4.addEventListener('click', function(){
    section4.classList.add('active');
    section.classList.remove('active');
    section2.classList.remove('active');
    section3.classList.remove('active');
    section5.classList.remove('active');
    section6.classList.remove('active');
    section7.classList.remove('active');
    section8.classList.remove('active');
    section9.classList.remove('active');
});

//Quinto boton
var pressButton5 = document.getElementById("btn5"),
    section5 = document.getElementById("activity");

pressButton5.addEventListener('click', function(){
    section5.classList.add('active');
    section.classList.remove('active');
    section2.classList.remove('active');
    section3.classList.remove('active');
    section4.classList.remove('active');
    section6.classList.remove('active');
    section7.classList.remove('active');
    section8.classList.remove('active');
    section9.classList.remove('active');
});

//Sexto boton
var pressButton6 = document.getElementById("btn6"),
    section6 = document.getElementById("resource");

pressButton6.addEventListener('click', function(){
    section6.classList.add('active');
    section.classList.remove('active');
    section2.classList.remove('active');
    section3.classList.remove('active');
    section4.classList.remove('active');
    section5.classList.remove('active');
    section7.classList.remove('active');
    section8.classList.remove('active');
    section9.classList.remove('active');
});

//Septimo boton
var pressButton7 = document.getElementById("btn7"),
    section7 = document.getElementById("evaluation");

pressButton7.addEventListener('click', function(){
    section7.classList.add('active');
    section.classList.remove('active');
    section2.classList.remove('active');
    section3.classList.remove('active');
    section4.classList.remove('active');
    section5.classList.remove('active');
    section6.classList.remove('active');
    section8.classList.remove('active');
    section9.classList.remove('active');
});

//Octavo boton
var pressButton8 = document.getElementById("btn8"),
    section8 = document.getElementById("conclusion");

pressButton8.addEventListener('click', function(){
    section8.classList.add('active');
    section.classList.remove('active');
    section2.classList.remove('active');
    section3.classList.remove('active');
    section4.classList.remove('active');
    section5.classList.remove('active');
    section6.classList.remove('active');
    section7.classList.remove('active');
    section9.classList.remove('active');
});

//Noveno boton
var pressButton9 = document.getElementById("btn9"),
    section9 = document.getElementById("bibliography");

pressButton9.addEventListener('click', function(){
    section9.classList.add('active');
    section.classList.remove('active');
    section2.classList.remove('active');
    section3.classList.remove('active');
    section4.classList.remove('active');
    section5.classList.remove('active');
    section6.classList.remove('active');
    section7.classList.remove('active');
    section8.classList.remove('active');
});

//BOTONES DE CONCEPTOS CLAVE
//Boton Intro
var btnAbrirPopup = document.getElementById('intro'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btncerrar');
    //ocultarCarta = document.getElementById('btntap');

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
    //ocultarCarta.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
    //ocultarCarta.classList.remove('active');
});

//Boton Objetivos
var btnAbrirPopup2 = document.getElementById('objt'),
    overlay2 = document.getElementById('overlay2'),
    popup2 = document.getElementById('popup2'),
    btnCerrarPopup2 = document.getElementById('btncerrar2');
    //ocultarCarta2 = document.getElementById('btntap2');

btnAbrirPopup2.addEventListener('click', function(){
    overlay2.classList.add('active');
    popup2.classList.add('active');
    //ocultarCarta2.classList.add('active');
});

btnCerrarPopup2.addEventListener('click', function(){
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
    //ocultarCarta2.classList.remove('active');
});