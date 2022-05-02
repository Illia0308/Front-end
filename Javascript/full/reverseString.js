// const reverseString = (text) =>
//   typeof text !== "string" ? null : text.split("").reverse().join("");

const reverseString = (text) => {
  let reverse = "";
  if (typeof text !== "string") {
    return null;
  } else {
    for (let i = text.length - 1; i >= 0; i -= 1) {
      reverse += text.charAt(i);
    }
    return reverse;
  }
};
console.log(reverseString("lopata"));
