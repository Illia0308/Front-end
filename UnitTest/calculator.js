// export const getSquaredNumbers = (arr) => arr.map((num) => num * num);
// export const getOddNumbers = (arr) => arr.filter((num) => num % 2 === 1);
// export default (a, b) => a + b;

export const calc = (expression) => {
  if (typeof expression !== "string") {
    return null;
  }

  const [a, operation, b] = expression.split(" ");
  let result;

  switch (operation) {
    case "+":
      result = +a + +b;
      break;
    case "-":
      result = +a - +b;
      break;
    case "*":
      result = +a * +b;
      break;
    case "/":
      result = +a / +b;
      break;
  }

  return `${expression} = ${result}`;
};
