class Vehicle {
  constructo(name, hasWheels) {
    this.name = name;
    this.hasWheels = hasWheels;
  }

  move() {
    console.log("moving");
  }
  stop() {
    console.log("stoped");
  }
}

class Ship extends Vehicle {
  // клас ship приймає методи з vehicle
  constructor(name) {
    super(name, false); // передає значення false в батьківський конструктор
  }

  startMachine() {
    console.log("Lifting anchor down");
    this.move();
  }
  stopMachine() {
    console.log("Lifting anchor up");
    this.stop();
  }
}

const ship1 = new Ship("chaika", false); /// ship1 це екземпляр конструктора
console.log(ship1);
