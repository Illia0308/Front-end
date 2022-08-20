// // document.write("123");

// // в мене є сума 10$
// let amount = 10;
// //печиво коштує 7$
// let cookiesPrice = 7;
// // цукерки коштують 8$
// let candyPrice = 8;
// //Чи зможу я купити цукерки і печиво?
// let rest = amount - cookiesPrice;
// if (rest >= candyPrice) {
//   document.write("I have enought money");
// } else {
//   document.write("I do not have enought money");
// }

// // function getLargestExpressionResult(a, b) {
// //   return Math.max(a + b, a - b, a * b, a / b);
// // }

// function getLargestExpressionResult(a, b) {
//   if (a + b > a - b && a + b > a * b && a + b > a / b) {
//     return a + b;
//   }
//   if (a - b > a + b && a - b > a * b && a - b > a / b) {
//     return a - b;
//   }
//   if (a * b > a + b && a * b > a - b && a * b > a / b) {
//     return a * b;
//   }
//   if (a / b > a + b && a / b > a * b && a / b > a - b) {
//     return a / b;
//   }
// }

// console.log(getLargestExpressionResult(-5, -1));
// function calculateProfit(amount, percent, period) {
//   let yearAmount = amount;
//   for (let i = 1; i <= period; i++) {
//     income = yearAmount * (percent / 100);
//     yearAmount += income;
//   }
//   let clearIncome = yearAmount - amount;
//   return clearIncome;
// }
// console.log(calculateProfit(10000, 4, 3));

// let word = "Hello world";
// for (let i = 0; i <= word.length; i++) {
//   console.log(word[i]);
// }

// const model = "Apple iPhone 11";
// const search = "iph";

// const condition = model.toLowerCase().includes(search);

// function countMs(text) {
//   const low = text.toLowerCase();
//   let quantity = 0;
//   for (let el of low) {
//     if (el === "m") {
//       quantity += 1;
//     }
//   }
//   return quantity;
// }

// console.log(countMs("AdmfnnUBMEFM"));

// function removeVowels(doc) {
//   let result = "";
//   for (let el of doc) {
//     if (!"aeiouy".includes(el.toLowerCase())) {
//       result += el;
//     }
//   }
//   return result;
// }

// console.log(removeVowels("i like your ass"));
// console.log(removeVowels("document"));
// console.log(removeVowels("I like my boss"));

// function makeAbbr(words) {
//   return words
//     .split(" ")
//     .map((el) => el[0])
//     .join("")
//     .toUpperCase();
// }

// console.log(makeAbbr("national standart of "));

// function makeAbbr(words) {
//   let abbr = words[0];
//   for (let i = 0; i <= words.length; i++) {
//     if (words[i] === " ") {
//       abbr += words[i + 1];
//     }
//   }
//   return abbr.toUpperCase();
// }
// console.log(makeAbbr("national as sun slam am"));

// function decryptMessage(message) {
//   let reverseText = "";
//   for (let i = message.length - 1; i >= 0; i--) {
//     reverseText += message[i];
//   }
//   return reverseText;
// }
// console.log(decryptMessage("I will do it tomorrow"));

// function isWerewolf(target) {
//   let trimText = target
//     .toLowerCase()
//     .split("")
//     .filter((el) => el >= "a" && el <= "z")
//     .join("");
//   console.log(trimText);
//   let reverseText = target
//     .toLowerCase()
//     .split("")
//     .filter((el) => el >= "a" && el <= "z")
//     .reverse()
//     .join("");
//   console.log(reverseText);
//   return trimText === reverseText;
// }
// console.log(isWerewolf("'eva, can i see bees in a cave"));

// function isWerewolf(target) {
//   let lowerTarget = target.toLowerCase();
//   let abc = "abcdefghijkmnopqrstuvwxyz";
//   let normal = "";
//   let reversed = "";
//   for (let el of lowerTarget) {
//     if (abc.includes(el)) {
//       normal += el;
//       reversed = el + reversed;
//     }
//   }
//   return normal === reversed;
// }

// isWerewolf(" racecar");

// function getSuccessRate(statistic) {
//   let stringLength = statistic.length;
//   let result = 100 / stringLength;
//   let percent = 0;
//   if (statistic === "") {
//     return 0;
//   }
//   for (let el of statistic) {
//     if (el === "1") {
//       percent += 1;
//     }
//   }
//   return Math.round(percent * result);
// }
// console.log(getSuccessRate("1100"));

// function createArray(N) {
//   if (N === 0) {
//     return [];
//   }
//   let arr = [];
//   for (let el = 1; el <= N; el++) {
//     arr.push(el);
//   }
//   return arr;
// }

// function makeStickers(detailsCount, robotPart) {
//   let arr = [];
//   if (detailsCount === 0) {
//     return [];
//   }
//   for (let i = 1; i <= detailsCount; i++) {
//     arr.push(`${robotPart} detail #${[i]}`);
//   }
//   return arr;
// }

// function doublePower(currentPowers) {
//   if (currentPowers.length === 0) {
//     return [];
//   }
//   let arr = [];
//   for (let el of currentPowers) {
//     arr.push(el * 2);
//   }
//   return arr;
// }

// function isSorted(boxNumbers) {
//   if (boxNumbers.length < 0) {
//     return false;
//   }
//   let arr = [];
//   for (let i = 0; i < boxNumbers.length - 1; i++) {
//     arr.push(boxNumbers[i] <= boxNumbers[i + 1]);
//   }
//   let result = arr.includes(false) ? false : true;
//   return result;
// }

// function isSorted(boxNumbers) {
//   for (let i = 1; i < boxNumbers.length; i++) {
//     if (boxNumbers [i - 1] > boxNumbers[i]){
//      return false
//     }
//   }
//  return true
// }

// console.log(isSorted([5]));

// function getPlan(startProduction, numberOfMonths, percent) {
//   let result = [];
//   let startNum = startProduction;
//   for (let i = 0; i <= numberOfMonths - 1; i++) {
//     startNum = Math.floor(startNum + startNum * (percent / 100));
//     result.push(startNum);
//   }
//   return result;
// }

// function getPlan(startProduction, numberOfMonths, percent) {
//   let result = [];
//   let startNum = startProduction;
//   for (let i = 1; i <= numberOfMonths; i++) {
//     startNum += Math.floor(startNum * percent / 100);
//     result.push(startNum);
//   }
//   return result;
// }

// console.log(getPlan(200, 3, 50));

// function getSpeedStatistic(testResults) {
//   if (testResults.length === 0) {
//     return [0, 0, 0];
//   }
//   let result = [];
//   let min = testResults.sort((a, b) => a - b)[0];
//   let max = testResults.sort((a, b) => b - a)[0];
//   let averageValue = Math.floor(
//     testResults.reduce((acc, el) => acc + el) / testResults.length
//   );
//   result.push(min, max, averageValue);
//   return result;
// }
// console.log(getSpeedStatistic([8, 9, 3, 12]));
// function getSpeedStatistic(testResults) {
//   if (testResults.length === 0) {
//     return [0, 0, 0];
//   }
//   let min = testResults[0];
//   let max = testResults[0];
//   let sum = 0;
//   for (const speed of testResults) {
//     sum += speed;
//     if (speed < min) {
//       min = speed;
//     }
//     if (speed > max) {
//       max = speed;
//     }
//     const average = Math.floor(sum / testResults.length);
//   }
//   return [min, max, average];
// }
// function compareRobots(firstRobotResults, secondRobotResults) {
//   const sum1 = firstRobotResults.reduce((acc, el) => acc + el);
//   const sum2 = secondRobotResults.reduce((acc, el) => acc + el);
//   if (sum1 > sum2) {
//     return "First robot for sale!";
//   }
//   if (sum1 === sum2) {
//     return "Both robots for sale!";
//   }
//   if (sum2 > sum1) {
//     return "Second robot for sale!";
//   }
// }

// function compareRobots(firstRobotResults, secondRobotResults) {
//   const firstTotal = getTotalWeight(firstRobotResults);
//   const secondTotal = getTotalWeight(secondRobotResults);
//   if (firstTotal > secondTotal) {
//     return "First robot for sale!";
//   }
//   if (firstTotal < secondTotal) {
//     return "Second robot for sale!";
//   }
//   if (firstTotal === secondTotal) {
//     return "Both robots for sale!";
//   }
// }

// function getTotalWeight(weights) {
//   let total = 0;
//   for (const weight of weights) {
//     total += weigth;
//   }
//   return total;
// }

// function getLocation(coordinates, commands) {
//   let result = coordinates;
//   if (commands.includes("right")) {
//     result[0]+=
//     commands.filter((el) => el === "right").length;
//   }
//   if (commands.includes("left")) {
//     result[0]-=commands.filter((el) => el === "left").length;
//   }
//   if (commands.includes("back")) {
//     commands.filter((el) => el === "back").length;
//   }
//   if (commands.includes("forward")) {
//     forward = commands.filter((el) => el === "forward").length;
//   }
//   return result
// }

// function getLocation(coordinates, commands) {
//   if (commands.length === 0) {
//     return coordinates;
//   }
//   let result = coordinates.slice();
//   for (let i = 0; i <= commands.length; i++) {
//     if (commands[i] === "right") {
//       result[0] += 1;
//     }
//     if (commands[i] === "left") {
//       result[0] -= 1;
//     }

//     if (commands[i] === "back") {
//       result[1] -= 1;
//     }

//     if (commands[i] === "forward") {
//       result[1] += 1;
//     }
//   }
//   return result;
// }
// console.log(getLocation([0, 1], ["forward"]));

function checkNumber(number) {
  let arr = [];
  arr.push(number > 0);
  arr.push(number % 2 === 0);
  arr.push(number % 10 === 0);
  return arr;
}
console.log(checkNumber(3));

function getArraysSum(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return 0;
  }
  const sum =
    arr1.reduce((acc, el) => acc + el) + arr2.reduce((acc, el) => acc + el);
  return sum;
}

function combineArrays(first, second) {
  const result = first.slice();
  for (let i = 0; i <= second.length - 1; i++) {
    result[i] += second[i];
  }
  return result;
}

// function splitString(str) {
//   if (str.length === 0) {
//     return [];
//   }
//   const arr = [];
//   let copyStr = str;
//   for (let i = 0; i < copyStr.length; i += 2) {
//     let cut = copyStr.slice(i, i + 2);
//     if (cut.length < 2) {
//       cut += "_";
//     }
//     arr.push(cut);
//   }

//   return arr;
// }
// console.log(splitString("1234563"));

function scrollingText(word) {
  let arr = [word.toUpperCase()];
  for (let i = 0; i < word.length - 1; i++) {
    let index = arr[i];
    let cut = index.slice(1, index.length) + index[0];
    console.log(cut);
    arr.push(cut);
  }
  return arr;
}
scrollingText("robot");
