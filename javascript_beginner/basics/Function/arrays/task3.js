function reverseArray(arr) {
  let a = arr.reverse();
  console.log(a);
}
function reverseArray(arr) {
  return (a = arr.reverse());
}

// examples
console.log(reverseArray([11, 4, 8, 3])); // ==> [3, 8, 4, 11]
reverseArray([]); // ==> []
reverseArray([100, 50]); // ==> [50, 100]
