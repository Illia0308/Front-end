function User(name, age) {
  // функція котра створює обєкт  з полями name і age
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`Hi I am ${this.name}`);
  };
}
User.prototype.sayHi = function () {
  console.log(`Hi I am ${this.name}`); //зберігаємо функцію в прототип і тепер до неї можна звертатись всім обєктам створених через конструктор user
};
const user1 = new User("bob", 17); // ключове слово new
console.log(user1);
user1.sayHi();
const user2 = new User("Tom", 22);
user2.sayHi();
