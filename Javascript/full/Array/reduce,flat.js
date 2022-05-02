// [1,2,[3,4],5,[6]] ===> [1,2,3,4,5]

const flatArray = (arr) => {
  const flatArr = arr.reduce((acc, elem) => {
    return acc.concat(elem);
  }, []);
  return flatArr;
};

const initArray = [1, 2, [3, 4], 5, [6]];
console.log(flatArray(initArray)); // -----> [1,2,3,4,5,6]

// const flatArray = (arr) =>  arr
// .reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);
//   return flatArr;
// };
// const initArray = [1, 2, [3, 4], 5, [6]];
// console.log(flatArray(initArray)); // -----> [1,2,3,4,5,6]

// const flatArray = (arr) => arr;
// .flat() -----> [1,2,3,4,5,6]
//   return flatArr;
// };

// [1,2,3,4,5].reduce(function(acc,num) {
// return acc + num;
// });

// Принцип дії:
// Метод reduce проходить по масиву і робить якусь дію, в данному випадку сумує елементи
// асс ---> акамулятор (початкове значення 0)
// num ----> елемент масиву
// 5 ітерацій
// 1: 0,1 ---> 1
// 2: 1,2 ---> 3
// 3: 3,3 ---> 6
// 4: 6,4 ----> 10
// 5: 10,5----> 15
