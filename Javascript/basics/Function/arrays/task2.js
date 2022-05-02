function getRevenue(sales) {
  let sum = 0;
  for (let i = 0; i < sales.length; i += 1) {
    sum += sales[i];
  }
  return sum;
}
console.log(getRevenue([25, 10, 21]));

/* function checkRevenue(sales, plannedRevenue) {
  return getRevenue(sales) >= plannedRevenue;
}
console.log(checkRevenue([42, 10, 20, 20], 50));
 */
function checkRevenue(sales, plannedRevenue) {
  const result = getRevenue(sales);
  if (result >= plannedRevenue) {
    return true;
  }
  return false;
}
console.log(checkRevenue([42, 10, 20, 20], 50));

/* const getRevenue = (sales) => sales.reduce((sale, acc) => sale + acc, 0);

const checkRevenue = (sales, plannedRevenue) =>
  getRevenue(sales) >= plannedRevenue; */
