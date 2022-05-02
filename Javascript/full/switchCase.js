const calc = (expression) => {
  const arr = expression.split(" ");
  let result;
  switch (arr[1]) {
    case "+":
      result = Number(arr[0] + arr[2]);
      break;
    case "-":
      result = arr[0] - arr[2];
      break;
  }
  return expression + "=" + result;
};
