const createArrayOfFunctions = (num) => {
  let arr = [];
  if (typeof num === "undefined") {
    return arr;
  }
  if (typeof num != "number") {
    return null;
  } else {
    for (let i = 0; i < num; i++) {
      arr[i] = function () {
        return i;
      };
    }
    return arr;
  }
};

console.log(createArrayOfFunctions(3)[2]());
