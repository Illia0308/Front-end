// // document.write("123");

// // в мене є сума 10$
// let amount = 10;
// //печиво коштує 7$
// let cookiesPrice = 7;
// // цукерки коштують 8$
// let candyPrice = 8;
// //Чи зможу я купити цукерки і печиво?
// let rest = amount - cookiesPrice;
// if (rest >= candyPrice) {
//   document.write("I have enought money");
// } else {
//   document.write("I do not have enought money");
// }

// // function getLargestExpressionResult(a, b) {
// //   return Math.max(a + b, a - b, a * b, a / b);
// // }

// function getLargestExpressionResult(a, b) {
//   if (a + b > a - b && a + b > a * b && a + b > a / b) {
//     return a + b;
//   }
//   if (a - b > a + b && a - b > a * b && a - b > a / b) {
//     return a - b;
//   }
//   if (a * b > a + b && a * b > a - b && a * b > a / b) {
//     return a * b;
//   }
//   if (a / b > a + b && a / b > a * b && a / b > a - b) {
//     return a / b;
//   }
// }

// console.log(getLargestExpressionResult(-5, -1));

function calculateProfit(amount, percent, period) {
  let income = 0;
  let yearAmount = amount + income;
  for (let i = 1; i <= period; i += 1) {
    let turnBack = yearAmount + yearAmount * (percent / 100) - amount;
    income += turnBack;
  }
  return income;
}
console.log(calculateProfit(12500, 3, 12));
