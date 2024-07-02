"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2024-06-25T14:11:59.604Z",
    "2024-06-28T17:01:17.194Z",
    "2024-06-29T23:36:17.929Z",
    "2024-07-01T10:51:36.790Z",
  ],
  currency: "EUR", 
  locale: "pt-PT", // de-DE   
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

console.log(accounts);


// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


let currentAccount,timer


// LOGOUT TIMER

const startLogOutTimer = ()=>{


  const tick = ()=>{

    const min = String(Math.trunc(time / 60)).padStart(2,0)
    const sec = String(time % 60).padStart(2,0)


    // In each call print the remaining time  to UI

    labelTimer.textContent = `${min}:${sec}`

    //decrease 1 sec


    // when 0 seconds stop timer and logout user

    if(time === 0){
      clearInterval(timer)
      containerApp.style.opacity = 0
      labelWelcome.textContent = 'Log in to get started'
    }

    time--


  }

  // set time to 5mns

  let time = 10;

  // call the timer every second

  tick();
   timer = setInterval(tick,1000) 
  return timer
}


// FORMAT DATE

const formatMovementDate = (date,locale)=>{
  
  const calcDaysPassed =(date1,date2)=>Math.round(Math.abs(date1-date2) / (1000 * 60 * 60 * 24))

  const daysPassed = calcDaysPassed(new Date(), date)
   if(daysPassed === 0) return 'Today'
   if(daysPassed === 1) return 'Yesterday'
   if(daysPassed <= 7)  return `${daysPassed} days ago`
 
  
  return new Intl.DateTimeFormat(locale).format(date); 
}

const formatCur = (value,locale,currency)=>{
  return new Intl.NumberFormat(locale,{
    style:'currency', 
    currency:currency,
  }).format(value)

}


const displayMovements = (acc, sort = false) => {


  
  
  containerMovements.innerHTML = "";


  
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
    
    

  movs.forEach((movements, i) => {
    
    const type = movements > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date,acc.locale);
    

    const formattedMov = formatCur(movements,acc.locale,acc.currency)
  
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">${displayDate}</div>

          <div class="movements__value">${formattedMov}</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcPrintBalance = (acc) => {
  acc.balance = acc.movements.reduce((acc, mov) => (acc += mov), 0);


 
  labelBalance.textContent = formatCur(acc.balance,acc.locale,acc.currency); 
};

const createUserNames = (accounts) => {
  accounts.forEach((account) => {
    account.userName = account.owner
      .toLowerCase()
      .split(" ")
      .map((names) => names[0])
      .join("");
  });
};

const calcSummary = (acc) => {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, curr) => (acc += curr));
  labelSumIn.textContent = formatCur(incomes,acc.locale,acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => (acc += curr));

  labelSumOut.textContent = formatCur(Math.abs(out),acc.locale,acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest,acc.locale,acc.currency);
};


const userAuthentication = (e) => {
  e.preventDefault();



const now = new Date()
const options = {
  hour:'numeric',
  minute:'numeric',
  day:'numeric',
  month:'numeric',
  year:'numeric',
} 




  const userName = inputLoginUsername.value;
  const userPin = inputLoginPin.value;


  
  
 
  
  currentAccount = accounts.find((acc) => acc.userName === userName);
  
  if (currentAccount?.pin === Number(userPin)) {
    // Display ui and welcome message

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale,options).format(now)

    
    
    
    containerApp.style.opacity = 100;

    // clear the input fields

    inputLoginUsername.value = "";
    inputLoginPin.value = "";

    inputLoginPin.blur();

    // Display movements
    

    displayMovements(currentAccount);

    // Display balance
    calcPrintBalance(currentAccount);

    // display summary

    calcSummary(currentAccount);

    console.log("login");
  }

  if(timer) clearInterval(timer)
  timer = startLogOutTimer()

  console.log("Authentication");
  updateUI(currentAccount)

};

const updateUI = (currentAccount) => {
 
  
  
  displayMovements(currentAccount);
  calcPrintBalance(currentAccount);
  calcSummary(currentAccount);
};

// TRANSFERING AMOUNTS

const transferAmount = (e) => {
  e.preventDefault();

  const transferAmount = Number(inputTransferAmount.value);

  const reciever = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );


  if (
    reciever &&
    currentAccount.balance >= transferAmount &&
    reciever?.userName !== currentAccount.userName &&
    transferAmount > 0
  ) {
    console.log("TRANSER");

    reciever.movements.push(transferAmount);
    currentAccount.movements.push(-transferAmount);

    // TranferDate

    currentAccount.movementsDates.push(new Date().toISOString())
    reciever.movementsDates.push(new Date().toISOString())

    inputTransferAmount.value = "";
    inputTransferAmount.blur();
    inputTransferTo.value = "";

    updateUI(currentAccount);

    // Reset timer

    clearInterval(timer)
    timer = startLogOutTimer();
   
  } else {
    console.log("invalid");
  }
};

const accClose = (e) => {
  e.preventDefault();

  const userName = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);

  if (currentAccount.userName === userName && currentAccount.pin === pin) {
    console.log("Valid");

    const index = accounts.findIndex(
      (acc) => acc.userName === currentAccount.userName
    );


    accounts.splice(index, 1);


    containerApp.style.opacity = 0;

    inputCloseUsername.value = inputClosePin.value = "";
  }
};

const applyLoan = (e) => {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

  setTimeout(()=>{

    if (amount > 0) {
      const loanApproved = currentAccount.movements.some(
        (mov) => mov >= amount * 0.1
      );
  
      if (loanApproved) {
        currentAccount.movements.push(amount);
  
        currentAccount.movementsDates.push(new Date().toISOString())
  
        updateUI(currentAccount);
      }
      inputLoanAmount.value = 0;
    }

    clearInterval(timer)
    timer = startLogOutTimer();
  },2500)
 
};


let sorted = false;






btnLogin.addEventListener("click", userAuthentication);
createUserNames(accounts)


btnTransfer.addEventListener("click", transferAmount);

btnClose.addEventListener("click", accClose);

btnLoan.addEventListener("click", applyLoan);

btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  console.log(sorted);

  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(12 === 12.0);

// // Base 10 - 0 to 9
// console.log(0.1+0.2);
// console.log(+'23');

// // Parsing

// console.log(Number.parseInt('  30px   '));
// console.log(Number.parseFloat('  2.5rem'));
// console.log(isNaN(20));

// // checking if the value is number
// console.log(isFinite(20));

// MATH ROUND

// console.log(Math.sqrt(25));

// console.log(Math.max(1,5,6,4,8,121,5))
// console.log(Math.min(1,5,6,4,8,121,5))

// console.log(Math.PI * Number.parseFloat('10ps') **2);

// console.log(Math.trunc(Math.random()*6)+1);

// const randomInt=(min,max)=>Math.trunc(Math.random()*(max-min)+1)+min

// // console.log(randomInt(10,20));

// // Rounding integers

// console.log(Math.trunc(230.054515));
// console.log(Math.round(23.6));
// console.log(Math.ceil(23.1));

// console.log(Math.floor(27.8));

// // rounding decimals

// console.log((2.7).toFixed(3));

// REMAINDER OPERATOR

// console.log( 7 % 4);
// console.log(8 % 3); // 8 =2*3+2

// console.log(6 % 2);

// console.log(7%2);
// console.log(7/2);

// const isEven = n=>n%2 ===0

// console.log(isEven(4));

// labelBalance.addEventListener('click',()=>{

//   [...document.querySelectorAll('.movements__row')].
//   forEach((row,i)=>{
//     if(i % 2 ===0) row.style.backgroundColor = 'orangered'
//     if(i % 3 ===0) row.style.backgroundColor = 'blue'
//   })
// })

// 287,460,000,00

// NUMERIC SEPEARATOR

// const diameter = 287_460_000_00;

// console.log(diameter);

// const price = 345_99
// console.log(price);

// const transferFee = 15_00;
// const transferFee1 = 1_500;

// const PI = 3.14_15

// console.log(PI);

// console.log(Number('230_000'));

// BIG INT

// console.log(2 ** 53-1);
// console.log(Number.MAX_SAFE_INTEGER);

// console.log(754653464654654216565552111151513215n);

// console.log(BigInt(5465435565));

// // OPERATIONS

// console.log(10000n +10000n);

// console.log(35465465432156456565465432465454n + 6546546546546486454654864654n);
//sd

// DATES

// Create a date

// const now  = new Date();
// console.log(now);

// console.log(new Date('Jul 01 2024 17:19:50'));

// console.log(account1.movementsDates[0]);
// console.log(new Date(2037,10,30));

// working with the dates

// const future = new Date(2037,10,19,15,23)

// console.log(future);

// console.log(future.getFullYear());
//  console.log(future.getMonth());
//  console.log(future.getDay());
//  console.log(future.getDate());

//  console.log(future.toISOString());
//  console.log(future.getTime());

//  console.log(Date.now());

//  future.setFullYear(2040)

// const future = new Date(2037,10,19,15,23)

// console.log(Number(future));

const calcDaysPassed =(date1,date2)=>Math.abs(date1-date2) / (1000 * 60 * 60 * 24)

const days1 = calcDaysPassed(new Date(2024,4,20),new Date(2024,6,2))

console.log(days1);


// const num = 3884564.23

// const options = {
//   style:'currency', 
//   unit:'celsius',  
//   currency:'EUR' ,
// }  


// console.log('US      ',new Intl.NumberFormat('en-US',options).format(num));
// console.log('Germany ',new Intl.NumberFormat('de-DE',options).format(num));
// console.log('Browser ',new Intl.NumberFormat(navigator.language,options).format(num));
 

// TIMERS

// const ingrediants = ['olives','']

// const pizzaTimer = setTimeout((ing1,ing2)=>console.log(`here is your pizza with ${ing1} and ${ing2}`)
// ,3000,...ingrediants)

// console.log('Waiting...');

// if(ingrediants.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval(()=>{
//   const now = new Date();

//   const options = {
//     hour:'numeric',
//     minute:'numeric',
//     second:'numeric'  
//   }
//   console.log(new Intl.DateTimeFormat('en-US',options).format(now));
    
// },1000) 




// after 2sec the settimeout function calls the callback function
// dklsflsdfkllsdfsdfsc cscdfsdf sdfsdfdfdfsdfdfssdf zczxc
