import { getSquareNumbers, getOddNumbers } from ".index.js";

it("should get squared numbers", () => {
  const result = getSquareNumbers([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});
