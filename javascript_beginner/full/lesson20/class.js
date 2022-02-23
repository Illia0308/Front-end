class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi i am ${this.name}`);
  }
  requestNewPhoto() {
    console.log(`New photo request was sent for `);
  }
  setAge(value) {
    if (value < 0) {
      return false;
    }
    this.age = value;
    if (value >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }
}
