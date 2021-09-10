'use strict';

/**
 * @param {number} first
 * @param {number} second
 * @param {number} third
 * @return {number}
 */
function getMax(first, second, third) {
  let max;
  if (first === 0 && second === 0 && third === 0) {
    return 0;
  }
  if (first > second && first > third) {
    max = first;
  }
  if (second > first && second > third) {
    max = second;
  }
  if (third > first && third > second) {
    max = third;
  }

  return max;
}

// examples
console.log(getMax(10, 20, 30));
console.log(getMax(100, 20, 30));
console.log(getMax(-10, 0, 0));
