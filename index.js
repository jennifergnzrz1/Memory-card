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
let resetScreen = document.createElement('div');
let background
let parent
let tablero
let celdas
let parejas = []
let counter = 0


//Función de pantalla inicio

function createStartScreen() {
  let startScreen = document.createElement('div');
  startScreen.classList.add('start-screen');

  startScreen.innerHTML =
  ` <h1 class="title">THE GAME</h1>
  <h1 class=" title2">OF LOVE</h1>
  <span class= "subtitle">ENCUENTRA LAS</span>
  <span class= "subtitle subtitle2">PAREJAS IGUALES</span>
  <div class='divBtn'><span>EMPEZAR A JUGAR</span></div> `

  body.appendChild(startScreen);

  let startButton = document.querySelector('.divBtn');
  startButton.addEventListener('click', function () {
    startScreen.style.display = 'none'; // Ocultar la pantalla de inicio al hacer clic en el botón
    createBoard(); // Llamar a la función para crear el tablero de juego
  });
}


//Función de la pantalla de ventana restart

function screenReset() {

  /* let resetScreen = document.createElement('div'); */

  resetScreen.classList.add('reset-screen');
  resetScreen.style.display = 'flex'

  resetScreen.innerHTML = 
  ` <div class='windowReset'>  
    </div>
     <div id='ventana'>
            <div class='subtitle'>
                <h2>AHORA TE TOCA A TI ENCONTRAR TU</h2>
            </div>
            <h1 id='otraCarta'>"OTRA CARTA"</h1>
            <a href="https://tinder.com/es-ES" target="_blank" class="tinder">PULSA AQUÍ</a>
    
            <div class='divBtnReset'><h2>VOLVER A JUGAR</h2></div
    </div> `
  body.appendChild(resetScreen)


  
  //resetScreen.style.display = 'none'

  let resetButton = document.querySelector('.divBtnReset');
   resetButton.addEventListener('click', function () {
    reverseCard()

  });
}


//Función para crear el fondo del juego

function createBackground(item) {
  background = document.createElement('div')
  background.setAttribute('id', item)
  body.appendChild(background)
}





  //Función para crear el tablero del juego

  function createBoard() {
    createBackground('fondo-2')

    tablero = document.createElement('div')
    tablero.classList.add('tablero')

    let doubleCards = cartas.concat(cartas)
    shuffle(doubleCards)

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


  //Función para mezclar las cartas

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Intercambio de elementos
    }
  }


  //Función para comprobar si las cartas coinciden

  function checkCard(item) {

  
    if (parejas.length < 2 && !parejas.includes (item)) { 
      parejas.push(item)
    }
    if (parejas.length === 2 && parejas[0].split('_')[0] !== parejas[1].split('_')[0]) {
      let card1 = tablero.querySelector(`img[alt=${parejas[0]}`)

      let card2 = tablero.querySelector(`img[alt=${parejas[1]}`)
     


      setTimeout(function () {
        parejas = []
        card1.setAttribute('hidden', '')
        card2.setAttribute('hidden', '')
      }, 250)



    }

    //cupido_01  cupido_05
    if (parejas.length === 2 && parejas[0].split('_')[0] === parejas[1].split('_')[0] && parejas[0] !== parejas[1] ) {
      console.log(parejas)
      parejas = []
      counter++
      if (counter === 5){
        screenReset()
        counter = 0
      }
    }
  }



  //Función para crear la logica del juego

  function game() {
    let allcards = document.querySelectorAll('.TheGameOfLove')
    allcards.forEach(function (card, i) {
      card.addEventListener('click', function () {
        if(parejas.length < 2) {
        card.children[0].removeAttribute('hidden')
        card.classList.remove('block')
        checkCard(card.children[0].alt)
        }

      })
    });
  }

  function reverseCard() {
    body.removeChild(background)
    resetScreen.style.display = 'none'

    createBoard(); // Llamar a la función para crear el tablero de juego

  }

 
//Cuando se carga la ventana, muestra la pantalla de inicio y la ventana de reinicio

window.onload = function () {
  createStartScreen()
 
}
