const addAmountButton = document.getElementById("add-money-option");
const cashOutButton = document.getElementById("cash-out-option");
const addMoneySection = document.getElementById("add-money-section");
const cashOutSection = document.getElementById("cash-out-section");

// display cash out section
cashOutButton.addEventListener("click", displayCashOutOption);

function displayCashOutOption(){
    cashOutSection.classList.remove("hidden");
    addMoneySection.classList.add("hidden");
}

// display add money section
addAmountButton.addEventListener("click", displayAddMoneyOption);

function displayAddMoneyOption(){
    cashOutSection.classList.add("hidden");
    addMoneySection.classList.remove("hidden"); 
}