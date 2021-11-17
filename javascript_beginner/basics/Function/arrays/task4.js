const getSubArray = (arr, numberOfElements) => {
  let result = [];
  for (let index = 0; index < numberOfElements; index += 1) {
    result.push(arr[index]);
  }
  return result;
};
// examples
console.log(getSubArray([11, 4, 8, 3], 2)); // ==> [11, 4]
console.log(getSubArray([1, 2, 3, 4, 5], 3)); // ==> [1, 2, 3]
console.log(getSubArray(["some string", "hello", "I am happy"], 1)); // ==> ['some string']
