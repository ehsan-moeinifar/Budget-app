const pageTitle = document.querySelector('.page_title');
const budget = document.querySelector('.budget');
const incomeAmount = document.querySelector('.income_amount');
const expenseAmount = document.querySelector('.expense_amount');
const selectType = document.querySelector('.add_type');
const moneyTitle = document.querySelector('.money_title');
const moneyValue = document.querySelector('.money_value');
const incomeList = document.querySelector('.income_list');
const expenseList = document.querySelector('.expense_list');
const checkIcon = document.querySelector('.check_icon');
let budgetValue = 0;
let totalIncome = 0;
let totalExpense = 0;
selectType.addEventListener('change', function() {
    // change check icon color and input hover
    if (selectType.value === "-") {
      checkIcon.style.color = "#FF5049";
      moneyTitle.classList.add('red-hover');
      moneyValue.classList.add('red-hover');
      moneyTitle.classList.remove('green-hover');
      moneyValue.classList.remove('green-hover');
    } else {
      checkIcon.style.color = "#28B9B5";
      moneyTitle.classList.add('green-hover');
      moneyValue.classList.add('green-hover');
      moneyTitle.classList.remove('red-hover');
      moneyValue.classList.remove('red-hover');
    }
  });
checkIcon.addEventListener('click', function() {
    if(moneyTitle.value == "" || moneyValue.value == "") {
        alert("Please add a description and value");
    } else {
        if(selectType.value == "+"){
            totalIncome += Number(moneyValue.value);
            budgetValue += Number(moneyValue.value);
            incomeAmount.textContent = totalIncome + '.00';
            if(budgetValue > 0){
                budget.textContent = 'budget: '+'+' + budgetValue + '.00';
            }else{
                budget.textContent = budgetValue + '.00';
            }
            // Create elements
            const incomeAmountValue = document.createElement('span');
            incomeAmountValue.textContent = '+' + moneyValue.value + '.00';
            const incomeAmountTitle = document.createElement('span');
            incomeAmountTitle.textContent = moneyTitle.value;
            incomeAmountTitle.classList.add('class-list_item__title');
            const incomeListItem = document.createElement('div');
            incomeListItem.classList.add('class-list_item');
            const deleteItem = document.createElement('img');
            deleteItem.classList.add('income_delete-icon');
            deleteItem.setAttribute('src', "./assets/incomeDelete.svg");
            incomeListItem.appendChild(incomeAmountTitle);
            incomeListItem.appendChild(incomeAmountValue);
            incomeListItem.appendChild(deleteItem);
            
            // Append to income list
            incomeList.appendChild(incomeListItem);
            deleteItem.addEventListener('click', function() {
                incomeListItem.remove();
                budgetValue -= (Number(deleteItem.parentElement.children[1].textContent));
                totalIncome -= Number(deleteItem.parentElement.children[1].textContent);
                incomeAmount.textContent = totalIncome + '.00';
                if(budgetValue > 0){
                    budget.textContent = 'budget: '+'+' + budgetValue + '.00';
                }else{
                    budget.textContent = 'budget: ' + budgetValue + '.00';
                }
              });
        }
        else if(selectType.value == "-"){
            totalExpense += Number(moneyValue.value);
            budgetValue -= Number(moneyValue.value);
            expenseAmount.textContent = '-' + totalExpense + '.00';
            if(budgetValue > 0){
                budget.textContent = 'budget: '+'+' + budgetValue + '.00';
            }else{
                budget.textContent = 'budget: ' + budgetValue + '.00';
            }
            // Create elements
            const expenseAmountValue = document.createElement('span');
            expenseAmountValue.textContent = '-' + moneyValue.value + '.00';
            const expenseAmountTitle = document.createElement('span');
            expenseAmountTitle.textContent = moneyTitle.value;
            expenseAmountTitle.classList.add('class-list_item__title');
            const incomeListItem = document.createElement('div');
            incomeListItem.classList.add('class-list_item__2');
            const deleteItem = document.createElement('img');
            deleteItem.classList.add('expense_delete-icon');
            deleteItem.setAttribute('src', "./assets/incomeDelete.svg");
            incomeListItem.appendChild(expenseAmountTitle);
            incomeListItem.appendChild(expenseAmountValue);
            incomeListItem.appendChild(deleteItem);
            // Append to income list
            expenseList.appendChild(incomeListItem);
            deleteItem.addEventListener('click', function() {
                incomeListItem.remove();
                budgetValue += (Number(deleteItem.parentElement.children[1].textContent)
                *-1);
                totalExpense += (Number(deleteItem.parentElement.children[1].textContent));
                expenseAmount.textContent = '-'+totalExpense + '.00';
                budget.textContent =  'budget:'  + budgetValue + '.00';
              });
        }
        moneyTitle.value = "";
        moneyValue.value = "";
    }
});
