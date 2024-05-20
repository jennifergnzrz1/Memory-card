let body = document.querySelector('body')
let background

console.log(body)



function createBackground(){
background = document.createElement ('div')
background.setAttribute('id', 'fondo-2')

body.appendChild(background)

console.log(body)


}


function createBoard(){



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
    createBackground()
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

