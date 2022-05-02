class Wallet {
  constructor() {
    this.#balance = 0;
  }
  getBAlance() {
    return this._balance;
  }
  deposit(amount) {
    this._balance += amount;
  }
  withDraw(amount) {
    if (amount > this._balance) {
      console.log(`You don't have enought funds`); // funds -- засоби
    }
    this._balance -= amount;
  }
}
const wallet1 = new Wallet();
console.log(wallet.getBAlance());
wallet1.deposit(45);
console.log(wallet1.getBAlance());
wallet1.withDraw(34);
console.log(wallet1.getBAlance());
