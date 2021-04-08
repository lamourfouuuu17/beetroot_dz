//  Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
let num = prompt("Введіть суму");
let new_num;
if (200 < num < 300) {
  new_num = (num * 97) / 100;
  alert(new_num);
} else if (300 < num < 500) {
  new_num = (num * 95) / 100;
  alert(new_num);
} else if (500 < num) {
  new_num = (num * 93) / 100;
  alert(new_num);
}
