let sum = 0;
for (let i = 0; i <= 11; i += 1) {
  if (i % 2 === 1) {
    console.log("found");
    sum += i;
  }
}
if (sum * 5 > 5000) {
  console.log("Bigger");
} else {
  console.log("Smaller or equal");
}
