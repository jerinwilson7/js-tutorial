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


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const displayMovements = (movements,sort=false)=>{

    containerMovements.innerHTML=''

    const movs = sort ? movements.slice().sort((a,b)=>a-b):movements

    movs.forEach((movements,i)=>{

        const type = movements > 0 ? 'deposit':'withdrawal'

        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__value">${movements}€</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin',html)

    })
 
    
}

const calcPrintBalance = (acc)=>{
     acc.balance = acc.movements.reduce((acc,mov)=>acc+=mov,0)
    
    labelBalance.textContent = `$${acc.balance}`
}




const createUserNames = (accounts)=>{
    accounts.forEach((account)=>{
        account.userName = account.owner.toLowerCase().split(' ').map(names=>names[0]).join('')
})
    
}


const calcSummary = (acc)=>{
  const incomes = acc.movements
  .filter(mov=>mov>0)
  .reduce((acc,curr)=>acc+=curr)
  labelSumIn.textContent = `$${incomes}`


  const out = acc.movements
  .filter(mov=>mov<0)
  .reduce((acc,curr)=>acc+=curr)  

  labelSumOut.textContent = `$${Math.abs(out)}`

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
}





let currentAccount;

const userAuthentication=(e)=>{
  e.preventDefault()
  const userName = inputLoginUsername.value;
  const userPin = inputLoginPin.value;
  
  currentAccount = accounts.find(acc => acc.userName === userName)
if(currentAccount?.pin === Number(userPin)){
  // Display ui and welcome message

  labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
  containerApp.style.opacity = 100

  // clear the input fields

  inputLoginUsername.value = ''
  inputLoginPin.value = ''

  inputLoginPin.blur()
 
  // Display movements

  displayMovements(currentAccount.movements)

  // Display balance
  calcPrintBalance(currentAccount)
 
  // display summary

  calcSummary(currentAccount)

  console.log('login');
  
}


  console.log(currentAccount);
  
    
  console.log('Authentication');
  displayMovements(currentAccount.movements)
  calcPrintBalance(currentAccount)
  calcSummary(currentAccount)
}


const updateUI = () =>{
  displayMovements(currentAccount.movements)
  calcPrintBalance(currentAccount)
  calcSummary(currentAccount)

}

// TRANSFERING AMOUNTS

const transferAmount = (e)=>{
  e.preventDefault()
  
  const transferAmount = Number(inputTransferAmount.value)

  const reciever = accounts.find(acc=>acc.userName === inputTransferTo.value)

  console.log(reciever);

  if(
    reciever &&
     currentAccount.balance >= transferAmount &&
     reciever?.userName !== currentAccount.userName &&
     transferAmount > 0){

      console.log('TRANSER');
      

    reciever.movements.push(transferAmount)
    currentAccount.movements.push(-transferAmount)

    inputTransferAmount.value=''
    inputTransferAmount.blur()
    inputTransferTo.value=''
  
   updateUI();


 
    console.log(reciever);
    console.log(currentAccount);
    
    
  }
  else  {
    console.log('invalid');
    
  }
  
}


const accClose = (e)=>{
  
  e.preventDefault()

  const userName = inputCloseUsername.value
  const pin = Number(inputClosePin.value)

  
  
  if(currentAccount.userName === userName 
    && currentAccount.pin===pin){
      console.log('Valid');

      const index =  accounts.findIndex(acc=>acc.userName===currentAccount.userName)

      console.log(index);

      accounts.splice(index,1)
      
      console.log(accounts);
      
      containerApp.style.opacity = 0

      inputCloseUsername.value = inputClosePin.value = ''

      
    }
}

const applyLoan = (e)=>{

  e.preventDefault()
  const amount = Number(inputLoanAmount.value)
 
  if(amount > 0){

    const loanApproved = currentAccount.movements
    .some(mov=>mov >= amount * 0.1)
  
    if(loanApproved){
      currentAccount.movements.push(amount)
      updateUI();
    }
    inputLoanAmount.value = 0
  }
  
}


let sorted = false


btnLogin.addEventListener('click',userAuthentication)
createUserNames(accounts)

btnTransfer.addEventListener('click',transferAmount)

btnClose.addEventListener('click',accClose)

btnLoan.addEventListener('click',applyLoan)

btnSort.addEventListener('click',(e)=>{
  e.preventDefault();
  displayMovements(currentAccount.movements,!sorted)
  console.log(sorted);
  
  sorted = !sorted
})

// sdasdsdflkfasklczxcnkndfds fsdfsdf dsfsdf dfjkdsfjsjdnjnsdfj


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


/////////////////////////////////////////////////
