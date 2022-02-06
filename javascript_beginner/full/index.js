// let memory = 0;
// export const add = (num) => {
//   memory += num;
// };

// export const decrease = (num) => {
//   memory -= num;
// };
// export const reset = () => {
//   memory = 0;
// };
// export const getMemo = () => {
//   return memory;
// };

let memory = 0;

const add = (num) => {
  memory += num;
};

const decrease = (num) => {
  memory -= num;
};

const reset = () => {
  memory = 0;
};

const getMemo = () => {
  return memory;
};
console.log(add(5));
console.log(decrease(2));
// console.log(reset());
console.log(getMemo());
