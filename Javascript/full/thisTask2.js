const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    let chunky = fullName.split(" ");
    this.firstName = chunky[0];
    this.lastName = chunky[1];
  },
};
