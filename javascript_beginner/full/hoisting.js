let foo = 1;

function bar() {
  if (!foo) {
    let foo = 10;
  }

  return foo;
}
console.log(foo);

foo = bar();

console.log(bar());
console.log(foo);
