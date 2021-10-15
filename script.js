"use strict";
// Constant and function to call each function
const inputPasswort1 = document.getElementById("password1");
const inputPasswort2 = document.getElementById("password2");

const equalCheck = document.getElementById("equal");
const lowerCaseCheck = document.querySelector("#lower");
const upperCaseCheck = document.querySelector("#upper");
const numbCheck = document.querySelector("#number");
const tenlongCheck = document.querySelector("#charactersTen");

inputPasswort1.addEventListener("keyup", passwEqual);
inputPasswort2.addEventListener("keyup", passwEqual);

// console.log(lowerCaseCheck);

// Passwort Check Equal
function passwEqual() {
  if (inputPasswort1.value == inputPasswort2.value) {
    equalCheck.innerText = "🟢";
    passwLowerCLetter();
    passwUpperCLetter();
    passwNumber();
    passwTenLong();
    // return true;
  } else {
    equalCheck.innerText = "⭕";
    lowerCaseCheck.innerText = "⭕";
    upperCaseCheck.innerText = "⭕";
    numbCheck.innerText = "⭕";
    tenlongCheck.innerText = "⭕";
  }
}

// Passwort Check Lower Case
function passwLowerCLetter() {
  // const lowerCaseCheck = inputPasswort1.value;
  if (/[a-z]/.test(inputPasswort1.value)) {
    lowerCaseCheck.innerText = "🟢";
  } else {
    lowerCaseCheck.innerText = "⭕";
  }
}

// Passwort Check Upper Case
function passwUpperCLetter() {
  // let upperCaseCheck = inputPasswort1.value;
  if (/[A-Z]/.test(inputPasswort1.value)) {
    upperCaseCheck.innerText = "🟢";
  } else {
    upperCaseCheck.innerText = "⭕";
  }
}

// Passwort Check Number
function passwNumber() {
  // let numbCheck = inputPasswort1.value;
  if (/[0-9]/.test(inputPasswort1.value)) {
    numbCheck.innerText = "🟢";
  } else {
    numbCheck.innerText = "⭕";
  }
}

// Passwort Check Ten Characters Long
function passwTenLong() {
  if (inputPasswort1.value.length >= 10) {
    tenlongCheck.innerText = "🟢";
  } else {
    tenlongCheck.innerText = "⭕";
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
