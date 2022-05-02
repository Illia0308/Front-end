const users = {
  Tom: 17,
  Bob: 25,
  Kevin: 24,
};

const girls = {
  Ann: 21,
  Viki: 25,
  Iryna: 55,
};

const boys = {
  Tom: 21,
  Bob: 30,
  frank: 24,
};
const res = Object.assign(users, girls); /// -----> метод assign обєднує декілька обєктів в 1 при цьому якшо ключі однакові то результуючий обєкт приймає значення ключа котрий правіше
// const res=Object.assign(users, Boys)
// const res=Object.assign(Boys,users)
console.log(res);

const copyObj = Object.assign(users, {}); //------> метод assign розширить значення обєкта users і тоді обєкт users != copyObj хоча значення ті самі

// Функція котра копіює обєкт

const copiedObj = (obj) => Object.assign({}, obj);

/// або за допомогою спред оператора

const copyBoys = { ...boys }; //-----> копіюють властивості на першому рівні, тобто ключі

/// або за допомогою деструктуризації

let { Tom } = boys;
console.log(Tom); //-----> 21
//// також переміннну можна переназвати

let { Tom: krot = "default" } = boys; //---> якшо в обєкті boys не буде ключа Tom  то результат буде default
console.log(Tom); //-----> 21

const names = {
  bob,
  Pol,
  frank,
  Pablo,
  sayHi: function () {
    console.log("hi");
  },
};

names.sayHi(); //----> hi

console.log("text".toUpperCase); ///-----> TEXT
