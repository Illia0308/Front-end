// import getSum, { getSquaredNumbers, getOddNumbers } from "./calculator";

// import { calc } from "./calculator"

// it("should get squared numbers", () => {
//   const result = getSquaredNumbers([1, 2, 3]);
//   expect(result).toEqual([1, 4, 9]);
// });

// it("Should keep odd numbers", () => {
//   const result = getOddNumbers([1, 2, 3, 4, 5]);
//   expect(result).toEqual([1, 3, 5]);
// });

// it("get sum of numbers", () => {
//   const result = getSum(1, 5);
//   expect(result).toEqual(6);
// });
import { calc } from "./calculator";

it("Calculator", () => {
  let result = calc("2 * 5");
  expect(result).toEqual("2 * 5 = 10");
});
