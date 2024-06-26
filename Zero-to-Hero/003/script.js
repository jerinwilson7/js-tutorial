'use strict'

// problem 1

// we work for a company building a smart home thermometer. Out most recent task is this :"Given an array of temperatures of one day, calculate the temperature amplitude. keep in mind  that sometimes there might be a sensor error"



// 1) understanding the problem

// -what is temperature altitude? answer: difference between highest and lowest temperature in the array

// -how to calculate max and min temp?

// -what does a sensor error looks like

// 2)Breaking up into subproblems

// -How to ignore errors?
// find max value in temperature array
// find min value int temperature array
// substract min from max (amplitude) and return it


const calcTempAmplitude=(temperatures)=>{
    
    let max = temperatures[0]
    let min = temperatures[0]

    for(let i=0;i<temperatures.length;i++){

        if(typeof temperatures[i] !== 'number') continue;

        if(temperatures[i]> max){
            max = temperatures[i]
        }
        if(temperatures[i]<min){
            min=temperatures[i]
        }
    }
 
    console.log(max,min);
    
    return max - min
     
   
}
const temperatures = [3,-2,-6,-1,'error',9,13,17,15,14,9,5]

 const amplitude = calcTempAmplitude(temperatures);   
 console.log(amplitude);
 




//  problem 2

// function should recive two arrays of temperature
// with two arrays do we have to implement the same functionality twice? Answer:no just merge two arrays

// 2) merge two arrays 



const calcTempAmplitudeNew=(temp1,temp2)=>{

    const temperatures = temp1.concat(temp2)
    
    
    let max = temperatures[0]
    let min = temperatures[0]

    for(let i=0;i<temperatures.length;i++){

        if(typeof temperatures[i] !== 'number') continue;

        if(temperatures[i]> max){
            max = temperatures[i]
        }
        if(temperatures[i]<min){
            min=temperatures[i]
        }
    }
 
    console.log(max,min);
    
    return max - min
     
   
}
const temp1 = [3,-2,-6,-1,'error',9,13,17,15,14,9,5]
const temp2 = [4,-1,-5,-2,'error',3,15,14,22,12,2,6]

 const amplitudeNew = calcTempAmplitudeNew(temp1,temp2);   
 console.log(amplitudeNew);
 



const array1 = ['a','b','c']
const array2 = ['d','e','f']
const array3 = array1.concat(array2)

// sjhldfsdfl;loptrewqwoplf;lsdfk find the bug developer consolekjfgkdf  debugger  

const measureKelvin = function(){
    const measurement = {
        type:'temp',
        unit:'celcius',
        // value:Number(prompt('degrees celsius:'))
        value:10
    }

    console.table(measurement)
    

    const kelvin = measurement.value + 273
    return kelvin
}



console.log(measureKelvin());


const calcTempAmplitudeBug=(temp1,temp2)=>{

    const temperatures = temp1.concat(temp2)
    
    
    let max = temperatures[0]
    let min = temperatures[0]

    for(let i=0;i<temperatures.length;i++){

        if(typeof temperatures[i] !== 'number') continue;

        if(temperatures[i]> max){
            max = temperatures[i]
        }
        if(temperatures[i]<min){
            min=temperatures[i]
        }
    }
 
    console.log(max,min);
    
    return max - min
     
   
}
const tempBug1 = [3,-2,-6,-1,'error',9,13,17,15,14,9,5]
const tempBug2 = [4,-1,-5,-2,'error',3,15,14,22,12,2,6]

 const amplitudeBug = calcTempAmplitudeBug(tempBug1,tempBug2);   
 console.log(amplitudeBug);
 
 function squareDigits(num){

     
     const numStr = num.toString()
     let result=''

    for(let i=0;i<numStr.length;i++){
        const number = parseInt(numStr[i])
        const squared = number * number
        result += squared.toString()
        
    }
 
    return parseInt(result)
    

  }
  let a= 9111

  const nums = squareDigits(a)
 
// const squareDigits = (num) => {
//     // Convert number to string to iterate through each digit
//     const numStr = num.toString();
//     let result = '';

//     // Iterate through each digit
//     for (let i = 0; i < numStr.length; i++) {
//         // Get the digit, square it, and convert back to string
//         const digit = parseInt(numStr[i]);
//         const squared = digit * digit;
//         result += squared.toString();
//     }

//     // Convert the concatenated string of squared digits back to a number
//     return parseInt(result);
// }

// // Example usage:
// console.log(squareDigits(9119)); // Output: 811181
// console.log(squareDigits(765));  // Output: 493625
