
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
         <div class="block TheGameOfLove ">
             <img src=${doubleCards[i].img} alt=${doubleCards[i].nombre}_${i} hidden/>
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
            card1.setAttribute('hidden', 'true')
            card2.setAttribute('hidden', 'true')

        },1000)

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





window.onload = function () {
    createBoard()

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
 </ > 
*/
