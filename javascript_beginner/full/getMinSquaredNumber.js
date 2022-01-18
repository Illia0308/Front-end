const getMinSquaredNumbers = (arr) => {
  if (!Array.isArray(arr) && arr.length === 0) {
    return null;
  } else {
    let abs = arr.map((el) => Math.abs(el));
    let min = Math.min(...abs);
    let squer = Math.pow(min, 2);
    return squer;
  }
};
console.log(getMinSquaredNumbers([-777, 3, -2, 6, 45, -20]));
