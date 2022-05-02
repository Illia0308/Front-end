function squareArray(arr) {
  const result = [];
  if (Array.isArray(arr) && arr.length > 1) {
    for (let i = 0; i <= arr.length - 1; i += 1) {
      result.push(arr[i] ** 2);
    }
    return result;
  } else {
    return null;
  }
}
console.log(squareArray([1, 3, 5]));
