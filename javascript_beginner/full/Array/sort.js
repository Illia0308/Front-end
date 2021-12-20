// const sortArray = (numbers) => {
//   function compare(a, b) {
//     if (a > b) {
//       return 1;
//     }
//     return -1;
//   }
//   numbers.sort(compare);
//   return numbers;
// };

// const sortArray = (numbers) => {
//   function compare(a, b) {
//     return a > b ? 1 : -1;
//   }
//   numbers.sort(compare);
//   return numbers;
// };

// const sortArray = (numbers) => {
//   numbers.sort((a, b) => (a > b ? 1 : -1));

//   return numbers;
// };

const sortArray = (numbers) => {
  numbers.sort((a, b) => a - b);

  return numbers;
};
