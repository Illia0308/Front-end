function checkSum(arr) {
  let sum = 0;
  if (Array.isArray(arr)) {
    for (let i = 0; i <= arr.length - 1; i += 1) {
      sum += arr[i];
    }
    return sum > 100;
  }
}

console.log(checkSum([1, 2, 3, 4]));
