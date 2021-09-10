function convertMills(minutes, seconds, mills) {
  return minutes * 60000 + seconds * 1000 + mills;
}

console.log(convertMills(1, 2, 100)); // ===> 62100
console.log(convertMills(0, 2, 100)); // ===> 2100
console.log(convertMills(5, 11, 230)); // ===> 311230
