'use strict'

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

const lufthansa = {
    airline:'Lufthansa',
    iataCode:'LH',
    bookings:[],
    book(flightNum,passengerName){
        
        console.log(`${passengerName} booked a seat on ${this.airline} fligth ${this.iataCode}${flightNum}`);
                
        this.bookings.push({flight:`${this.iataCode}${flightNum}`,passengerName})
    }
}

lufthansa.book(711,'Jerin Wison')
lufthansa.book(911,'John Smith')
console.log(lufthansa.bookings);

 

const euroWings={
    airline:'Eurowings',
    iataCode:'EW',
    bookings:[]
}

const swiss={
    airline:'Swiss AirLine',
    iataCode:'SW',
    bookings:[]
}

const book = lufthansa.book

// Does not Work
// book(23,'Sarah Williams')

book.call(euroWings,23 ,'Sarah Williams')
book.call(lufthansa,811,'Wilson')
book.call(swiss,211,'siji')

console.log(swiss);

console.log(lufthansa);

console.log(euroWings);


// Apply

const flightData = [583,'George Cooper']

// book.apply(swiss,flightData)

book.call(swiss,...flightData)

console.log(swiss);



// bind method


// book.call(euroWings,23 ,'Sarah Williams')

const bookEW = book.bind(euroWings)


// kasdkcxcv,mklskdmclskscksncknslkcn knlkdfklsdfxvkjsdfsdfsdfsdfvcxjksdjfkksdfkdkkjfkjsfk sdfdjfkjsdjfas skjdf

 