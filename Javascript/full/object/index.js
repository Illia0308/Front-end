// Створення обєкту з масиву
const transformToObject = (arr) => {
  let obj = {};
  arr.forEach((el) => {
    obj[el] = el;
  });
  return obj;
};
const arr = [1, "text"];
const result = transformToObject(arr);
console.log(transformToObject(arr));

// Створення масиву з обєкту
const concatProps = (obj) => {
  let arr = [];
  for (let el in obj) {
    arr.push(obj[el]);
  }
  return arr;
};
const obj = {
  name: "Tom",
  age: "24",
};

console.log(concatProps(obj));
