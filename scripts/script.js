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

//BOTON DE LOS APRENDIZAJES
let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);
function toggleText() {
    hideText.classList.toggle('show');

    if(hideText.classList.contains('show')) {
        hideText_btn.innerHTML = 'Ocultar los Aprendizajes esperados en el Módulo 1:';
    } 
    else {
        hideText_btn.innerHTML = 'Mostrar los Aprendizajes esperados en el Módulo 1:';
    }
}

//BOTONES DE CONCEPTOS CLAVE
//Boton Primer Concepto
var btnAbrirPopup = document.getElementById('first'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btncerrar');

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

//Boton Segundo Concepto
var btnAbrirPopup2 = document.getElementById('second'),
    overlay2 = document.getElementById('overlay2'),
    popup2 = document.getElementById('popup2'),
    btnCerrarPopup2 = document.getElementById('btncerrar2');

btnAbrirPopup2.addEventListener('click', function(){
    overlay2.classList.add('active');
    popup2.classList.add('active');
});

btnCerrarPopup2.addEventListener('click', function(){
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
});

//Boton Tercer Concepto
var btnAbrirPopup3 = document.getElementById('third'),
    overlay3 = document.getElementById('overlay3'),
    popup3 = document.getElementById('popup3'),
    btnCerrarPopup3 = document.getElementById('btncerrar3');

btnAbrirPopup3.addEventListener('click', function(){
    overlay3.classList.add('active');
    popup3.classList.add('active');
});

btnCerrarPopup3.addEventListener('click', function(){
    overlay3.classList.remove('active');
    popup3.classList.remove('active');
});

//Boton Cuarto Concepto
var btnAbrirPopup4 = document.getElementById('fourth'),
    overlay4 = document.getElementById('overlay4'),
    popup4 = document.getElementById('popup4'),
    btnCerrarPopup4 = document.getElementById('btncerrar4');

btnAbrirPopup4.addEventListener('click', function(){
    overlay4.classList.add('active');
    popup4.classList.add('active');
});

btnCerrarPopup4.addEventListener('click', function(){
    overlay4.classList.remove('active');
    popup4.classList.remove('active');
});

//Boton Quinto Concepto
var btnAbrirPopup5 = document.getElementById('fifth'),
    overlay5 = document.getElementById('overlay5'),
    popup5 = document.getElementById('popup5'),
    btnCerrarPopup5 = document.getElementById('btncerrar5');

btnAbrirPopup5.addEventListener('click', function(){
    overlay5.classList.add('active');
    popup5.classList.add('active');
});

btnCerrarPopup5.addEventListener('click', function(){
    overlay5.classList.remove('active');
    popup5.classList.remove('active');
});

//Boton Sexto Concepto
var btnAbrirPopup6 = document.getElementById('sixth'),
    overlay6 = document.getElementById('overlay6'),
    popup6 = document.getElementById('popup6'),
    btnCerrarPopup6 = document.getElementById('btncerrar6');

btnAbrirPopup6.addEventListener('click', function(){
    overlay6.classList.add('active');
    popup6.classList.add('active');
});

btnCerrarPopup6.addEventListener('click', function(){
    overlay6.classList.remove('active');
    popup6.classList.remove('active');
});

//Boton Septimo Concepto
var btnAbrirPopup7 = document.getElementById('seventh'),
    overlay7 = document.getElementById('overlay7'),
    popup7 = document.getElementById('popup7'),
    btnCerrarPopup7 = document.getElementById('btncerrar7');

btnAbrirPopup7.addEventListener('click', function(){
    overlay7.classList.add('active');
    popup7.classList.add('active');
});

btnCerrarPopup7.addEventListener('click', function(){
    overlay7.classList.remove('active');
    popup7.classList.remove('active');
});

//Boton Octavo Concepto
var btnAbrirPopup8 = document.getElementById('eighth'),
    overlay8 = document.getElementById('overlay8'),
    popup8 = document.getElementById('popup8'),
    btnCerrarPopup8 = document.getElementById('btncerrar8');

btnAbrirPopup8.addEventListener('click', function(){
    overlay8.classList.add('active');
    popup8.classList.add('active');
});

btnCerrarPopup8.addEventListener('click', function(){
    overlay8.classList.remove('active');
    popup8.classList.remove('active');
});