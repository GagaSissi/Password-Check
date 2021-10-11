"use strict";
// Teststadium Eingabe von Zeichen
const inPutPass1 = document.getElementById("pass1");
const inPutPass2 = document.getElementById("pass2");
const forMular = document.getElementById("forM");
const warnEle = document.getElementById("warn");

forMular.addEventListener("submit", (e) => {
  let messages = [];
  if (inPutPass1.value === "" || inPutPass1.value) {
    messages.push("Password is required");
  }
  if (inPutPass1.value.length <= 10) {
    console.log("Password must contain 10 characters");
  }
  if (messages.length > 0) {
    e.preventDefault;
    console.log("Password ist über 0 Zeichen");
  }
});

//Function for the equal check
// function myFunction() {
//   const inpObj = document.querySelector("#pass1");
//   const inpObjValue = inpObj.value;
//   console.log(inpObjValue);
//   const inpObj2 = document.querySelector("#pass2");
//   const inpObj2Value = inpObj2.value;
//   console.log(inpObj2Value);
//   if (inpObj != inpObj2) {
//     alert("password has to be equal!");
//     document.getElementById("pass1").focus();
//     return false;
//   }
//   return true;
// }

// Showing Password in Cleartext
// Weitere Vorgehensweise theoretisch -->document.getElementById("Button").disabled = true; setzen

// const showHiddenButton = document.getElementById("btn");
// showHiddenButton.addEventListener("click", myFunction);

// function myFunction() {
//   if (document.getElementById("btn").disabled == false) {
//     document.getElementById("Passwort").type = "text";
//     showHiddenButton.innerText = "Hidden Password";
//   } else {
//     document.getElementById("Passwort").type = "password";
//     showHiddenButton.innerText = "Show Password";
//   }
// }
