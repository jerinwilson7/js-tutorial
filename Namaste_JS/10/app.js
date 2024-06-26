// function x(){
//     var a=7;
//     function y(){
//         a+=1
//         console.log(a);
        
//     }
//     y()
// }


// everything in js happens inside the execution context

// thread of execution, variable environment 
// javascript is synchronous single threaded language
// one command at a time ina specific order. 



// how the code is executed and callstack

// var n = 2;
// function square(num){
//     var ans = num * num;
//     return ans
// }

// var square2 = square(n)
// var square4 = square(4)

// a global execution context is created
// memory and code 

// callstack maintains the order of execution of execution contexts program stack order of execution of the execution context



// Hoisting


// getName();
// console.log(x);
// console.log(getName); 


// var x =7;

// function getName2(){
// );
 
// }

// const getName = ()=>{
//     console.log('Namaste Javascript');
    
// }

// var x = 7;

// function getName(){
//     console.log("Namaste js");
    
// }

// getName();
// console.log(x);
// console.log(getName);





// Function invokation and variable environment


// global execution context 

// phase 1= memory will be allocated to x a b
// x:undefined, a:{exact functon code},b:{exact function code}

// global execution context is pushed inside the call stack

// 1 will replace undefined , x:1

// a is invoked execution context is created ,pushed to the callstack, x:undefined, when x is executed 10 replaces the undefined. when console is reached js will look for x in local space (that particular execution context) it finds 10 and print it

// now the whole execution context is deleted and now global execution context is one only remains in the call stack

// then b is invoked and it follows the same as a()


// now its time for consoling x the js will looks for the x in local memory and finds its value as one

// then the global execution context also gets poped from the call stack


// fgdfcvdfdfsdf

// var x = 1 
// a();
// b();
// console.log(x);


// function a(){
//     var x = 10;
//     console.log(x);
    
// }

// function b(){
//     var x = 100;
//     console.log(x);
    
// }



// undefined and not defined

// dfiido

// console.log(a);

// var a = 7

// console.log(a);zxc zlclfjs
 

// var a;

// console.log(a);

// if(a === undefined){
//     console.log('a is undefined');
    
// }
// else{
//     console.log('string a is not undefined');
    
// }

// var a;
// console.log(a);
// a=10;
// console.log(a)
// a='hello world';
// console.log(a);


// ------------------scope chain----------------

// scope in js is directly related to lexical environment

function a(){
    var b =10;
    c()
  function c(){
    console.log(b);
    
  }
    
}
a()

// dfsdfsf dfdfsdfsdfsfddfdf dfsdfdfcvcvcvzxczxcxz xcxczczvssv not defineds ss dfsddsf
