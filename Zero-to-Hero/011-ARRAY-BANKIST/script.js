'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a','b','c','d','e']

// console.log(arr.slice(2,4));

// console.log(arr.slice(3));
// console.log(arr.slice(-2));

// // SPLICE

// console.log(arr.splice(2,0,'3'));
// console.log(arr);

// // REVERSE
// arr = ['a','b','c','d','e']


// const arr2 = ['j','i','h','g']

// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT

// const letters = arr.concat(arr2)
// console.log(letters);


// // JOIN

// console.log(letters.join('-'));


// const arr = [23,11,64]

// console.log(arr[0]);

// console.log(arr.at(0));
// // getting the last element

// console.log(arr.slice(-1)[0]);

// console.log(arr.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach((movement,i)=>{
  
//   if(movement > 0){
//     console.log(`Movement ${i+1}:You deposited ${movement}`);
    
//   }else{
//     console.log(`Movement ${i+1}:You withdrew ${Math.abs(movement)}`);
    
//   }
// })sjkkmnxcv


//MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((value,key,map)=>{
//   console.log(`${key}:${value}`);
  
// })

// const currenciesUnique = new Set(['USD','GBP','USD','EUR']);

// console.log(currenciesUnique);

// currenciesUnique.forEach((val,_,map)=>{
//   console.log(`${val}: ${val}`);
  
// })


// const checkDogs = (dogsJulia,dogsKate)=>{
//   const ogDogsJulia = dogsJulia.slice(1,-2)
  
//   const dogs = ogDogsJulia.concat(dogsKate)

//   dogs.forEach((dog,i)=>{
//     if(dog>=3){
//       console.log(`Dog numner ${i} is adult and is ${dog} years old`);
      
//     }
//     else{
//       console.log(`Dog number ${i} is still a puppy`);
      
//     }
//   })
// }



// const julia = [3,5,2,12,7]
// const kate = [4,1,15,8,3]
 


// checkDogs(julia,kate)


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsToUsd = movements.map((movement)=>movement*eurToUsd)

// console.log(movementsToUsd);

// const movementDescriptions = movements.map((movement,i)=>

//   `Movement ${i+1}: You ${movement > 0 ? 'deposited':'withdrew'} ${Math.abs(movement)}`
// )
 
// console.log(movementDescriptions);


// const deposits = movements.filter(mov=>mov>0)
// const withdrawals = movements.filter(mov=>mov<0)

// console.log(deposits);
// console.log(withdrawals);


// const balance = movements.reduce((acc,curr)=>acc+=curr,0)
// const balance = movements.reduce((acc,curr,i)=>{
//   console.log(`iteration ${i} : ${acc}`);
//   return acc+=curr
  
// },0)

// console.log(balance); 

// const maxVal = movements.reduce((max,curr)=>{
//   return curr > max ? curr : max 
// },0)

// console.log(maxVal);

 
// const calcAvgHumanAge =(dogs)=>{
//   // let humanAge=[];

//   let humanAge = dogs.map((dog)=>{
//     if(dog<=2){
//           return dog*2
//         }
//         else if(dog>2){
//           return 16+dog*4
//         }
//   })
 

//   console.log(humanAge);
//   const adults = humanAge.filter(age=>age>18)
  
//   const avgDog = adults.reduce((acc,curr)=>acc+curr ,0)/adults.length

//   return avgDog

  
  
   
// }


// const calcAvgHumanAge = (dogs)=>
//  dogs.map((dog)=>dog<=2 ? 2*dog:dog*4)
//  .filter(age=>age>=18)
//  .reduce((acc,age,i,arr)=>acc+age/arr.length,0) 


// const dogs = [ 5,2,4,1,15,8,3]

// const avgAge = calcAvgHumanAge(dogs)

// console.log(avgAge);




// const euroToUsd = 1.1

// //PIPELINE
// const totalDeposits = movements
// .filter(mov=>mov>0)
// .map(mov=>mov*euroToUsd) 
// .reduce((acc,curr)=>acc+=curr,0)

// console.log(totalDeposits);


// FIND

// const firstWithDrawal =  movements.find(mov => mov<0)

// console.log(firstWithDrawal);

// console.log(accounts);

// const account = accounts.find(acc=>acc.owner === 'Sarah Smith');
// console.log(account);


// console.log(movements);

// console.log(movements.includes(-130));

// console.log(movements.some(mov=>mov === -130));


// const anyDeposits = movements.some(mov=>mov>1500)

// console.log(anyDeposits);

// console.log(movements.every(mov=>mov>0));

// console.log(account4.movements.every(mov=>mov>0));

// const arr = [[1,2,3],[4,5,6],7,8]
// const arrDeep = [[[1,[2]],3],[4,[5,6]],7,8]

// console.log(arr.flat());
// console.log(arrDeep.flat(3 ));


// const movementArr = [...account1.movements,...account2.movements,...account3.movements,...account4.movements]

// console.log(movementArr);

// const accMovements = accounts.map(acc=>acc.movements)

// const allMovements = accMovements.flat() 
// console.log(allMovements);

// const totalBalance = accounts.map(acc=>acc.movements).flat().reduce((acc,curr)=>acc+=curr,0)
// const totalBalance = accounts.flatMap(acc=>acc.movements).reduce((acc,curr)=>acc+=curr,0)

// console.log(totalBalance);


// SORTS METHOD

// const owners = ['Jonas','Zach','Adam','Martha','John']

// console.log(owners.sort());


// console.log(movements.sort((a,b)=>a-b));
 
// console.log(movements);


// EMPTY ARRAYS + FILL METHOD

// const x = new Array(9)

// const arr = [1,4,5,6,5,2,34,4,6]
// // x.fill(12)

// x.fill(12,3,4)

// console.log(x);

// console.log(arr.fill(23,4,5));


// // ARRAY.FROM

// const y = Array.from({length:8},()=>1)

// console.log(y);


// const z =Array.from({length:100},()=> Math.floor(Math.random() * 6) + 1)

// console.log(z);
  
// 1
// const bankDeopositsum = accounts
// .flatMap(acc=>acc.movements)
// .filter(mov=>mov>0)
// .reduce((acc,curr)=>acc+=curr)

// console.log(bankDeopositsum);
  

// // 2

// const numDeposits1000 = accounts
// .flatMap(acc=>acc.movements)
// .reduce((acc,curr)=> curr >= 1000 ? acc+1 : acc,0)

 
// console.log(numDeposits1000);


// let a  = 10

// console.log(++a); 



// 3

// const sums = accounts
// const {deposits,withdrawals} = accounts
// .flatMap(acc=>acc.movements).reduce((sum,curr)=>{
//   curr > 0 ? sum.deposits += curr:sum.withdrawals+=curr
//   return sum
// },{deposits:0,withdrawals:0})

// // console.log(sums);
// console.log(deposits,withdrawals);

// // 4

// // this is a nice title -> This Is a Nice Title

// const convertTitleCase = function(title){

//   const capitalize = str => str[0].toUpperCase()+str.slice(1)

//   const exception = ['a','an','the','but','or','on','in','with','and'];

//   const titleCase = title
//   .toLowerCase()
//   .split(' ')
//   .map(word=> exception.includes(word) ? word : capitalize(word) )
//   .join(' ')

//   return  capitalize(titleCase)  
// }

// console.log(convertTitleCase('this is a nice title')); 
// console.log(convertTitleCase('this is a LONG title but not too long')); 
// console.log(convertTitleCase('and here is another title with an EXAMPLE')); 


// const numDeposits1000 = accounts
// .flatMap(acc=>acc.movements)
// .filter(mov=>mov>1000).length 


// console.log(numDeposits1000);


// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
]

// dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
 
// console.log(dogs);sds


// dogs.forEach(dog=>{
//   dog.recommendedFood = Math.trunc(dog.weight ** 0.75*28)
  
// })

// dogs.forEach(dog=> {
//   console.log(dog);
  
//    if(dog.owners.includes('Sarah')){
//     console.log(`Sarah's dog eats ${dog.curFood >  dog.recommendedFood ? 'much' :'less'}`);
    
//    }
//  })

// const sarahDog = dogs.find(dog=>dog.owners.includes('Sarah'))
// console.log(`Sarah's dog eats too ${sarahDog.curFood >  sarahDog.recommendedFood ? 'much' :'less'}`);


//  const ownersEatsTooMuch =[]
//  const ownersEatsTooLittle =[]
 
//  dogs.forEach(dog=>{
  
//   if(dog.curFood > dog.recommendedFood){
//     ownersEatsTooMuch.push(dog.owners)
//   }
//   else if(dog.curFood < dog.recommendedFood){
//     ownersEatsTooLittle.push(dog.owners)
//   }
//  })

//  console.log(ownersEatsTooMuch);
//  console.log(ownersEatsTooLittle);
 

// const ownersEatsTooMuch = dogs.filter(dog=> dog.curFood > dog.recommendedFood)
// .flatMap(dog=>dog.owners)

// console.log(`${ownersEatsTooMuch.join(' and ')}'s dogs eat too much`);


// const ownersEatsTooLittle = dogs.filter(dog=>dog.curFood < dog.recommendedFood)
// .flatMap(dog=>dog.owners)

// console.log(`${ownersEatsTooLittle.join(' and ')}'s dogs eat too little`);



// console.log(ownersEatsTooMuch);
//  console.log(ownersEatsTooLittle);

//  console.log(dogs.some(dog=>dog.curFood === dog.recommendedFood));
 
//  const checkEatingOkay = (dog)=>  dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1


//  const okay = dogs.some(checkEatingOkay)
//  console.log(dogs.filter(checkEatingOkay));
 


//  console.log(okay);

//  console.log(dogs);
 

//  const dogsCopy = dogs.slice().sort((a,b)=>a.recommendedFood - b.recommendedFood)

// console.log(dogsCopy);
 
 
