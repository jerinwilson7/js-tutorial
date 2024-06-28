"use strict";

// Data needed for a later exercise


// Data needed for first part of the sectiondf

const weekdays = ['mon','tue','wed','thu','fri','sat','sun']

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // ES6 Enhanced object literals
  openingHours,



  order(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
  },
 
  orderDelivery({starterIndex=1,mainIndex=0,time='22:00',address}){
    
    
    console.log(`order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `);
    
  },

  orderPasta(ing1,ing2,ing3){
    console.log(`Here is you delicious pasta with ${ing1},${ing2},${ing3}`);
    
  },
 
  orderPizza(mainIndgredian,...otherIngrediants){
    console.log(mainIndgredian,otherIngrediants);
    
  }
};


// const questions = new Map([
//   ['question','what is the best programming language in the world'],
//   [1,'c'],
//   [2,'java'],
//   [3,'js'],
//   ['correct',3],
//   [true,'Correct'],
//   [false, 'Wrong answer']
// ])

// console.log(questions);

// // converting objects into map 
// // ok
// sd
// const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap);

// console.log(questions.get('question'));


// for(const [key,value] of questions){
//   if(typeof key == 'number')
//     console.log(`option ${key} : ${value}`);
    
// }

// const userAnswer = Number(prompt('enter the option number'))
// console.log(userAnswer);

// console.log(questions.get(userAnswer === questions.get('correct'))); 


// convert map to an array

// console.log([...questions]);



// Maps


// const rest = new Map();

// rest.set('name','Classico Italiano')
// rest.set(1,'Firenze italy')
// console.log(
  
//   rest.set(2, 'Lisbon')
// );

// rest.set('categories',[...restaurant.categories]).set('open',11).set('close',23).set(true,'we are open').set(false,'we are closed')

// console.log(rest.get('name'));
// console.log(rest.get(true));

// console.log(rest);

// const time = 21;
// console.log(rest.get(time > rest.get('open') &&time < rest.get('close')));

// console.log(rest.has('categories'));
// console.log(rest.delete(2));
// console.log(rest);

// console.log(rest.size);
// console.log(rest);

// const arr = [1,2]

// rest.set(arr,'Test')
// // rest.set([1,2],'Test')


// console.log(rest);


// console.log(rest.get(arr));


 

// sfsf

// sets

// const orderSet = new Set(['pasta','pizza','pizza','Rosatto','pasta','pizza'])

// console.log(orderSet); 

// console.log(new Set('jonassaf')) 

// console.log(orderSet.size);
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('bread'));
// orderSet.add('Garlic Bread')
// orderSet.add('Garlic Bread')
// orderSet.add('Garlic Bread')

// orderSet.delete('pizza')



// console.log(orderSet);

// // use case

// const staff = ['waiter','chef','waiter','manager','chef','waiter']

// // const staffUnique =[ ...new Set(staff)]
// const staffUnique =[new Set(['waiter','chef','waiter','manager','chef','waiter']).size]

// console.log(staffUnique);

// console.log(new Set('jerinwilson').size);




// kflkjdflksdjndskflkdsdlkfslkdfnlskdfnldkflkdsfnlskdfklsdf risatto klfdkf k set an arrakdf kl kekldfkldfldfkld;ldfsalksjdi set arraykjdklf ksjflkf
// const properties = Object.keys(openingHours)

// console.log(properties);


// let openStr = `we are open on ${properties.length} days`
// for(const day of Object.keys(openingHours)){
//   openStr += ` ${day} , `
  
// }

// console.log(openStr);


// // property values
 
// const values = Object.values(openingHours)

// console.log(values);

// const entries = Object.entries(openingHours)

// console.log(entries);


// // [key,value]

// for(const [key,{open,close}] of entries){
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
  
// }

// sdkey and the value
// console.log(restaurant.openingHours?.mon?.open);



// const days = ['mon','tue','wed','thu','fri','sat','sun']

// days.forEach((day)=>{
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed'
//   console.log(`on ${day} we open at ${open}`);
  

  
// })


// // methods

// console.log(restaurant.order?.(1,0) ?? 'Method does not exists'); 
// console.log(restaurant.orders?.(1,0) ?? 'Method does not exists'); 


// // arrays
// const users  = [
//   {name:'jonas', email:'jonas@gmail.com'}
// ]

// console.log(users[0]?.name ?? 'user array empty');




//  lldkflkd sdkfjklds kdjfi not a funcitiok dfdsfkjlskdf 

// const menu = [...restaurant.starterMenu,...restaurant.mainMenu]

// for(const item of menu){
//   console.log(item);
  
// }

// for(const [i,item] of menu.entries()){
//   console.log(`${item[0]+1}:${item[1]}`);
  
// }

// dlf;sfof the course ksldkf k menu.entries of the menu loop now is well this new array 

// const rest1 = {
//   name:'Capri',
//   numGuests :0
//   // numGuests :20
// }
// const rest2 = {
//   name:'La Piazza',
//   owner:'Giovani'
// }

// // OR

// // rest1.numGuests = rest1.numGuests || 10
// // rest2.numGuests = rest2.numGuests || 10

// // rest1.numGuests ||=10
// // rest2.numGuests ||=10

// // nullish assignment operator

// rest1.numGuests ??=10
// rest2.numGuests ??=10

// // rest1.owner = rest1.owner && '<ANONYMOUS>'
// // rest2.owner = rest2.owner && '<ANONYMOUS>'

// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'

// console.log(rest1);
// console.log(rest2);
 

// use any datatype return any datatype short-circuiting




// console.log('---------------------------OR--------------------');


// console.log((3 || 'jonas'));
// console.log(''|| 'jonas');
// console.log(undefined || null);

// console.log(undefined || 0 ||''||'hello'||23);

// // const guessts1 = restaurant.numGuests ? restaurant.numGuests:10;

// // console.log(guessts1);


// const guest2=restaurant.numGuests || 20
// console.log(guest2);

// restaurant.numGuests = 0

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);



// console.log('---------------------------AND--------------------');

// // xcfvxcdfdsczxccxzxcxccxczczxcxxczxczxczx sd
// console.log(0 && 'Jonas');
// console.log(7 &&'Jonas');
// console.log(8 && 9);


//  console.log('helo' && 23 && null && 'jonas');

// // if(restaurant.orderPizza) {
// //     restaurant.orderPizza('mushroom','spinach')
// // }
 
// restaurant.orderPizza && restaurant.orderPizza('spinch')



// // restaurant.orderPizza('mushrooms','onions','spinach')
// // restaurant.orderPizza('olive') ok




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
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
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


// kdfksfkkdfkkjsfjkkjjkjsdfkjsdjfkj kdkfjkjlkjlkjsdfkljdfsdkfjlksksfkldflslflksdf skfsdkfl sldkfldkf dkflskdklskflklksjfslkdjf

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // dfdfdsdfsdfdfsdfsdf

// let openStr = `we are open on ${properties.length} days`
// for(const day of Object.keys(openingHours)){
//   openStr += ` ${day} , `
  
// }

// for(const [key,{open,close}] of entries){
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
  
// }

// const entries = Object.entries(openingHours)


// game.scored.forEach((player,index)=>{
//   console.log(`goal ${index+1} ${player}`);
  
// })

// for(const [i,player] of game.scored.entries()){
//   console.log(`Goal ${i+1}:${player}`); 
  
// }


// const oddEntries = Object.entries(game.odds)
// const oddProps = Object.keys(game.odds)

// console.log(oddProps.length); 


// console.log(oddEntries);

// let sum = 0
// let avg = 0

// for(const[oddName,val] of oddEntries){
//   sum += val  

// } 

// avg = sum / oddProps.length

// console.log(avg);

// let avg = 0;

// for(const odd of Object.values(game.odds)){
//   avg +=odd
// }
//   avg /= Object.values(game.odds).length
//   console.log(avg);
  

// const oddStr = `odd of  `

// for(const[oddName,val] of oddEntries){
//   console.log(`${oddStr} victory ${game.team1}: ${val}`);
  

// } 



// for(const [team,odd] of Object.entries(game.odds)){
//   const teamStr = team ==='x'? 'draw' : `victory ${game[team]}`
//   console.log(`odd of ${teamStr} ${odd}`);
  

// }

// let scorers = {}

// game.scored.forEach((player)=>{
//   scorers[player] ? scorers[player]++ : scorers[player] = 1
// })

// console.log(scorers);


// oddEntries.forEach((entry)=>{
//   console.log(...entry);
  
// })

// let [player1,player2] = game.players
// console.log(player1.length,player2.length);


// console.log(player1,player2);

// const [gk,...fieldPlayers] = player1

// console.log(gk,fieldPlayers);


// const allPlayers = [...player1,...player2]

// console.log(allPlayers);

// const playersFinal = [...player1,'Thiago','Coutinho','Perasic']

// console.log(playersFinal);

// const {team1,x:draw,team2} = game.odds

// console.log(team1,draw,team2);

// function printGoals(...players){
  
//   console.log(`${players.length} goals were scored`);
  
// }

// printGoals(...game.scored)
// printGoals('lewendows','muller') 

// team1 < team2 && console.log('team 1 is more likely to win');
// team1 > team2 && console.log('team 2 is more likely to win');


//lkmlkkmlm



// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);



// const events = [...new Set(gameEvents.values())]

// console.log(events);

// gameEvents.delete(64)


// const time = [...gameEvents.keys()].pop()



// console.log(`An event happened, on average, every ${time/ gameEvents.size} minutes`);


// gameEvents.forEach((event,i)=>{

//   const half = i < 45 ? '[FIRST HALF]':'[SECOND HALF]'
  
//   console.log(`${half} ${i} : ${event}`);
  
  
// })



// Strings



//   const airline = 'TAP Air Portugal'

//   const plane = 'A320'

//   console.log(plane[0]);
//   console.log('BG45'[0])
//   console.log(airline.length);

//   console.log(airline.indexOf('r'));
//   console.log(airline.lastIndexOf('r'));

//   console.log(airline.indexOf('Portugal'));
  
//    console.log(airline.slice(4));

//   console.log(airline.slice(0,airline.indexOf(' ')));
//   console.log(airline.slice(airline.lastIndexOf(' '),airline.length));
  
//   console.log(airline.slice(-2));
//   console.log(airline.slice(1,-2));
  
// console.log(  airline.includes('P'));
  

//   const checkMiddleSeat = (seat)=>{
//     // B and E are Middle seat
//    const middle =  seat.includes('B') || seat.includes('E') ? 'middle' :'not middle'

//    console.log(middle);
   
//   }


//   checkMiddleSeat('11B')
//   checkMiddleSeat('11c')
//   checkMiddleSeat('11E')

//   console.log(typeof new String('jerin'));
  
//   console.log(typeof new String('Jerin').slice(-1));
  
//   console.log(airline.toLowerCase());
//   console.log(airline.toUpperCase());
//   console.log(airline.toLocaleLowerCase());

//   let passanger = 'jOnaS'
//   passanger = passanger.toLowerCase()
//   passanger = passanger[0].toUpperCase()+passanger.slice(1)
   

//   console.log(passanger);
  
//   // Comparing  emails

//   const email = 'hello@jonas.io'
//   const loginEmail = ' Hello@Jonas.Io \n'
//   const lowerEmail = loginEmail.toLowerCase()
//   const trimmedEmail = lowerEmail.trim()
//   console.log(trimmedEmail);
  
  
// const normalizedEmail = loginEmail.toLowerCase().trim()

// console.log(normalizedEmail);

// console.log(email === normalizedEmail);

// // relpacing

// const priceGB = '288,97'
// const priceUS = priceGB.replace(',','')

// console.log(priceUS);

 

// const announcement = 'All passengers come to boarding door 23. Boarding door 23';



// console.log(announcement.replaceAll('door','gate'));
// console.log(announcement.replace(/door/g,'gate'));

// // Booleans

// const plane1 = `Airbus A320neo`

// console.log(plane1.includes('A320'));
// console.log(plane1.startsWith('Air'));


// if(plane1.startsWith('Airbus') && plane1.endsWith('neo')){
//   console.log('Part of the new Airbus family');
  
// }


// // practice Exercise

// const checkBaggage = function(items){
//   const baggage = items.toLowerCase()

//   if(baggage.includes('knife') || baggage.includes('gun')){
//     console.log('You are not allowed');
    
//   }
//   else{
//     console.log('Welcome aboard');
    
//   }
// }


// // 

// checkBaggage('I have a laptop,some Food and a pocket Knife')
// checkBaggage("I have asocks and camera")
// checkBaggage("Got some snacks and gun for protection") 

// console.log(('a+very+nice+string'.split('+')));
// console.log('jerin wilson'.split(' '));
 
// const [firstName,lastName] = 'Jerin Wilson'.split(' ')

// console.log(firstName,lastName);


// const newName = ['Mr.',firstName, lastName.toUpperCase()].join(' ')

// console.log(newName);
 
// const capitalizeName = (name)=>{
//   const names = name.split(' ')

//   const namesUpper = []

//   for(const n of names){
//   //  namesUpper.push(n[0].toUpperCase()+n.slice(1))
//    namesUpper.push(n.replace(n[0],n[0].toUpperCase()))
//   }

//   // padding

//   const message = 'Go to gate 23'
//   console.log(message.padStart(25,'+').padEnd(35,'*'));

//   const maskCreditCard = (number)=>{
//     const str = number+'';
//     const last = str.slice(-4)
//     return last.padStart(str.length, '*')
    
//   }

//   console.log(maskCreditCard(4337154654543154))
//  console.log(maskCreditCard('54654543468786'))

  

//   console.log(namesUpper.join(' '));
  
// }

// capitalizeName('jessica ann smith davis')
// capitalizeName('jerin wilson')

// // Repeat

// const message2 = 'Bad weather... All Departues will be delayed...'

// console.log(message2.repeat(4));


// const planesInLine = function(n){
//   console.log(`There are ${n} planes in line ${'*'.repeat(n)}`);
  
// }

// planesInLine(5)
// planesInLine(50)
// planesInLine(52)
// planesInLine(45)

// // kdkfdskfl;sdf;lsdkfs;ldfkslfsldkfslfks;ldkfslkdfslkdflskdfsl;dkfssldkfs;ldkfslkfs;ldfkssfks;ldf;lsdkfldfk sdlfk;lsdf sdlfkls;d sldkf;lsd slsssssssssssssssssssssssssslslk;lskf;lldkflfs;dlkfsd;lkfdl;kfs;ldfk;sldkfdl;fklsld;kfllsd;dldfk l.,czc,.xl;dk;ldsf,.cmz.,x sdmc;lc,mcl dmc;lds dmc;ldsmc.,mc;sldc mc;lsdm.m


// const camelCase = (str)=>{
//   str.replace
// }

// const name1 = 'jerin_wilson'

//  const [first,second ] = name1.split('_')

//   console.log(name1.split('_'));

//   const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`
//   console.log(output);
  
// // ldf;sdfldf;llsf;ldllf;sdlfl;sldf;lsdfldkfldkdklksdf mkjjnkjnkjn jnkj klkdknslnvkdnvlj lets add another one here ok emoji 


const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";


  // console.log(flights.split('+'));
 
  const getCode = str=> str.slice(0,3).toUpperCase();
  
 for(const flight of flights.split('+')){

  const [type,from,to,time] = flight.split(';')

  const output = `${type.startsWith('_Delayed') ? 0 : ''}${type.replaceAll('_'," ")} from ${getCode(from)} to ${getCode(to)} (${time.replace(':','h')})`.padStart(36)
  

  console.log(output);
   
  
 }

