/* start-jas--------- */
/* // =========input =========== */
const
 income_Input = document.querySelector("#income-input");
const
 food_Input = document.querySelector("#food-input");
const
 rent_Input = document.querySelector("#rent-input");
const 
cloth_Input = document.querySelector("#cloth-input");
const
saving_Input = document.querySelector("#saving-input");

/* // ----disolay -----variable----- */
const
 expense_Display = document.querySelector("#display-expense");
const
 balance_Display = document.querySelector("#display-balance");
const
 saving_Display = document.querySelector("#display-saving");
const
 remaining_Display = document.querySelector("#display-remaining");

/* ============= Common Function ============= */
function minus(num1, num2){
  let Result = num1 - num2;
  return Result;
}
/* ============= Calculate Function ============= */
function calculate() {

  // Add Expenses
  let expense =
    parseFloat(food_Input.value) +
    parseFloat(rent_Input.value) +
    parseFloat(cloth_Input.value);
  // Get Balance
  let balance = parseFloat(income_Input.value) - expense;
  if (
    isNaN(income_Input.value) ||
    isNaN(food_Input.value) ||
    isNaN(rent_Input.value) ||
    isNaN(cloth_Input.value) ||
    income_Input.value == '' ||
    food_Input.value == '' ||
    rent_Input.value == '' ||
    cloth_Input.value == ''
  ) {
    alert("Please type number!!! :( ");
  } else if (
    parseFloat(income_Input.value) < 0 ||
    parseFloat(food_Input.value) < 0 ||
    parseFloat(rent_Input.value) < 0 ||
    parseFloat(cloth_Input.value) < 0
  ) {

    alert("Please input positive number!!! ThankYou :( ");
  } else if (
    parseFloat(income_Input.value) < parseFloat(expense)
  ) {

    alert("plz - the more You Earn!'( ");
  } else {

  /*   // Show Result */
    expense_Display.innerText = expense;
    balance_Display.innerText = balance;
  }
}
/* ============= Save Function============= */
function  save() {
  if (isNaN(saving_Input.value) || saving_Input.value == '') {
    alert("Please type number in the input field :( ");
  } else if (parseFloat(saving_Input.value) < 0) {
    alert("Please input positive number :( ");
  } else {
    const balance = parseFloat(balance_Display.innerText);
    let saved = balance * (parseFloat(saving_Input.value) / 100);
    let remained = balance - parseFloat(saved);
    if (
      // jjjjjjjjjjjjjjjjjj
      parseFloat(remained) < 0) {
      alert("You cannot save more than your balance :'( ");
    } else {
      saving_Display.innerText = saved;
      remaining_Display.innerText = remained;
    }
  }
}
/* =====================================end===================== */