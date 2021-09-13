function sum(from, to) {
  let sum = 0;
  for (let first = from; first <= to; first += 1) sum += first;
  return sum;
}
console.log(sum(5, 10));
console.log(sum(11, 11));

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  if (sum(firstFrom, firstTo) > sum(secondFrom, secondTo)) {
    return "true";
  } else {
    return "false";
  }
}
console.log(compareSums(5, 10, 5, 10));
console.log(compareSums(5, 15, 3, 5));
