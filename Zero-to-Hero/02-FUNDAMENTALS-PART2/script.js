'use strict';

// let hasDriversLicence = false
// const passTest = true

// if(passTest) hasDriversLicence = true

// if(hasDriversLicence) console.log('I can Drive :D');



// function logger(){
//     console.log('My name is Jonas');
    
// }

// calling /running /invoking function
// logger(); 
// logger();


// function fruitProcessor(apples,oranges){
//     console.log(apples,oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0)
// console.log(appleJuice);


// const appleOrangeJuice = fruitProcessor(2,4)
// console.log(appleOrangeJuice);

//  const num = Number('23')
// console.log(num);

// dfksdfk capture think about anf analyse over and over again 


// const calcAge = function (birthYear){
//     return 2037 - birthYear
// }

// Arrow function

// const calcAge2 = birthYear=> 2037 -birthYear
// const age2 = calcAge2(1991);
// console.log(age2);

// const YearsUntilRetirement = (birthYear,firstName) =>{
//     const age = 2037-birthYear    
//     const retirement = 65 - age
//     // return retirement
//     return `${firstName} has ${retirement} years left for retirement`
// }

// console.log(YearsUntilRetirement(1991,'jerin'));

// const cutFruitPieces = (fruit)=>{
//     return fruit * 4
// }

// function fruitProcessor(apples,oranges){
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
//     return juice;
// }  

// console.log(fruitProcessor(2,3));


// const calcAge = (currentYear,birthYear)=>{
    
//     return currentYear-birthYear
// }

// const YearsUntilRetirement = (birthYear,firstName) =>{
//     const age = calcAge(2037,birthYear)    
//     const retirement = 65 - age < 0 ? -1: 65-age
//     // return retirement
//     return `${firstName} has ${retirement} years left for retirement`
// }

// console.log(YearsUntilRetirement(1991,'jerin'));
// console.log(YearsUntilRetirement(1970,'jerin')); 

// const calcAverage = (scoreA,scoreB,scoreC)=>{
//     return (scoreA+scoreB+scoreC)/3
// }

// const checkWinner = (DolphinScore,KolasScore)=>{
    
//     if(DolphinScore >=(2*KolasScore)){
//         console.log('Dolphin win the trophy');
        
//     }
//     else if(KolasScore >=(2*DolphinScore)){
//         console.log('Kolas win the trophy');

        
//     }
//     else{
//         console.log('No team win the trophy');
//     }
// }

// const scoreDolphins = calcAverage(44,23,71)
// const scoreKoalas = calcAverage(85,54,41)

// checkWinner(scoreDolphins,scoreKoalas)



// const friends = ['Micheal','Steven','Peter']

// console.log(friends);


// const years = new Array(1991,1992,1993,1994,1995)

// console.log(years);

// console.log(friends[friends.length - 2]);

// friends[2] = 'John'
// console.log(friends);

// friends.push('david')
// console.log(friends);

// friends.splice(2,0,'alex')

// console.log(friends);

// const firstName = 'Jerin'

// const jonas = [firstName,'Wilson',2037-1991,'teacher',friends]

// console.log(jonas);




// const calcAge = (currentYear,birthYear)=>{
//    return currentYear-birthYear
// }

// const years = [1990,1967,2002,2010,2018]

// const age = years.map(year=>calcAge(2037,year))

// console.log(age);


//  const friends = ['Micheal','Steven','Peter']

// //  add elements
//  friends.push('Jay')
//  friends.unshift('John')
//  console.log(friends);

// // pop

// friends.pop()
// friends.shift()

// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf(5));

// if(friends.includes('Peter')){
//     console.log('You have a friend name peter');
    
// }


// const calcTips = (bills)=>{
    
//     const tips = bills.map(bill=>
//         bill > 50 && bill < 300 ? bill * 0.15 : bill *0.2
//     )
//     return tips
// }


// const bills = [125,555,44]

// const tips = calcTips(bills)

// console.log(tips);
 
// const total = bills.map((bill,index)=>bill+tips[index])

// console.log(total);


//  const jerin = {
//     firstName:"Jerin",
//     lastName:'Wilson',
//     age:2037-1991,
//     job:'teacher',
//     friends:['Micheal','Peter','Steven']
//  }
 
//  console.log(jerin.age); 
 
//  console.log(jerin.lastName); 
//  console.log(jerin['lastName']);
 
 
//  const nameKey = 'Name'

//  console.log(jerin['first'+nameKey]);
//  console.log(jerin['last'+nameKey]);
 
//  const interestedIn = prompt('what do you want to know about Jerin? Choose between firstName,lastName,age,job,and friends')

//  console.log(interestedIn);
 
//  if(jerin[interestedIn]){

//      alert(jerin[interestedIn]) 
//  }
//  else{
//     alert('Choose between firstName,lastName,age,job,and friends')
//  }


//  jerin.location = 'India'
//  jerin['phone'] = 99999999

//  console.log(jerin);
 

//  console.log(`${jerin.firstName} has ${jerin.friends.length}, and his best friend is called ${jerin.friends[0]}`);
 


// const jerin = {
//     firstName:"Jerin",
//     lastName:'Wilson',
//     birthYear:1991,
//     job:'teacher',
//     friends:['Micheal','Peter','Steven'],
//     hasDrivingLicense:true,
//     calcAge:function(){
        
//         this.age = 2037-this.birthYear
//         console.log(this.age);
        
//         return this.age
//     },
//     getSummary:function(){
//         this.summary = `${this.firstName} is a ${this.age}-year old ${this.job},and he has ${this.hasDrivingLicense ? 'a' : 'no'} driving licence`
//     }
//  }

//  console.log(jerin); 
//  jerin.calcAge()
//  console.log(jerin.age);
//  console.log(jerin.getSummary()); 
//  console.log(jerin.summary);


 
//  const mark = {
//     fullName:"Mark Miller",
//     mass:78,
//     height:1.69,
//     calcBMI:function(){
//         this.bmi =this.mass / (this.height * this.height)
//         return this.bmi
//     }
//  }

//  const john = {
//     fullName:"John Smith",
//     mass:92,
//     height:1.95,
//     calcBMI:function(){
//         this.bmi =this.mass / (this.height * this.height)
//         return this.bmi
//     }
//  }
 


//  mark.calcBMI()
//  john.calcBMI()


// const markHigherBMI = mark.bmi > john.bmi

// if(markHigherBMI){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
    
// }

// else{
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);

// }

// for (let i=0;i<30;i++){

//     console.log(`Lifting weights repetition ${i}`);
// }

// for(let rep = 1;rep <= 10;rep++){
//         console.log(`Lifting weights repetition ${rep}`);

// }

// const jerin = [
//     'Jerin',
//     'Wilson',
//     2037-1991,
//     'teacher',
//     ['Micheal','Peter','Steven']
// ]

// const types=[]

// for(let i=0;i<=jerin.length;i++){
//     console.log(jerin[i]);
//     types.push(typeof(jerin[i]))
     
// }

// console.log(types);


// const years = [1991,2007,1969,2020]

// const ages=[]
 
// for(let i=0;i<years.length;i++){
//     ages.push(2037-years[i])
// }

// console.log(ages);
 

// continue and break
// console.log('---------only strings----------');

// for(let i=0;i<=jerin.length;i++){
//     if(typeof jerin[i] !== 'strings') continue;
//     console.log(jerin[i],typeof (jerin[i]));     
// } 
// console.log('---------Break with number----------');

// for(let i=0;i<=jerin.length;i++){
//     if(typeof jerin[i] === 'number') break;
//     console.log(jerin[i],typeof (jerin[i]));     
// } 


// const jerin = [
//     'Jerin',
//     'Wilson',
//     2037-1991,
//     'teacher',
//     ['Micheal','Peter','Steven']
// ]



// for(let i=jerin.length-1;i>=0;i--){
//     console.log(jerin[i]);   
// } 

// for(let exercise = 1;exercise < 4;exercise++){
//     console.log(`-----Starting Exercise ${exercise}`);
//     for(let rep =1;rep<6;rep++){
//         console.log(`Exercise ${exercise} lifting weights repetation ${rep}`);
        
//     }
// }

// for(let rep =1;rep<6;rep++){
//     console.log(`lifting weights repetation ${rep}`);
    
// }

// let rep = 1

// while(rep < 6){
//     console.log(`lifting weights repetation ${rep}`);  
//     rep++;
// }


// let dice = Math.trunc(Math.random() * 6)

// while(dice !== 6){
//     console.log(`you rolled a ${dice}`);
//    dice =Math.trunc(Math.random()*6) +1
//    if(dice === 6) console.log('loop is about to end');
   
// }

// const calcTip = (bill)=>{
//     return bill > 50 && bill < 300 ? bill * 0.15:bill*0.2
// }

// const calcAverage = (totals)=>{
//     let sum =0;

//   for(let i=0;i<totals.length;i++){
//     sum += totals[i]
//    }

   
//     return sum/totals.length
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips=[]
// const totals=[]

// for(let i=0;i<bills.length;i++){
//     tips.push(calcTip(bills[i]))
//     totals.push(tips[i]+bills[i])
// }

// const avg = calcAverage(totals)

//  understand the code