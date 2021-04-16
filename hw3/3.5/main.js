// Написать функцию, которая проверяет, является ли переданное ей число совершенным.
// Совершенное число – это число, равное сумме всех своих собственных делителей.

let b = +prompt("number");
alert(IdealNum(b) ? "perfect" : "not perfect");

function IdealNum(a) {
  let sum = 0;
  for (let i = 1; i < a; i++) {
    if (a % i === 0) {
      sum += i;
    }
  }
  return a === sum;
}
