// // const saveCalls = (func) => {
// //   saveCalls.calls = [];
// //   return function withMemory(...args) {
// //     saveCalls.calls.push(args);
// //     return func.apply(this, arguments);
// //   };
// // };

const pow = (num, stage) => {
  const result = Math.pow(num, stage);
  return result;
};
pow();

const saveCalls = (func) => {
  function withMemory(...arg) {
    withMemory.calls.push(arguments);
    return func.apply(this, arguments);
  }
  withMemory.calls = [];

  return withMemory;
};
saveCalls.withMemory(1, 2);
