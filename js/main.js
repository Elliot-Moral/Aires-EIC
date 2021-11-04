
/*==================== MENU SHOW Y HIDDEN ====================*/
const nav_menu = document.getElementById('nav-menu');
const nav_toggle = document.getElementById('nav-toggle');
const nav_close = document.getElementById('nav-closed');
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(nav_toggle){
    nav_toggle.addEventListener('click', ()=>{
        nav_menu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(nav_close){
    nav_close.addEventListener('click', ()=>{
        nav_menu.classList.remove('show-menu');
    })
}
/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

/*==================== SLIDER HOME INICIO BANNER ====================*/
var slides = document.querySelectorAll('.slider__side');
var botones = document.querySelectorAll('.slider__btn');
let boton_actual = 1;

// bloque para seleccionar las imagnes manualmente

var navegacion_manual = function(manual){
// y acá de quita la clase active despues de pulsar por segunda vez el
// boton osa uno cliquea se agrega la clase y si pulsa en otro boton
// se quita la clase del primer elemento y se agreana en el otro que se
// pulso. 
	slides.forEach( (slide) => {
		slide.classList.remove('active');
	});
	botones.forEach( (boton) =>{
		boton.classList.remove('active');
	});
// aca se agrega la clase active despues de pusar el boton
	slides[manual].classList.add('active');
	botones[manual].classList.add('active');
}
botones.forEach( (boton, i) => {
	boton.addEventListener('click', ()=>{
		navegacion_manual(i);
		boton_actual = i;
	});
});


// bloque para slider de imagnes automatico.

 var repetir = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repetidor = () => {
        setTimeout(function(){
          [...active].forEach((activar_slide) => {
            activar_slide.classList.remove('active');
          });

          slides[i].classList.add('active');
          botones[i].classList.add('active');
          i++;

          if(slides.length == i){
            i = 0;
          }
          if(i >= slides.length){
            return;
          }
          repetidor();
        }, 10000);
      }
      repetidor();
    }
    repetir();

    
/*==================== PRESENTACION SIMULACION TEXTO TYPED.JS ====================*/
const typed = new Typed('.typed', {
	// strings: [
	// 	'<i class="mascota">Gato</i>',
	// 	'<i class="mascota">Perro</i>',
	// 	'<i class="mascota">Conejo</i>',
	// 	'<i class="mascota">Pez</i>'
	// ],

	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});



/*==================== Efecto GLASS CON MAOUSE ====================*/

VanillaTilt.init(document.querySelectorAll(".services__card"), {
	max: 25,
	speed: 400
});
/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/


/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 