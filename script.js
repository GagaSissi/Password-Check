"use strict";
// Teststadium Eingabe von Zeichen
const inPutPass1 = document.getElementById("pass1");
const inPutPass2 = document.getElementById("pass2");
const forMular = document.getElementById("forM");
const warnEle = document.getElementById("warn");

inPutPass1.addEventListener("keyup", passwCheck);
inPutPass2.addEventListener("keyup", passwCheck);
function passwCheck() {
  passwEqual();
  passwLowerCLetter();
  passwUpperCLetter();
  passwNumb();
  passwTenLong();
}

function passwReset() {
  const passwReset = document.getElementById(
    "equal",
    "lower",
    "upper",
    "numb",
    "chara"
  );
  passwReset.innerText = "⭕";
}

// Passwort Check Equal
function passwEqual() {
  if (inPutPass1.value == inPutPass2.value) {
    const equCheck = document.getElementById("equal");
    equCheck.innerText = "🟢";
    return true;
  } else {
    const equCheck = document.getElementById("equal");
    equCheck.innerText = "⭕";
    return false;
  }
}

// Passwort Check Lower Case
function passwLowerCLetter() {
  let lowerCaseCheck = inPutPass1.value;
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
  let upperCaseCheck = inPutPass1.value;
  if (/[A-Z]/.test(upperCaseCheck)) {
    const equCheck = document.getElementById("upper");
    equCheck.innerText = "🟢";
  } else {
    const equCheck = document.getElementById("upper");
    equCheck.innerText = "⭕";
  }
}

// Passwort Check Number
function passwNumb() {
  let numbCheck = inPutPass1.value;
  if (/[0-9]/.test(numbCheck)) {
    const equCheck = document.getElementById("numb");
    equCheck.innerText = "🟢";
  } else {
    const equCheck = document.getElementById("numb");
    equCheck.innerText = "⭕";
  }
}

// Passwort Check Ten Characters Long
function passwTenLong() {
  if (inPutPass1.value.length >= 10) {
    const equCheck = document.getElementById("chara");
    equCheck.innerText = "🟢";
  } else {
    const equCheck = document.getElementById("chara");
    equCheck.innerText = "⭕";
  }
}
