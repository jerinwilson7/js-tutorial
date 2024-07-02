'use strict';

// const Person = function(firstName,birthYear){
//     // instance properties
//     this.firstName = firstName
//     this.birthYear = birthYear
    
    // Never do this
    // this.calcAge = function(){
    //     console.log(2037-this.birthYear);
        
//     // }
// }


// const jonas = new Person('Jonas',1991)
// const matilda = new Person('Matilda',1993)

// console.table(jonas)
// console.table(matilda)


// 1 New {} (empty obj)is created
// 2.Function is called, this = {}
// 3.{} linked to prototype
// 4.function automatically return {} 



// PROTOTYPES
 
// Person.prototype.calcAge = function(){
//     console.log(2037-this.birthYear);
    
// }

// console.log(Person.prototype);

// jonas.calcAge();

// console.log(jonas.__proto__.__proto__);

// const h1 = document.querySelector('h1')

// const Car = function(carName,speed){
//     this.name = carName
//     this.speed = speed


// }

// Car.prototype.accelerate = function(){
//     this.speed+=10
//     console.log(`${this.name} going at ${this.speed} Km/h`);
    
// }
// Car.prototype.break = function(){
//     this.speed-=5
//     console.log(`${this.name} going at ${this.speed} Km/h`);
    
// }

// const bmw = new Car('BMW',100)
// const benz = new Car('Mercedes',85)

// bmw.accelerate()
// bmw.accelerate()
// bmw.accelerate()
// bmw.break()
// bmw.break()
// bmw.break()
// bmw.break()

// benz.accelerate()
// benz.accelerate()
// benz.accelerate()
// benz.accelerate()

// benz.break()

// CLASS EXPRESSION

// const personCl = class{}

// CLASS DECLARATION

// class PersonCl{
//     constructor(firstName,birthYear){
//         this.firstName  = firstName
//         this.birthYear = birthYear
//     }

//     calcAge(){
//         console.log(2037 - this.birthYear);
        
//     }
// }

// const jessica = new PersonCl('Jessica',1996)
// jessica.calcAge()
// console.log(jessica);



// 1.CLASSES ARE NOT HOISTED
// 2.CLASSES ARE FIRST CLASS CITIZENS
// 3.CLASSES ARE EXECUTED IN STRICT MODE



// const account = {
//     owner:'Jonas',
//     movements:[200,400,50,120,300],

//    get latest(){
//     return this.movements.slice(-1)
//    },   

//    set latest(mov){
//     this.movements.push(mov)
//    },

//    set fullName(name){

//     if(name.includes(' ')){
//         this.fullName = name
//     }
//     else alert(`${name} is not a full name`)
//    }
// }



// console.log(account.latest
// );
// account.latest = 50
// console.log(account);


// const PersonProto = {
//     calcAge(){
//         console.log(2037-this.birthYear);
        
//     }
// }

// const steven = Object.create(PersonProto);
// console.log(steven);

// steven.name = 'Steven'
// steven.birthYear = 2021
// steven.calcAge()


// const sarah = Object.create(PersonProto)


class Car {

 constructor(carName,speed){
        this.name = carName
        this.speed = speed
    
    
    }
    
    accelerate (){
        this.speed+=10
        console.log(`${this.name} going at ${this.speed} Km/h`);
        
    }
    break (){
        this.speed-=5
        console.log(`${this.name} going at ${this.speed} Km/h`);
        
    }

    get speedUS(){
        return this.speed / 1.6
    }

    set speedUS(speed){
        this.speed = speed * speed
    }
}

const ford = new Car('ford',120)
console.log(ford.speedUS);
ford.accelerate()
ford.accelerate()
ford.accelerate()
ford.break()
ford.speedUS = 50
// object.prototype objects isnull which then marks but with the prototype its gonna look scope chain another jons.hasown proper name inspecting right now prototupwtop of the scope chain strange constructor property  one reusing code indeed that worked any arr that we wnat i guwss multiple adding in different way doing realy nice exercice function is also an obj appply binfd and call prototaall te setteres and getters get and setters o on, property for you object .create steven obj two obj now looking classes same here exact smae thing ibhej this is least use how real world next lecture obj oops as we see 