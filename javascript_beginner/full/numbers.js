// Сумма дробних чисел
// const getTotalPrice = (arr) => {
//   return "$" + arr.reduce((acc, num) => Math.floor((acc + num) * 100) / 100);
// };

// let arr = [1.123, 2.231, 3.133];
// console.log(getTotalPrice(arr));

// Масив випадкових чисел

const getRandomNumbers = (length, from, to) => {
  let arr = [];
  arr.length = length;
  arr.push(Math.round(Math.random() * (to - from)) + from);

  return arr;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]

//Округлення числа
// const superRound = (num, prec) =>{
// prec
//     [
//   Math.floor(num),
//   Math.trunc((num * prec) / prec),
//   Math.ceil((num * prec) / prec),
//   Math.round((num * prec) / prec),
//   num.toFixed(prec),
// ]
// };

// examples
// console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
// superRound(6.11, 3); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
