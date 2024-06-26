'use strict'

const score = document.querySelectorAll('.score')
const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const currentScoreEl0 =document.getElementById('current--0')
const currentScoreEl1 =document.getElementById('current--1')
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')




// selecting elements
const score0El =document.getElementById('score--0')
const score1El =document.getElementById('score--1')

const scores = [0,0]

let activePlayer = 0


console.log(scores);



score0El.textContent = scores[0]
score1El.textContent =scores[1]


let currentScore = 0

diceEl.classList.add('hidden')


// Rolling dice functionality

btnRoll.addEventListener('click',()=>{

    // 1. generate random dice roll

    const dice = Math.trunc(Math.random()*6 ) +  1
    console.log(dice);
    

    // 2. display dice
    
    

    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`

      
    // 3. Checked for rolled 1

    if(dice === 1){
        currentScore = 0
        document.getElementById(`current--${activePlayer}`).textContent = currentScore

        scores[activePlayer] =0
        document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer]
        activePlayer = activePlayer === 0 ? 1:0

        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')


        

    }else{
        currentScore += dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore

        
    }
})


btnHold.addEventListener('click',()=>{
    scores[activePlayer]  += currentScore
    // score0El.textContent = scores[0]
    // score1El.textContent =scores[1]

    document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer]


    console.log(scores);
    
    
})

// ffgfgdgxckkddfsdf dfsdf sd klsdfjl mlskdfkdfmkmsldmfal