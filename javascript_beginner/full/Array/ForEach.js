// //  Метод fOR EACH
// const getSpecialNumbers = (number) => {
//   let specialNumbers = [];
//   function checkIfSpecialNumbers(num) {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   }
//   number.forEach(checkIfSpecialNumbers);
//   return specialNumbers;
// };
// // 2 варіант рішення
// const getSpecialNumbers = (number) => {
//   let specialNumbers = [];

//   number.forEach(function checkIfSpecialNumbers(num) {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   });
//   return specialNumbers;
// };

// // / 3 варіант рішення
// const getSpecialNumbers = (number) => {
//   let specialNumbers = [];

//   number.forEach((num) => {
//     if (num % 3 === 0) {
//       specialNumbers.push(num);
//     }
//   });
//   return specialNumbers;
// };

/