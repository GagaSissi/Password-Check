"use strict";
// Constant and function to call each function
const inputPasswort1 = document.getElementById("password1");
const inputPasswort2 = document.getElementById("password2");

inputPasswort1.addEventListener("keyup", passwCheck);
inputPasswort2.addEventListener("keyup", passwCheck);
function passwCheck() {
  passwEqual();
  passwLowerCLetter();
  passwUpperCLetter();
  passwNumber();
  passwTenLong();
}

function passwReset() {
  const passwReset = document.getElementById(
    "equal",
    "lower",
    "upper",
    "number",
    "charactersTen"
  );
  passwReset.innerText = "⭕";
}

// Passwort Check Equal
function passwEqual() {
  if (inputPasswort1.value == inputPasswort2.value) {
    const equCheck = document.getElementById("equal");
    equCheck.innerText = "🟢";
    return true;
  }
  // } else {
  //   const equCheck = document.getElementById("equal");
  //   equCheck.innerText = "⭕";
  //   return false;
  // }
}

// Passwort Check Lower Case
function passwLowerCLetter() {
  let lowerCaseCheck = inputPasswort1.value;
  if (/[a-z]/.test(lowerCaseCheck)) {
    const equCheck = document.getElementById("lower");
    equCheck.innerText = "🟢";
  } else {
    const equCheck = document.getElementById("lower");
    equCheck.innerText = "⭕";
  }
}

// Passwort Check Upper Case
function passwUpperCLetter() {
  let upperCaseCheck = inputPasswort1.value;
  if (/[A-Z]/.test(upperCaseCheck)) {
    const equCheck = document.getElementById("upper");
    equCheck.innerText = "🟢";
  } else {
    const equCheck = document.getElementById("upper");
    equCheck.innerText = "⭕";
  }
}

// Passwort Check Number
function passwNumber() {
  let numbCheck = inputPasswort1.value;
  if (/[0-9]/.test(numbCheck)) {
    const equCheck = document.getElementById("number");
    equCheck.innerText = "🟢";
  } else {
    const equCheck = document.getElementById("number");
    equCheck.innerText = "⭕";
  }
}

// Passwort Check Ten Characters Long
function passwTenLong() {
  if (inputPasswort1.value.length >= 10) {
    const equCheck = document.getElementById("charactersTen");
    equCheck.innerText = "🟢";
  } else {
    const equCheck = document.getElementById("charactersTen");
    equCheck.innerText = "⭕";
  }
}

// Buttonpasswort switch

const btn = document.querySelector("button");
btn.addEventListener("click", buttonShowHidden);

function buttonShowHidden() {
  if (password1.getAttribute("type") === "password") {
    btn.innerText = "Hide Password";
    password1.setAttribute("type", "text");
    password2.setAttribute("type", "text");
  } else {
    btn.innerText = "Show Password";
    password1.setAttribute("type", "password");
    password2.setAttribute("type", "password");
  }
}
