'use strict'

// function calcAge(birthYear){
//     const age = 2037 - birthYear
//     console.log(firstName);
    
//     function printAge(){
//         const output = `${firstName},You are ${age}, born in ${birthYear}`
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996){
//             const str = `Oh, and you're a millenial, ${firstName}`
//             console.log(str);
            
//         }

        
        
//     }

//     printAge()

//     return age
// }

// const firstName = "jerin"
// calcAge(1991)


// variables

// console.log(me);
// console.log(job);
// console.log(year);




// var me = 'jerin'
// let job = 'Teacher'
// const year = '1991' 

// Functions

// console.log(addDecl(2,3));
// console.log(addArrow(2,2));

// console.log(addExpr(2,4));



// function addDecl(a,b){
//     return a + b
// }

// const addExpr = function(a,b){
//     return a+b
// }

// const addArrow =(a,b)=>a+b


// Example


// if(!numProducts) deleteShoppingCart()

// var numProducts = 10

// function deleteShoppingCart(){
//     console.log('All products deleted');
    
// }

// var x =1
// let y = 2
// const z = 3


// owner 

// const calcAge = function(birthYear){
//     console.log(2037-birthYear);
//     console.log(this);
    
    
// }

// calcAge(1991)

// // 
// const calcAgeArrow = (birthYear)=>{
//     console.log(2037-birthYear);
//     console.log(this);
    
// }

// calcAgeArrow(1991)

// console.log(this);


// const jonas = {
//     year:1991,
//     calcAge:function(birthYear){
//         console.log(this);
//         console.log(2037 - this.year);
        
//     }
// }

// jonas.calcAge()

// //dfkkfslalsdflsafalddasd kjflsd

// const matilda = {
//     year:2017
// }

// matilda.calcAge = jonas.calcAge
// console.log(matilda);

// matilda.calcAge()


// const f = jonas.calcAge;

// f()


// const jonas = {
//     firstName:'Jonas',
//     year:1991,
//     calcAge:function(){
//         // console.log(this);
//         console.log(2037 - this.year);
        
//         // const self = this
//         // const isMillenial = function(){
//         //     console.log(this);
//         //     console.log(self);
            
            
//         //     console.log(self.year >= 1981 && self.year <= 1996);
//         //     console.log(this.year >= 1981 && this.year <= 1996);
            
//         // }
//         const isMillenial = ()=>{
//             console.log(this);
            
            
//             console.log(this.year >= 1981 && this.year <= 1996);
            
//         }
//         isMillenial();
//     },
//    greet:function (){
//     console.log(`Hey ${this.firstName}`)
//    }
   
// }


// jonas.greet();
// jonas.calcAge()

// const addExpr = function(a,b){
//     console.log(arguments);
    
//     return a+b
// }

// addExpr(2,5)
// addExpr(2,5,8,9)

// var addArrow = (a,b)=>{
//     console.log(arguments);
    
//     return a+b
// }



// addArrow(2,5,8)


// let age = 30
// let oldAge = age
// age = 31

// console.log(age);
// console.log(oldAge);

// const me ={
//     name:"Jonas",
//     age:30
// };

// const friend = me;

// friend.age = 27

// console.log("Friend :",friend);
// console.log('ME :',me);


// primitive types

let lastName = 'Williams'
let oldLastName = lastName
lastName = 'Davis'

console.log(lastName,oldLastName);


// reference types
 const jessica = {
    firstName :'Jessica',
    lastName  :'Williams',
    age:27
 }

 const marriedJessica = jessica
 marriedJessica.lastName = 'Davis'

 console.log("before marriage",jessica);
 console.log("After marriage",marriedJessica);

//   Copying objects

const jessica2 = {
    firstName:'Jessica',
    lastName:'Williams',
    age:27,
    family:['Alice','Bob']
};


// const jessicaCopy = Object.assign({},jessica2)
const jessicaCopy = {...jessica2}
jessicaCopy.lastName = 'Davis'

console.log('Before marriage: ',jessica2);
console.log("After marriage: ",jessicaCopy);


jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')


console.log(jessicaCopy);



