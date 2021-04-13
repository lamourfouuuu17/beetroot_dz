// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат
// и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

for (;;) {
  let num = confirm("Натисніть ОК, щоб щось порахувати");
  if (!num) {
    break;
  }
  let num1 = +prompt("Перше число");
  let num2 = +prompt("Друге число");
  let znak = prompt("Знак");

  if (num) {
    if (znak === "+") {
      alert(num1 + num2);
    } else if (znak === "-") {
      alert(num1 - num2);
    } else if (znak === "*") {
      alert(num1 * num2);
    } else if (znak === "/") {
      alert(num1 / num2);
    }
  }
}
