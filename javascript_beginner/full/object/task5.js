// const getPeople = (obj) =>
//   Object.values(obj)
//     .map((array) => array.map((el) => el.name))
//     .flat();

const getPeople = (obj) =>
  Object.values(obj)
    .map((array) => array.map((el) => Object.values(el)))
    .flat()
    .map((arr) => arr[0]);

const rooms = {
  room1: [{ name: "Bob" }, { name: "Kevin" }, { name: "Rayan" }],
  room2: [{ name: "Frank" }],
  room3: [{ name: "Leonard" }],
};
console.log(getPeople(rooms));
