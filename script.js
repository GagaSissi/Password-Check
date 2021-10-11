"use strict";
// Funktion für
// function myFunction() {
//   const inpObj = document.querySelector("#pass1");
//   const inpObjValue = inpObj.value;
//   console.log(inpObjValue);
//   const inpObj2 = document.querySelector("#pass2");
//   const inpObj2Value = inpObj2.value;
//   console.log(inpObj2Value);
// }

// Passwort im Klartext anzeigen
// Weitere Vorgehensweise theoretisch -->document.getElementById("Button").disabled = true; setzen
const showHiddenButton = document.getElementById("btn");
showHiddenButton.addEventListener("click", myFunction);

function myFunction() {
  if (document.getElementById("btn").disabled == false) {
    document.getElementById("Passwort").type = "text";
    showHiddenButton.innerText = "Hidden Password";
  } else {
    document.getElementById("Passwort").type = "password";
    showHiddenButton.innerText = "Show Password";
  }
}
