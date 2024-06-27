'use strict'

const score = document.querySelectorAll('.score')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
let currentScoreEl0 =document.getElementById('current--0')
let currentScoreEl1 =document.getElementById('current--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')




// selecting elements
const score0El =document.getElementById('score--0')
const score1El =document.getElementById('score--1')




let scores,currentScore,activePlayer,playing

const init = function(){

    
     scores = [0,0]
     currentScore = 0;
     activePlayer = 0
     playing = true;

    score0El.textContent = 0; 
    score1El.textContent = 0;
    currentScoreEl0 = 0;
    currentScoreEl1 = 0;

    diceEl.classList.add('hidden')
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')


}
init()

const switchPlayer = function (){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    console.log(currentScore);
    
    activePlayer = activePlayer === 0 ? 1:0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

 
// Rolling dice functionality



btnRoll.addEventListener('click',()=>{


    if(playing){

    
    // 1. generate random dice roll

    const dice = Math.trunc(Math.random()*6 ) +  1
    console.log(dice);
    

    // 2. display dice
    
    

    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`

      
    // 3. Checked for rolled 1

    if(dice === 1){

        switchPlayer();


        

    }else{
        currentScore += dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore

        
    }
}
})


btnHold.addEventListener('click',()=>{

    if(playing){

    

    scores[activePlayer]  += currentScore
  

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]

    if(scores[activePlayer] >= 100){
        // finish the game
        playing = false

        diceEl.classList.add('hidden')

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    }
    else{

        switchPlayer()
    }


    
}
})


btnNew.addEventListener('click',init)


