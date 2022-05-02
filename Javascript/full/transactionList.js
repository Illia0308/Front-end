const cleanTransactionList = (array) =>
  array
    .map((el) => +el)
    .filter((el) => typeof el === "number" && !isNaN(el))
    .map((el) => `$${el.toFixed(2)}`);

let array1 = ["   1.9556", "16.414", "17", " 1 dollar"];
console.log(cleanTransactionList(array1));
console.log(array1);
