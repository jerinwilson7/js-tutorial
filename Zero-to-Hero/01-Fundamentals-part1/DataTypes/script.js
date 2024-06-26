// // let value = true
// // console.log(value);

// // let val

// // console.log(typeof(value));
// // console.log(typeof(23));
// // console.log(typeof('df'));
// // console.log(typeof(val));


// // value = 'hai'
// // console.log(value);

// // console.log(typeof null);



// //let const var

// // let age = 30
// // age = 31  

// // const birthYear = 1991


// // var job = 'programmer'
// // job  = 'Teacher'


// // // dont do this
// //  lastName = 'wilson'
// // console.log(lastName);


// // Operators

// const currentYear = new Date().getFullYear()

// // Math operators

//  const ageJonas = currentYear - 1991

//  const ageSarah = currentYear - 2007
//  console.log(ageJonas,ageSarah);
 
//  console.log(ageJonas * 2,ageJonas / 2);
 

//  const firstName = 'Jerin'
//  const lastName = 'Wilson'

//  console.log(firstName + " " + lastName);
 

//  //Assignment Operators
// //  let x = 10 + 5
// //  x+=10 //x = x+10=25

// //  x *=4
// //  x++
// //  x--
// //  x--


// //  console.log(x);
  

// // //  comparison operators

// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);


// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas,ageSarah);

// console.log(averageAge);


// const massMark = 78;
// const heightMark = 1.69

// const massJohn = 92
// const heightJohn = 1.35

// const BMIMark = massMark / (heightMark * heightMark)

// const BMIJohn = massJohn / (heightJohn * heightJohn)

// console.log("BMI of Mark is",BMIMark);
// console.log("BMI of H=John is",BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn

// if(markHigherBMI){
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's`);
    
// }

// else{
//     console.log(`Johns BMI (${BMIJohn}) is higher than Marks's`);

// }

// string template Literals

// const firstName = "Jonas"
// const job = 'Teacher'
// const birthYear = 1991
// const currentYear = new Date().getFullYear()

// console.log(`I am ${firstName} a ${currentYear-birthYear } old ${job}`);


// const age  = 15;

// const isOldEnough = age >= 18;


// if(isOldEnough){
//     console.log('Sarah can start driving licence');
// }

// else{
//     const yearsLeft = 18 - age

//     console.log(`Sarah is too young. Wait for another ${yearsLeft}`);
    
// }


// const birthYear = 20212;
// let century

// if(birthYear <= 2000){
//     century = 20
// }
// else{
//     century = 21
// }

// console.log(century);


// type conversion

// const inputYear = '1991'
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('jerin'));

// console.log(String(23),23);

// // type coercion

// console.log('i am '+23+' years old');
// console.log('23'-'10'+3);


// let n = '1'+1
// n = n -1
// console.log(n);

// truthy and falsy

// 5 falsy value: 0,'',undefined,null,NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean({}));



// const money = 0;
// if(money){
//     console.log("Don't spend it all;");
    
// }
// else{
//     console.log("you should get a job");
    
// }

// let height

// if(height){
//     console.log('YAY height is defined');
    
// }

// else{
//     console.log('Height is undefined');
    
// }

// const age = 18;
// if(age === 18) console.log('You jush became an adult ');

// const hasDriversLicence = true;
// const hasGoodVision = true

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);


// const shouldDrive = hasDriversLicence && hasGoodVision

// if(shouldDrive){
//     console.log('Sarah is able to drive');
    
// }
// else{
//     console.log('someone else should drive');
    
// }



// const isTired = false; 
// console.log(hasDriversLicence && hasGoodVision && isTired);



// if(hasDriversLicence && hasGoodVision && !isTired){
//     console.log('Sarah is able to drive');
    
// }
// else{
//     console.log('someone else should drive');
    
// }


// const scoreDolphins = (96+108+89) / 3
// const scoreKoalas = (88+91+110) / 3

// if(scoreDolphins > scoreKoalas){
//     console.log('Dolphin win the trophy');
    
// }
// else if(scoreKoalas > scoreDolphins){
//     console.log('Koalas win the trophy');
    
// }

// else{
//     console.log('Both win the trophy');
    
// }

// const day = 'wednesday'

// switch(day){
//     case 'monday':
//         console.log('Plan course structure'); 
//         console.log('GO to coding meetup');
//         break;

//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday' :
//         console.log('write code examples');
//         break
        
//     case 'friday':
//         console.log('record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//             console.log('Enjoy the weekend :D');
//             break;
//     default:
//         console.log('Not a valid day');
                
// }





// const bill = 275;

// const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


// jsjdfj ksjfjiueijoer lkjfsl;a lkjfalkjljaflkadfkl ksdjsdkjfvjdfknk nkdjfk;a;djf;aie;adjf;njjfhgjjdfhgjfhg;agjoridksjdfk jlkj;a;alskdfj cmnvzjglajgalkjeoikdfja;lmcvkfdkljoieitjdsfklkljfd kj;lkdajfkarrays and loops 