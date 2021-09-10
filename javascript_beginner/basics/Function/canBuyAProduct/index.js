// function canBuyProduct(price, balance) {
//   console.log(balance - price >= 500);
// }
// canBuyProduct(100, 600);
// canBuyProduct(150, 600);
// canBuyProduct(1000, 1290);

// const canBuyProduct = (price, balance) => balance - price >= 500;
// console.log(canBuyProduct(100, 600));
// console.log(canBuyProduct(150, 600));
// console.log(canBuyProduct(1000, 1290));

// function canBuyProduct(price, balance) {
//   const sum = balance - price >= 500;
//   return sum;
// }
// console.log(canBuyProduct(100, 600));
// console.log(canBuyProduct(150, 600));
// console.log(canBuyProduct(1000, 1290));

function canBuyProduct(price, balance) {
  let canBuyProduct;
  if (balance - price >= 500) {
    canBuyProduct = 'true';
  } else {
    canBuyProduct = 'false';
  }
  console.log(canBuyProduct);
}
canBuyProduct(100, 600);
canBuyProduct(150, 600);
canBuyProduct(1000, 1290);
