const myForm = document.querySelector('#form');
const amountInput = document.querySelector('#amount');
const DescInput = document.querySelector('#desc');
const DropInput = document.querySelector('#drop');
const ExpenseList = document.querySelector('#Expenses');


myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    if(amountInput.value === '' || DescInput.value === '' || DropInput.value === '') {
        alert("Enter full detail");
    } else {
      let Myobj = {
        amount : e.target.amount.value,
        Description : e.target.desc.value,
        Drop : e.target.drop.value
    };
    
    const storedFormData = JSON.parse(localStorage.getItem('Myobj')) || [];
    storedFormData.push(Myobj);
  
    localStorage.setItem(Myobj.amount , JSON.stringify(storedFormData));
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`<span>${amountInput.value}: ${DescInput.value}: ${DropInput.value}</span>`));
      ExpenseList.appendChild(li);
      amountInput.value = '';
      DescInput.value = '';
      DropInput.value = '';

      
  
      // Delete button functionality
      var dltbtn = document.createElement("BUTTON");
      var t = document.createTextNode("Delete User");
      dltbtn.onclick = () =>{
        localStorage.removeItem(Myobj.amount);
        ExpenseList.removeChild(li);
      }
      dltbtn.appendChild(t);
      li.appendChild(dltbtn)
      ExpenseList.appendChild(li);
  
      // Edit button functionality
      var editbtn = document.createElement("BUTTON");
      var t = document.createTextNode("Edit User");
      editbtn.onclick = () =>{
       console.log(document.getElementById('amount').value = Myobj.amount);
        document.getElementById('desc').value = Myobj.desc;
        document.getElementById('drop').value = Myobj.drop;
        localStorage.removeItem(Myobj.amount);
        ExpenseList.removeChild(li);
      }
      editbtn.appendChild(t);
      li.appendChild(editbtn)
      ExpenseList.appendChild(li);
    }
  }
