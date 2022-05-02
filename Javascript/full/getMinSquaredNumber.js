const getMinSquaredNumbers = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  let sortedArr = arr.map((el) => Math.abs(el)).sort((a, b) => a - b);
  return Math.pow(sortedArr[0], 2);
};
console.log(getMinSquaredNumbers([-77, 2, 3, -5]));

// const getMinSquaredNumbers = (arr) =>
//   !Array.isArray(arr) || arr.length === 0
//     ? null
//     : Math.pow(Math.min(...arr.map((el) => Math.abs(el))), 2);
// console.log(getMinSquaredNumbers([8, 3, -5, 7, -2]));
