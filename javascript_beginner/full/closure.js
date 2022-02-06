const makeCounter = () => {
  let count = 0;
  return function () {
    return count++;
  };
};
const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
console.log(counter2());

const message = "HAve a good day";

function sendMassage(name) {
  let greeting = "Hi,";
  if (name) {
    console.log(greeting + name);
  } else {
    console.log(message);
  }
}

sendMassage();
