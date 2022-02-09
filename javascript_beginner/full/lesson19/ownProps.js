const vehicle = {
  move() {
    console.log("moving");
  },
  stop() {
    console.log("stoped");
  },
};

const ship = {
  name: "Aurora",
  hasWheels: false,
  liftAnchorDown() {
    console.log("Lifting anchor down");
  },
  liftAnchorUp() {
    console.log("Lifting anchor up");
  },
};

Object.setPrototypeOf(ship, vehicle);

for (let prop in ship) {
  // цикл for покаже унаслідуванні методи з обєкту vehicle
  console.log(prop);
}

for (let prop in ship) {
  if (ship.hasOwnProperty(prop)) {
    // цикл for покаже тільки власні методи  обєкту ship
    console.log(prop);
  }
}
console.log(Object.keys(ship)); // покаже тільки ключі обєкта ship
