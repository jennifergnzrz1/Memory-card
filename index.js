
console.log(cartas)

let body = document.querySelector('body')
let background
let parent
let tablero
let celdas

console.log(body)



function createBackground(item){
    background = document.createElement ('div')
    background.setAttribute('id', item)

    body.appendChild(background)

    console.log(body)


}


function createBoard(){
    createBackground('fondo-2')
    console.log(background)

    tablero = document.createElement('div')
    tablero.classList.add('tablero')

    // sabemos cantidad de cartas - 10
    // métodos repitan algo cuantas veces queramos y debemos almacenar
let doubleCards = cartas.concat(cartas)
    console.log(doubleCards)

    let cardHTML = '';

    for (let i = 0; i < doubleCards.length; i++){
        
        cardHTML += `
        <div class="TheGameOfLove">
             <img src=${doubleCards[i].img} alt=${doubleCards[i].nombre} />
             <img src="" alt="" />
         </div> `
    }

    tablero.innerHTML = cardHTML




    background.appendChild(tablero)










/* 
    <div class="contenedor">
        <div class="tablero" id="fondo-2">
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
            </div>
            <div class="TheGameOfLove">
                <img src="" alt="" />
                <img src="" alt="" />
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
        </div>
    </div> */
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

