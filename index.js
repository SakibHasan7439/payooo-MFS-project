const loginBtn = document.getElementById("login-button");
const numberField = document.getElementById("number-input");
const password = document.getElementById("password");

loginBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    validateForm();
});

const validateForm = function(){
    // this way to validate number or password is wrong
    if(numberField.value.length === 11 && password.value === "1234"){
        console.log("You are logged in");
        window.location.href = "home.html";

    }else {
        alert("Invalid number or Password");
    }

}