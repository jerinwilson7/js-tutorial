"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  },

  orderDelivery:function({starterIndex=1,mainIndex=0,time='22:00',address}){
    
    
    console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `);
    
  },

  orderPasta: function(ing1,ing2,ing3){
    console.log(`Here is you delicious pasta with ${ing1},${ing2},${ing3}`);
    
  },

  orderPizza:function(mainIndgredian,...otherIngrediants){
    console.log(mainIndgredian,otherIngrediants);
    
  }
};

// use any datatype return any datatype short-circuiting

console.log('---------------------------OR--------------------');


console.log((3 || 'jonas'));
console.log(''|| 'jonas');
console.log(undefined || null);

console.log(undefined || 0 ||''||'hello'||23);

// const guessts1 = restaurant.numGuests ? restaurant.numGuests:10;

// console.log(guessts1);


const guest2=restaurant.numGuests || 20
console.log(guest2);


console.log('---------------------------AND--------------------');


console.log(0 && 'Jonas');
console.log(7 &&'Jonas');
console.log(8 && 9);


 console.log('helo' && 23 && null && 'jonas');

// if(restaurant.orderPizza) {
//     restaurant.orderPizza('mushroom','spinach')
// }
 
restaurant.orderPizza && restaurant.orderPizza('spinch')



// restaurant.orderPizza('mushrooms','onions','spinach')
// restaurant.orderPizza('olive') ok

// // sjkd  sin=mp,kdf kjo ,d mokakjd jsu okdksd ksjd

// // const ingrediants = [prompt('Let\'s make pasta! ingrediant 1?'),prompt('Let\'s make pasta! ingrediant 2?'),prompt('Let\'s make pasta! ingrediant 3?')]

// // restaurant.orderPasta(ingrediants[0],ingrediants[1],ingrediants[2])

// // restaurant.orderPasta(...ingrediants)
// // console.log(ingrediants);


// // objectklkkmkmlmhjh oppoh



// // spread, because of right side of =

// const arrnew = [1,2,...[3,4]]

// // rest because left side of the assignmet operator

// const [a,b,...others] = [1,2,3,4,5]

// console.log(a,b,others);


// const[pizza,,risotto,...otherfood]=[...restaurant.mainMenu,...restaurant.starterMenu]

// console.log(pizza,risotto,otherfood);

// // objects

// const {sat,...weekdays} = restaurant.openingHours;

// console.log(weekdays);



// // functions

// const add = function(...args){

//    const sum = args.reduce((acc,curr)=> acc+=curr)
//    console.log(sum);
   
    
// }
// add(2,3)
// add(5,3,7,8,9)
// add(8,2,3,4,56,7,8,9)

// const x = [23,5,7]

// add(...x)

// const newRestaurant = {foundedYear:1984,...restaurant, founder:"arun"}

// console.log(newRestaurant);

// const restaurantCopy = {...restaurant}

// restaurantCopy.name = 'japz'


// console.log(restaurantCopy);



// restaurant.orderDelivery({
//     time: '23:30',
//     address:'via del sole 21',
//     mainIndex:2,
//     starterIndex:2
// })
// restaurant.orderDelivery({
//     address:'palakad',
//     starterIndex:0
// })

// const arr = [7,8,9]
// const badArr = [1,2,3,...arr]

// console.log(badArr);

// console.log(...badArr);

// console.log(restaurant.mainMenu);

// restaurant.mainMenu = [...restaurant.mainMenu,'kunafa']
// console.log(restaurant.mainMenu);

// restaurant.mainMenu.splice(2,0,"cb")

// console.log(restaurant.mainMenu);



// const newMenu = [...restaurant.mainMenu,'Gnocci']

// console.log(newMenu);


// const mainMenuCopy = [...restaurant.mainMenu]

// const menu = [...restaurant.mainMenu,...restaurant.starterMenu]

// console.log(menu);

// const str = 'jonas'
// const letters = [...str,'','S.']

// console.log(letters);

// console.log(...str);
// kfkl nelf  

// ldkf

// dfsdfkkdjjjdkdjnjjnnkka jjajjkjsjjnk kk jk ajsjdncmx cmksowod jkask klkdkkkkksdjlkasjk enitire arrk newarrkd j j

// const {name,openingHours,categories} = restaurant


// console.log(name,openingHours,categories);



// const {name: restaurantName,openingHours:hours,categories:tags} = restaurant

// console.log(restaurantName,hours,tags);


// const   {menu = [],starterMenu:starters=[]} = restaurant

// console.log(menu,starters);

// // mutating variables

// let a = 111; 
// let b=999; 
// const obj = {a:23,b:7,c:14}


// console.log(obj);




// ({a,b} = obj)

// console.log(a,b); 


// const {fri:{open,close}} = openingHours
// console.log(open,close);



// jkdflsdflfkksdkfssdsdsdadsdasdasd

// sdjsjdjksdjsdjsd

// const arr = [1,2,3]

// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const [x,y,z] = arr
// console.log(x,y,z);

// let [main,,secondary] = restaurant.categories

// console.log(main,secondary);

// [main,secondary] = [secondary,main] 

// console.log(main,secondary);


// console.log(restaurant.order(2,0)) 

// // this how we recieve two return function
// const [starter,mains] = restaurant.order(3,1)

// console.log(starter,mains);



// const nested = [2,4,[5,6]]

// // const [i,,j] = nested
// // const [f,k] = j
// // console.log(i,j);

// // console.log(f,k);


// const [i,,[j,k]] = nested
// console.log(i,j,k);


// // default values

// const [p,q,r] = [8,9]

// console.log(p,q,r);


// kffsdf