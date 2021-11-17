/* function sendEmail(userName) {
  console.log("Gromcode party invitation was sent to " + userName + "!");
}
 */
/* let userNames = [
  "Nastia",
  "Misha",
  "Julia",
  "Sergey",
  "Ania",
  "Illia",
  "Iryna",
  "Igor",
];

function sendEmailList() {
  for (let i = 0; i < userNames.length; i += 1) {
    const el = userNames[i];
    console.log(el);
  }
}
sendEmailList();
"use strict"; */

function sendEmail(userName) {
  console.log("Gromcode party invitation was sent to " + userName + "!");
}

let userNames = [
  "Nastia",
  "Misha",
  "Julia",
  "Sergey",
  "Ania",
  "Illia",
  "Iryna",
  "Igor",
];

function sendEmailList() {
  for (let el of userNames) {
    console.log(el);
  }
}
sendEmailList();
var age = 15;
var status = age >= 18 ? "adult" : "minor";
console.log(status);
