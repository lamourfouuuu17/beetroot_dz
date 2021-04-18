// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
let num = prompt("Введіть USD");
let valuta = prompt("Введіть валюту EUR, UAN, AZN");
let new_num;

if (valuta == "EUR") {
  new_num = num * 0.84;
  alert(new_num);
} else if (valuta == "UAN") {
  new_num = num * 27.91;
  alert(new_num);
} else if (valuta == "AZN") {
  new_num = num * 1.7;
  alert(new_num);
}
