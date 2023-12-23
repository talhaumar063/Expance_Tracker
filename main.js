const myForm = document.querySelector('#form');
const amount = document.querySelector('#amount');
const desc = document.querySelector('#desc');
const drop = document.querySelector('#drop');
const ExpenseList = document.querySelector('#Expenses');

myForm.addEventListener('submit',addTransaction);

const localStorageTransactions = JSON.parse(localStorage.getItem('Expense'));
  
let Expense = localStorage.getItem('Expense') !== null ? localStorageTransactions : [];

function addTransaction(e){
  e.preventDefault();
  if(amount.value.trim() === '' || desc.value.trim() === '' || drop.value.trim() === ''){
    alert('please add text and amount')
  }else{
    const Myobj = {
      id:generateID(),
      amount:amount.value,
      desc:desc.value,
      drop:drop.value
    }

    Expense.push(Myobj);

    addTransactionDOM(Myobj);
    updateLocalStorage();
    amount.value='';
    desc.value='';
    drop.value='';

  }
}

function generateID(){
  return Math.floor(Math.random()*1000000000);
}

function addTransactionDOM(Myobj) {
  const item = document.createElement("li");

  item.innerHTML = `
    ${Myobj.amount} <span>${Myobj.desc}${Myobj.drop}</span>
    <button class="delete-btn" onclick="removeTransaction(${Myobj.id})">Delete</button>
    <button class="update-btn" onclick="updateTransaction('${Myobj.id}','${Myobj.amount}','${Myobj.desc}','${Myobj.drop}')">Update</button>
    `;
    ExpenseList.appendChild(item);
    amount.value='';
    desc.value='';
    drop.value='';
}

function removeTransaction(id){
  Expense = Expense.filter(Myobj => Myobj.id !== id);
  updateLocalStorage();
  Init();
}
function updateTransaction(id,amount,desc,drop){
  const Myobj = {
    id:generateID(),
    amount:amount.value,
    desc:desc.value,
    drop:drop.value
  }
  console.log(Expense)
  document.getElementById('amount').value = amount;
  document.getElementById('desc').value = desc;
  document.getElementById('drop').value = drop;
  // removeTransaction(transaction.id)

}

function updateLocalStorage(){
  localStorage.setItem('Expense',JSON.stringify(Expense));
}

function Init() {
  ExpenseList.innerHTML = "";
  Expense.forEach(addTransactionDOM);
  //updateValues();
}

Init();