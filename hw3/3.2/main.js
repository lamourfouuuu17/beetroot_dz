// Написать функцию, которая вычисляет факториал переданного ей числа.

function Factorial(n) {
  n = +prompt("number");
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  alert(factorial);
}

Factorial();
