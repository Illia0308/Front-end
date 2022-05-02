const arrAverage = (arr) =>
  Array.isArray(arr) ? arr.reduce((acc, num) => acc + num) / arr.length : null;
let numbers = [1, 2, 3, 4, 5];
console.log(arrAverage(numbers));
