function sum(firstNum, secondNum) {
  let result = 0;
  for (let i = firstNum; i <= secondNum; i += 1) {
    result += i;
  }
  return result;
}
console.log(sum(1, 5));

function compareSums(a, b, c, d) {
  if (sum(a, b) > sum(c, d)) {
    return true;
  } else {
    return false;
  }
}
console.log(compareSums(1, 5, 3, 5));
