/* ===> 1 <=== */
const student = {
  name: "Tom",
};

function sayName() {
  console.log(this.name);
}

// вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента
// ... your code here
sayName.apply(student);
sayName.call(student);
export const sayStudentName = sayName.bind(student);
sayStudentName();
// вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
// ... your code here
sayName.apply({ name: "Bruce" });
sayName.call({ name: "Bruce" });
export const sayBruceName = sayName.bind({ name: "Bruce" });
sayBruceName();
/* ===> 2 <=== */
const company = {
  companyName: "Microsoft",
};

function greeting(firstName, lastName) {
  console.log(
    `Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`
  );
}

// вызовите ф-цию greeting так, чтобы в консоль вывелось
// 'Hello, Bob Marley. Welcome to the Microsoft'
// используйте объект company
// ... your code here
greeting.apply(company, ["Bob", "Marley"]);
greeting.call(company, "Bob", "Marley");
export const specialGreeting = greeting.bind(company, "Bob", "Marley");
specialGreeting();

/* ===> 3 <=== */
const country = {
  countryName: "Ukraine",
  capital: "Kyiv",
};

function getPopulation(population) {
  return `Population in ${this.countryName} is ${population}`;
}

// вызовите ф-цию getPopulation так, чтобы она вернула
// 'Population in Ukraine is 43000'
// 43000 передавайте в виде числа
// используйте объект country
// результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
// ... your code here
getPopulation.apply(country, [43000]);
getPopulation.call(country, 43000);

export const getUkrainePopulation = getPopulation.bind(country, 43000);
getUkrainePopulation();
/* ===> 4 <=== */
const transaction = {
  amount: 1200,
  operation: "sell",
  currency: "USD",
  exchange: "NYSE",
  printTransaction() {
    console.log(
      `${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`
    );
  },
};

const anotherTransaction = {
  amount: 400,
  operation: "buy",
  currency: "USD",
  exchange: "NASDAQ",
};

// вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
// '400 USD - buy on NASDAQ'
// используйте объект anotherTransaction как контекст
// ... your code here
transaction.printTransaction.apply(anotherTransaction);
transaction.printTransaction.call(anotherTransaction);
export const printSpecialTransaction =
  transaction.printTransaction.bind(anotherTransaction);
printSpecialTransaction();

pseudoArray = {
  0: "tom",
  1: "JAke",
  2: "Frank",
};
console.log(pseudoArray[1]);
