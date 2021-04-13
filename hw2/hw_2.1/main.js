// Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let first_num = +prompt("Введіть перше число");
let second_num = +prompt("Введіть друге число");
let sum = 0;
let i;

for (i = first_num; second_num >= i; i++) {
  sum += i;
  i++;
}
alert(sum);
