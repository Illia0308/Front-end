const students = [
  "Nastia",
  "Misha",
  "Julia",
  "Sergey",
  "Ania",
  "Illia",
  "Iryna",
  "Igor",
];

/* function printArray(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    console.log(el);
  }
}
printArray(students);
 */
function printArray(arr) {
  for (let el of arr) {
    console.log(el);
  }
}
printArray(students);

// arr.push - додає елемент в кінець масиву
// const arr = [1,2,3,4,5];
// arr.push(6)
// pop - забирає останній елемент масиву
// shift - забирає перший елемент масиву
// unshift - додає елемент на початок масиву
// include - шукає чи є такий елемент в масиві результат буде true or false
// const arr = [1,2,3,4,5];
// arr.include(5) - true

function addPoints(points, homeTeam, awayTeam, result) {
  if (result === "win") {
    points[homeTeam - 1] += 1;
  } else if (result === "lose") {
    points[awayTeam - 1] += 3;
  } else {
    points[homeTeam - 1] += 1;
    points[awayTeam - 1] += 1;
  }
  return points;
}
const points = [44, 41, 40, 35, 30, 19, 10, 7];
const result = addPoints(points, 3, 6, "lose");
console.log(result);
