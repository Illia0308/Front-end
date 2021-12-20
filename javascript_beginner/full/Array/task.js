let names = ["John", "Olivia", "Oleksandr", "Emanuel", "Vanya", "Nastya"];
const string = "ya";
const filterNames = (arr, text) =>
  arr.filter((name) => name.length >= 5 && name.includes(text));
console.log(filterNames(names, string));
