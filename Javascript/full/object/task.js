const transaction = {
  currency: "USD",
  value: 170,
  operation: "sale",
  agent: {
    country: "Ukraine",
    company: "NYSE",
  },
  "operation time": 1584029990001,
};
console.log(transaction.currency);
console.log(transaction["value"]);
console.log(transaction.agent["company"]);
console.log(transaction.agent.country);
console.log(transaction["operation time"]);
/* выведи в консоль значение свойства 'currency' с помощью точки */
/* выведи в консоль значение свойства 'value' с помощью квадратных скобок */
const key = "operation";
console.log(key);

/* выведи в консоль значение свойства, название которого находится в переменной key - используйте квадратные скобки */
/* выведи в консоль значение свойства 'company' используя квадратные скобки */
/* выведи в консоль значение свойства 'country' используя точку */
/* выведи в консоль значение свойства 'operation time' используя квадратные скобки */

const user = {
  name: "Tom",
  age: 17,
};

/* присвой объекту свойство hobby со значением 'football' с помощью точки */
user.hobby = "footbal";
const anotherKey = "married";
/* название свойства хранится в переменной anotherKey. Присвой объекту такое свойство со значением false */
user[anotherKey] = false;
/* присвой объекту свойство 'favorite music' со значением 'rock' */
user["favorite music"] = "rock";
/* присвой объекту свойство 'address', которое будет пустым объкетом */
user.adress = {};
/* присвой объекту в 'address' свойство 'country', со значением 'Ukraine' */
user.adress.country = "Ukraine";
/* присвой объекту в 'address' свойство 'building', со значением 17 */
user.adress.building = 17;
/* выведи в консоль итоговый объект user */
console.log(user);

/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

function getKeys(obj) {
  for (let el in obj) {
    console.log(el);
  }
}
