function isFibonacci(num) {
  let a = 0,
    b = 1,
    c = 0;
  if (num === 0 || num === 1) return true;
  while (c < num) {
    c = a + b;
    a = b;
    b = c;
  }
  return c === num;
}
const numberToCheck = 51;
const result = isFibonacci(numberToCheck);
console.log(
  `${numberToCheck} pertence a sequência Fibonacci? ${result ? "Sim" : "Não"}`
);
