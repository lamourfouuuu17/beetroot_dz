// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
// Например: цифры 1, 4, 9 превратятся в число 149.

function Nums(a, b, c) {
  a = +prompt("first number");
  b = +prompt("second number");
  c = +prompt("third number");
  alert(`${a}${b}${c}`);
}

Nums(1, 4, 6);
