/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

const getAdults = (obj) => {
  let adult = {};
  for (let el in obj) {
    if (obj[el] >= 18) {
      adult[el] = obj[el];
    }
    return adult;
  }
};

// const getAdults = (obj) => {
//   return Object.entries(obj)
//     .filter((user) => user[1] >= 18)
//     .map((user) => user[0]);
// };
// // examples
// console.log(getAdults({ "John Doe": 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
// getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
