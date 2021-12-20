// let sum = 0;
// for (let i = 0; i <= 1000; i += 1) {
//   sum += i;
// }
// let div = Math.floor(sum / 1234);
// let mods = Math.ceil(sum / 1234);
// console.log(div > mods);
//put your code here

const getSum = (start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};
console.log(getSum(1, 10));
