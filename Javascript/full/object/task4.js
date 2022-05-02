const compareObjects = (obj1, obj2) => {
  const firstArr = Object.entries(obj1);
  const secondArr = Object.entries(obj2);
  return firstArr.join("") === secondArr.join("");
};

const obj1 = {
  name: "Tom",
  age: 17,
};

const obj2 = {
  name: "Bob",
  age: 17,
};

const obj3 = {
  name: "Bob",
  age: 17,
  student: false,
};

const obj4 = {
  name: "Tom",
  age: 17,
};

console.log(compareObjects(obj1, obj4));
