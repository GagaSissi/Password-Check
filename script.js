"use strict";
//Function for the equal check
function myFunction() {
  const inpObj = document.querySelector("#pass1");
  const inpObjValue = inpObj.value;
  console.log(inpObjValue);
  const inpObj2 = document.querySelector("#pass2");
  const inpObj2Value = inpObj2.value;
  console.log(inpObj2Value);
  if (inpObj != inpObj2) {
    alert("password has to be equal!");
    document.getElementById("pass1").focus();
    return false;
  }
  return true;
}

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
