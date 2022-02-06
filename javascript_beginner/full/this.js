// const person = {
//   name: "John",
//   weight: "83kg",
//   greeting() {
//     console.log(`Hi i am ${this.name}`);
//   },
// };

// person.greeting();

const person = {
  name: "John",
  weight: "83kg",
  message: "Hi",
  greeting(age, message) {
    console.log(`${message} ${this.name} ${age}`);
  },
};

const sayHi = person.greeting(17, "Hi");

const callbackPrompt = {
  message: "Tell me your phone",
  showPrompt() {
    const phoneNumber = prompt(this.message);
    console.log(phoneNumber);
  },
  showDefferedPrompt(ms) {
    setTimeout(() => this.showPrompt(), ms);
  },
};
callbackPrompt.showPrompt();

// defer (func,ms)=>Function

const defer = (func, ms) => {
  return function () {
    setTimeout(func, ms);
  };
};

const sayHi = () => {
  console.log("Hello");
};

defer(sayHi, 3000);
