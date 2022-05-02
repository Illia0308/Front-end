Object.keys(); // ----> Повертає ключі обєкту
Object.values(); // ------> Повертає значення ключів обєкту
Object.entries(); // ----> Повертає і ключ і значення обєкту

const users = {
  bob: 17,
  john: 21,
  David: 30,
};

const getAdults = (usersObj) => {
  // Переобразували обєкт в масив за допомогою entries
  const usersArray = Object.entries(usersObj);
  // --> {bob:17, john:21, David:30} => [['bob',17],['john',21],['David',30]]
  const filtredUsersArray = usersArray.filter((user) => user[1] >= 18);
  // Відфільтрували масив по значенню >18
  const usersNames = filtredUsersArray.map((user) => user[0]);
  // ПРойшлись по значенню за допомогою map щоб функція повертала тільки імена
  return usersNames;
};
