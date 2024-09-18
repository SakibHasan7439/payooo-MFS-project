const addMoneyBtn = document.getElementById("add-money");
const pinNumber = document.getElementById("pin-Number");
const addAmount = document.getElementById("add-amount");
let currentMoney = document.getElementById("currentMoney");

addMoneyBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    addMoney();
});

const addMoney = function(){
    // warning!!! wrong way of validation
    if(pinNumber.value === "1234" && !isNaN(addAmount.value)){
        const availableMoney = parseInt(currentMoney.innerText);
        const newAddAmount = parseInt(addAmount.value);
        currentMoney.innerText = availableMoney + newAddAmount;

    }else {
        alert("Invalid Pin!");
    }
    pinNumber.value = "";
    addAmount.value = "";
}
