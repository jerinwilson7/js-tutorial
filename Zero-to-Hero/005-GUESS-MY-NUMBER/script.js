'use strict'
// document.querySelector('.message').textContent = "correct number"

// document.querySelector('.number').textContent = 13

// document.querySelector('.score').textContent = 20

// console.log(document.querySelector('.guess').value) 

// document.querySelector('.guess').value = 40

// const x = function(){
//     console.log(document.querySelector('.guess').value);   
    
// }


const message = document.querySelector('.message')

let secretNumber = Math.trunc(Math.random()*20) +1

let number = document.querySelector('.number')

let score = document.querySelector('.score')

let highScore = document.querySelector('.highscore')

let body = document.querySelector('body')

let reset = document.querySelector('.again')

let guessInput = document.querySelector('.guess')

highScore.textContent = 0
 
score.textContent = 20

console.log(secretNumber);


document.querySelector('.check').addEventListener('click',()=>{
   const guess = Number(document.querySelector('.guess').value);
   
   console.log(guess);

//    when no input
   if(!guess){
    message.textContent = 'No number'
   }


//    when player wins

   else if(guess === secretNumber){
     message.textContent = "Correct Number...."
     highScore.textContent = score.textContent
 
     number.textContent = secretNumber

     body.style.backgroundColor = '#60b347'
     number.style.width = '30rem'

   }

//    when guess is wrong
   else if(guess !== secretNumber){
    if(score.textContent > 1){

        message.textContent = guess > secretNumber ? "Too high..." : "Too low..."
        score.textContent --
    }
    else{        
        message.textContent = "You loose the game"
        score.textContent = 0
    }
   }

}) 


reset.addEventListener('click',()=>{
    secretNumber = Math.trunc(Math.random()*20) + 1
    console.log(secretNumber);
    score.textContent = 20;
    number.textContent = '?'
    body.style.backgroundColor = '#222'
    message.textContent="start guessing.."
    guessInput.value = ''
    number.style.width = '15rem'    
})

 
// dfdfdf