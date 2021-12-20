function cloneArr(arr) {
  if (Array.isArray(arr) === false) {
    return null;
  }
  const copy = arr.slice();
  return copy;
}
console.log(cloneArr([1, 2, 3, 4]));
