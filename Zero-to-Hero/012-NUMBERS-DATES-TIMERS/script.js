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
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
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

const displayMovements = (acc, sort = false) => {

  
  
  containerMovements.innerHTML = "";


  
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
    
    

  movs.forEach((movements, i) => {
    
    const type = movements > 0 ? "deposit" : "withdrawal";

    

    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();

    // console.log(date,day,month,year);
    
  

    const displayDate = `${day}/${month}/${year}`;
    
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">${displayDate}</div>

          <div class="movements__value">${movements.toFixed(2)}€</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcPrintBalance = (acc) => {
  acc.balance = acc.movements.reduce((acc, mov) => (acc += mov), 0);

  labelBalance.textContent = `$${acc.balance.toFixed(2)}`;
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
  labelSumIn.textContent = `$${incomes.toFixed(2)}`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, curr) => (acc += curr));

  labelSumOut.textContent = `$${Math.abs(out).toFixed(2)}`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

let currentAccount;

const userAuthentication = (e) => {
  e.preventDefault();

  const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = now.getHours();
const minutes = now.getMinutes();

labelDate.textContent = `${day}/${month}/${year}`;
  const userName = inputLoginUsername.value;
  const userPin = inputLoginPin.value;

  console.log(userName);
  console.log(userPin);
  
  
 
  
  currentAccount = accounts.find((acc) => acc.userName === userName);
  
  if (currentAccount?.pin === Number(userPin)) {
    // Display ui and welcome message

    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    
    
    
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

  console.log(currentAccount);

  console.log("Authentication");
  displayMovements(currentAccount);
  calcPrintBalance(currentAccount);
  calcSummary(currentAccount);
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

  console.log(reciever);

  if (
    reciever &&
    currentAccount.balance >= transferAmount &&
    reciever?.userName !== currentAccount.userName &&
    transferAmount > 0
  ) {
    console.log("TRANSER");

    reciever.movements.push(transferAmount);
    currentAccount.movements.push(-transferAmount);

    inputTransferAmount.value = "";
    inputTransferAmount.blur();
    inputTransferTo.value = "";

    updateUI();

    console.log(reciever);
    console.log(currentAccount);
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

    console.log(index);

    accounts.splice(index, 1);

    console.log(accounts);

    containerApp.style.opacity = 0;

    inputCloseUsername.value = inputClosePin.value = "";
  }
};

const applyLoan = (e) => {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0) {
    const loanApproved = currentAccount.movements.some(
      (mov) => mov >= amount * 0.1
    );

    if (loanApproved) {
      currentAccount.movements.push(amount);
      updateUI();
    }
    inputLoanAmount.value = 0;
  }
};

let sorted = false;

// FAKE ALWAYS LOGIN
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;


const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = now.getHours();
const minutes = now.getMinutes();

labelDate.textContent = `${day}/${month}/${year}`;

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
