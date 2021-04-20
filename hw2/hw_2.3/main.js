// Запросить у пользователя число и вывести все делители этого числа.
let num = +prompt("Введіть число");
let dividers = "Дільники: 1";

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    dividers += `, ${i}`;
  }
}
alert(dividers);
