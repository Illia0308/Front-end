function createEmptyArray(len) {
  let arr = [];
  arr.length = len;
  return arr;
}

console.log(createEmptyArray(5));

function createEmptyArray(len) {
  const arr = new Array(len);
  return arr;
}

console.log(createEmptyArray(5));
