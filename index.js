

let body = document.querySelector('body')
let background
let parent
let tablero
let celdas
let parejas = []



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

    let cardHTML = '';

    for (let i = 0; i < doubleCards.length; i++) {

        cardHTML += `
         <div class="block TheGameOfLove ">
             <img src=${doubleCards[i].img} alt=${doubleCards[i].nombre} hidden/>
         </div> `
    }

    tablero.innerHTML = cardHTML

    background.appendChild(tablero)

    game()



    /* 
        <div class="contenedor">
            <div class="tablero" id="fondo-2">
                <div class="TheGamerandomOfLove">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div class="TheGameOfLove">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div class="TheGameOfLove">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div class="TheGameOfLove">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div class="TheGameOfLove">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div class="TheGameOfLove">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <div class="TheGameOfLove">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>replaceChildss="TheGameOfLove">
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div> */
}


function game() {
    let allcards = document.querySelectorAll('.TheGameOfLove')
    let showAlt
    console.log(allcards)
    allcards.forEach(function (card, i) {
        console.log(card)
        //showAlt = image.getAttribute('alt')
        card.addEventListener('click', function () {
            console.log(card.children[0].alt)
            card.children[0].removeAttribute('hidden')
            card.classList.remove('block')
            console.log(card)

            //checkCard(card.children[0].alt)

        })
    });
}


function checkCard(item) {

    // Recibe el item y mira si el array es menor de 2 elementos

    for (let i = 0; i < item.length; i++) {
        if (parejas < item) {
            return parejas.push
        } else if (parejas === item) {
            return
            console.log(parejas)
        }
    }


    // si es menor lo inserta en el array y da la vuelta la carta
    // El array .push
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
