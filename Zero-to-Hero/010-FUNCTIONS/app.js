// 'use strict'

// const bookings = []

// const createBooking = function(flightNum,
//     numPassengers=1,
//     price=199*numPassengers
// ){

//     // ES5
//     // numPassengers = numPassengers || 1
//     // price = price || 199

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }

//     console.log(booking);
//     bookings.push(booking)
// }

// createBooking('LH123')

// createBooking('HK546',2,802)
// createBooking('HK546',4)
// createBooking('HK546',15) 
// createBooking('HK546',undefined,150) 


// const flight = 'LH224'

// const jerin = {
//     name:'Jerin Wilson',
//     passport:24659876645,
// }

// const checkIn = function(flightNum,passenger){
//     flightNum = 'LH999',
//     passenger.name = 'Mr.'+passenger.name

//     if(passenger.passport === 24659876645){
//         alert('checkIn')
//     }
//     else{
//         console.log('Wrong Passport !');
        
//     }
// }

// checkIn(flight,jerin)

// console.log(flight);
// console.log(jerin);


// const newPassport = function(person){
//     person.passport =Math.trunc(Math.random()*10000000)
// }

// newPassport(jerin);
// checkIn(flight,jerin)

// console.log(jerin);


// const oneWord = function(str){
//     return str.replaceAll(' ','').toLowerCase()
// }

// const upperFirstWord = function(str){
//     const [first,...others]  = str.split(' ')
//     return [first.toUpperCase(),...others].join(' ')
// }


// // higher order functions
// const transformer = function(str,fn){
//     console.log(`The original string: ${str}`);
    
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
    
    
// }

// transformer('Javascript is the best!',upperFirstWord)
// transformer('Javascript is the best!',oneWord)


// const high = function(){
//     console.log('bye....');
    
// }

// document.body.addEventListener('click',high)

// const arr = [1,2,3,4,5]
// arr.forEach(high)



// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
        
//     }
// }

// const greet = (greeting)=>{
//     return((name)=>{
//         console.log(`${greeting} ${name}`);
        
//     })
// }

// const greeterHey = greet("Hey");

// greeterHey('jerin')
// greeterHey('wilson')

// greet('Hello')('jerin')

// const lufthansa = {
//     airline:'Lufthansa',
//     iataCode:'LH',
//     bookings:[],
//     book(flightNum,passengerName){
        
//         console.log(`${passengerName} booked a seat on ${this.airline} fligth ${this.iataCode}${flightNum}`);
                
//         this.bookings.push({flight:`${this.iataCode}${flightNum}`,passengerName})
//     }
// }

// lufthansa.book(711,'Jerin Wison')
// lufthansa.book(911,'John Smith')
// console.log(lufthansa.bookings);

 

// const euroWings={
//     airline:'Eurowings',
//     iataCode:'EW',
//     bookings:[]
// }

// const swiss={
//     airline:'Swiss AirLine',
//     iataCode:'SW',
//     bookings:[]
// }

// const book = lufthansa.book

// // Does not Work
// // book(23,'Sarah Williams')

// book.call(euroWings,23 ,'Sarah Williams')
// book.call(lufthansa,811,'Wilson')
// book.call(swiss,211,'siji')

// console.log(swiss);

// console.log(lufthansa);

// console.log(euroWings);


// // Apply

// const flightData = [583,'George Cooper']

// // book.apply(swiss,flightData)

// book.call(swiss,...flightData)

// console.log(swiss);



// // bind method


// // book.call(euroWings,23 ,'Sarah Williams')

// const bookEW = book.bind(euroWings)

// bookEW(23,"Steven Williams")
// const bookLH = book.bind(lufthansa)

// bookLH(511,'Jonty Rhodes')

// const bookEW23 = book.bind(euroWings,23)
// bookEW23("john doe")

// // With event listeners

// lufthansa.planes = 300
// lufthansa.buyPlane = function(){
//     console.log(this);
    
//     this.planes++
//     console.log(this.planes);
    
// }

// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane.bind(lufthansa))


// // partial application

// const addTax = (rate,value)=>value + value * rate

// console.log(addTax(0.1,200));


// const addVAT = addTax.bind(null,0.23)

// console.log(addVAT(100));


// const addTaxRate = (rate)=>{
//     return((value)=>{
        
//        return value + value * rate
//     })
// }

// const addVT2 = addTaxRate(0.23)

// console.log(addVT2(220));


/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//     question:"What is your favouraite programming language  ?",
//     options:['0: JavaScript','1:Python','2:Rust','3:C++'],

//     answers:new Array(4).fill(0), //this generates [0,0,0,0]
//     registerAnswer:function(){
//         const userInput = Number(prompt(`${this.question}\n${this.options.join('\n')}\n (Write option number) `))

//         // register asnwer
//         typeof userInput === 'number'&&
//         userInput < this.answers.length &&
//         this.answers[userInput]++

//         this.displayResults('string')
//         this.displayResults()
         
//     },

//     displayResults:function(type='array'){
//         if(type === 'array'){
            
//             console.log(this.answers);
//         }else if(type === 'string'){
//             console.log(`the poll results are ${this.answers.join(',')}`);
           
//         }
//     }
// }
 

// document.querySelector('.poll').addEventListener('click',poll.registerAnswer.bind(poll))

// const TESTDATA1=[5, 2, 3]
// const TESTDATA2= [1, 5, 3, 9, 6, 1]
// poll.displayResults.call({answers:TESTDATA1},'string')

// const runOnce = ()=>{
//     console.log('this will never run again');
    
// }

// runOnce();

// //IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// (function(){
//     console.log('This will never run again');
    
// })()

// // (()=>console.log('this will never ever run again'))();

// {
//     const isPrivate = 23
//     var notPrivate = 46
// }

// // console.log(isPrivate);
// console.log(notPrivate);





// var foo = 'outer';

// (function() {
//     console.log(foo); // undefined (not 'outer' due to hoisting)
//     var foo = 'inner';
//     console.log(foo); // 'inner'
// })();


// CLOSURE

// const secureBooking = function(){
 
//     let passengerCount = 0;
//     return(()=>{
//         passengerCount++
//         console.log(`${passengerCount} passengers`);
        
//     })
// }


// const booker = secureBooking()

// booker()
// booker()
// booker()
// booker()
// booker()
// booker()
// booker()

// console.dir(booker)


// Closure example 1

// let f;
// const g = function(){
//     const a = 23;
//     f = function(){
//         console.log(a * 3);
        
//     }
// }

// const h = function(){
//     const b = 777;
//     f = function(){
//         console.log(b*2);
        
//     }
// }

// g()
// f()

// console.dir(f)

// // Re-assigning f function
// h()
// f()

// console.dir(f)


// EXAMPLE 2

// const boardPassengers = function(n,wait){
//     const perGroup = n / 3

//     setTimeout(function(){
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups each with ${perGroup} passengers`)
        
//     },wait * 1000)

//     console.log(`will start boarding in ${wait} seconds`);
    
// }

// const perGroup = 1000
// boardPassengers(180,3)



(function(){
    const header = document.querySelector('h1')
    header.style.color = 'red'

    const change = ()=>{
        console.log("df");
        
        header.style.color = 'blue'
    }

    document.querySelector('body').addEventListener('click',change)
})();


// 