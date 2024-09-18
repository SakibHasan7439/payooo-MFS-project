const cashOutBtn = document.getElementById("btn-cash-out");
const cashOutAmount = document.getElementById("inp-cash-out");
const pinNum = document.getElementById("input-cash-out-pin");
let balance = document.getElementById("currentMoney");

cashOutBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    cashOut();
})

const cashOut = function(){
    if(pinNum.value === "1234" && !isNaN(cashOutAmount.value)){
        const currentBalance = parseFloat(balance.innerText);
        const cashOut = parseFloat(cashOutAmount.value);
    
        if(cashOut > currentBalance){
            return alert("insufficient Balance");
        }
        balance.innerText = currentBalance - cashOut;

    }else {
        alert("Cash Out failed! Please try again")
    }

    cashOutAmount.value = "";
    pinNum.value = "";
}