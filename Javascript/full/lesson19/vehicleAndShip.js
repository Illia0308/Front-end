const vehicle = {
  move() {
    console.log("moving");
  },
  stop() {
    console.log("stoped");
  },
};
vehicle.move();
console.log(vehicle.toString);

const ship = {
  name: "Aurora",
  hasWheels: false,
  liftAnchorDown() {
    console.log("Lifting anchor down");
  },
  liftAnchorUp() {
    console.log("Lifting anchor up");
  },
  __proto__: vehicle, // обєкт ship унаслідував методи з обєкту vehicle і тепер ними можна користуватись
};

Object.setPrototypeOf(ship, vehicle); // метод котрий створює прототип vehicle в обєкті ship
