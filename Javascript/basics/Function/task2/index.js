function countCommision(amount, currency) {
  const UAH = currency === "UAH";
  const USD = currency === "USD";
  const EUR = currency === "EUR";
  if (UAH && amount < 1000) {
    return amount * 0, 02;
  }
  if (UAH && amount >= 1000) {
    return amount * 0, 01;
  }
  if (USD && amount < 5000) {
    return amount * 0.005;
  }
  if (USD && amount >= 5000) {
    return amount * 0.0025;
  }
  if (EUR && amount < 3000) {
    return amount * 0.075;
  }
  if (EUR && amount >= 3000) {
    return 0;
  }
}
console.log(countCommision(20000, "USD"));
