
let cartas = [
    {
        nombre: 'Cupid',
        img: './img/Cupid.jpg'
    },

    {
        nombre: 'Birdies',
        img: './img/Birdies.jpg'
    },

    {
        nombre: 'Lovers',
        img: './img/Lovers.jpg'
    },

    {
        nombre: 'In-love',
        img: './img/In-love.jpg'
    },

    {
        nombre: 'Unconditional',
        img: './img/Unconditional.jpg'
    },
]

let body = document.querySelector('body')
let background
let parent
let tablero
let celdas
let parejas = []
/* let reset =
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1920 1080">
<defs>
  <style>
    .cls-1 {
      fill: #232310;
    }

    .cls-1, .cls-2, .cls-3 {
      stroke-width: 0px;
    }

    .cls-2 {
      fill: #ff89a1;
      mix-blend-mode: screen;
    }

    .cls-3 {
      fill: #ffffe8;
    }

    .cls-4 {
      isolation: isolate;
    }

    .cls-5 {
      fill: #9cf;
      stroke: #232310;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  </style>
</defs>
<g class="cls-4">
  <g id="Capa_1" data-name="Capa 1">
    <g>
      <polyline class="cls-2" points="1920 0 1920 1080 0 1080 0 0"/>
      <g>
        <g>
          <path class="cls-3" d="M590.1,249.1h739.9c3.7,0,6.7,3,6.7,6.7v568.3c0,3.7-3,6.7-6.7,6.7h-739.9c-3.7,0-6.7-3-6.7-6.7V255.8c0-3.7,3-6.7,6.7-6.7Z"/>
          <path class="cls-1" d="M1329.9,249.6c3.4,0,6.2,2.8,6.2,6.2v568.3c0,3.4-2.8,6.2-6.2,6.2h-739.9c-3.4,0-6.2-2.8-6.2-6.2V255.8c0-3.4,2.8-6.2,6.2-6.2h739.9M1329.9,248.6h-739.9c-4,0-7.2,3.2-7.2,7.2v568.3c0,4,3.2,7.2,7.2,7.2h739.9c4,0,7.2-3.2,7.2-7.2V255.8c0-4-3.2-7.2-7.2-7.2h0Z"/>
        </g>
        <path class="cls-5" d="M1336.2,348.3v-45.2c0-29.4-24.1-53.5-53.5-53.5h-645.3c-29.4,0-53.5,24.1-53.5,53.5v45.2h752.3Z"/>
      </g>
    </g>
  </g>
</g>
</svg>` */


function screenReset(){
    let resetScreen = document.createElement('div');
    resetScreen.classList.add('reset-screen');

    resetScreen.innerHTML =  `
    <div class='windowReset'>
       
    </div>
     <div id='ventana'>
            <div class='subtitle'>
                <h2>AHORA TE TOCA A TI \n ENCONTRAR TU CARTA</h2>
            </div>
            <h1 id='otraCarta'>"OTRA CARTA"</h1>
            <div class='divBtnReset'><h2>VOLVER A JUGAR</h2></div
    </div>
    `
    
    
    
 /*     `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1920 1080">
  <defs>
    <style>
      .cls-1 {
        fill: #ff89a1;
        mix-blend-mode: screen;
        opacity: .7;
        stroke-width: 0px;
      }

      .cls-2 {
        isolation: isolate;
      }
    </style>
  </defs>
  <g class="cls-2">
    <g id="Capa_1" data-name="Capa 1">
      <polyline class="cls-1" points="1920 0 1920 1080 0 1080 0 0"/>
    </g>
  </g>
</svg>` */



body.appendChild(resetScreen)

//resetScreen.style.display = 'none'

    let resetButton = document.querySelector('.divBtnReset');
/*     resetButton.innerText = 'EMPEZAR A JUGAR';
 */    resetButton.addEventListener('click', function () {
        resetScreen.style.display = 'none'; // Ocultar la pantalla de inicio al hacer clic en el botón
        createBoard(); // Llamar a la función para crear el tablero de juego
    });

}


function createStartScreen() {
    let startScreen = document.createElement('div');
    startScreen.classList.add('start-screen');

    startScreen.innerHTML = 
    `
    <h1 class="title">THE GAME</h1>
    <h1 class=" title2">OF LOVE</h1>
    <span class= "subtitle">ENCUENTRA LAS</span>
    <span class= "subtitle subtitle2">PAREJAS IGUALES</span>
    <div class='divBtn'><span>EMPEZAR A JUGAR</span></div
    `

    /* let title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = 'THE GAME OF LOVE';

    let subtitle = document.createElement('p');
    subtitle.classList.add('subtitle');
    subtitle.innerText = 'Encuentra las cartas iguales'; */

   /*  let image = document.createElement('img');
    image.src = './img/Fondo-1.jpg'; // Ruta de la imagen de inicio
    image.alt = 'Start Image'; */

    body.appendChild(startScreen);

    let startButton = document.querySelector('.divBtn');
/*     startButton.innerText = 'EMPEZAR A JUGAR';
 */    startButton.addEventListener('click', function () {
        startScreen.style.display = 'none'; // Ocultar la pantalla de inicio al hacer clic en el botón
        createBoard(); // Llamar a la función para crear el tablero de juego
    });

  /*   startScreen.appendChild(image);
    startScreen.appendChild(startButton);
    startScreen.appendChild(title);
    startScreen.appendChild(subtitle); */

    

}


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Intercambio de elementos
  }
}

function createBackground(item) {
    background = document.createElement('div')
    background.setAttribute('id', item)

    body.appendChild(background)

    console.log(body)
}


function createBoard() {
    createBackground('fondo-2')
    console.log(background)

    tablero = document.createElement('div')
    tablero.classList.add('tablero')

    // sabemos cantidad de cartas - 10
    // métodos repitan algo cuantas veces queramos y debemos almacenar

    let doubleCards = cartas.concat(cartas)
    console.log(doubleCards)
    shuffle(doubleCards)
   // console.log(shuffle(doubleCards))

    

    let cardHTML = '';

    
    for (let i = 0; i < doubleCards.length; i++) {

        cardHTML += `
         <div class=" TheGameOfLove ">
             <img  src=${doubleCards[i].img} alt=${doubleCards[i].nombre}_${i} hidden/>
         </div> `
    }

    tablero.innerHTML = cardHTML

    background.appendChild(tablero)
    
    game()
    
}


function game() {
    let allcards = document.querySelectorAll('.TheGameOfLove')
    let showAlt
    allcards.forEach(function (card, i) {
        console.log(card)
        //showAlt = image.getAttribute('alt')
        card.addEventListener('click', function () {
            console.log(card.children[0].alt)
            card.children[0].removeAttribute('hidden')
            card.classList.remove('block')

            checkCard(card.children[0].alt) 

        })
    });
}


function checkCard(item) {

    // Recibe el item y mira si el array es menor de 2 elementos

    if (parejas.length < 2){
        parejas.push(item)
        console.log(parejas)
    }

    if (parejas.length === 2 && parejas[0].split('_')[0] !== parejas[1].split('_')[0]){
        let card1 = tablero.querySelector(`img[alt=${parejas[0]}`)

        let card2 = tablero.querySelector(`img[alt=${parejas[1]}`)

        console.log(card2)
        setTimeout(function(){
            card1.setAttribute('hidden', '')
            card2.setAttribute('hidden', '')

        }, 250)

        parejas = []

    } 

    if (parejas.length === 2 && parejas[0].split('_')[0] === parejas[1].split('_')[0]) {
        parejas = []
    }





    // si es menor lo inserta en el array y da la vuelta la carta
    // El arrshuffleay .push
    // sino, debe comprobar si mide ya 2 elementos el array
    // si son iguales los elementos guay!, los deja mostrándose
    // sino les da la vuelta, el array parejas debe ser = []

    // número de parejas (5) si es igual a 0 --> WIN
    // Function WIN()
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


window.onload = function () {
    createStartScreen()
    createBoard()
    screenReset()
}


    









/*  < div id = "fondo-1" >
     <div class="inicio">
         <img src="" alt="">
         <button type="button">Empezar a jugar</button>
     </div>
     
     <div class="final">
         <img src="" alt="">
         <button type="reset">Volver a jugar</button>
     </div>
 </ >  */
