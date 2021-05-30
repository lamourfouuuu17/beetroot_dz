// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и
//  цены за единицу товара. Написать следующие функции:

// + Распечатка чека на экран;
// + Подсчет общей суммы покупки;
// + Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.

function Check(name, count, price) {
  this.name = name || undefined;
  this.count = count || "0";
  this.price = parseFloat(price) || "0";
}

let array = [
  new Check("Shampoo", "5", "40$"),
  new Check("Parfume", "2", "1000$"),
  new Check("Mascara", "1", "600$"),
];

function CheckOut(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(
      `${i + 1} purchase is ${array[i].name}, count: ${
        array[i].count
      }, price: ${array[i].price}`
    );
  }
}

function Summ(array) {
  let summa = array.reduce(function (acc, item) {
    return (acc += item.price);
  }, 0);
  console.log(`Total sum is ${summa}`);
}

function biggestPrice(array) {
  let bigProd = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].price < array[i + 1].price)
      return (bigProd = array[i + 1].price);
    else return (bigProd = array[0].price);
  }
}

function AveragePrice(array) {
  let average = array.reduce(function (acc, item) {
    return (acc += item.price);
  }, 0);
  console.log(`Average price is ${average / array.length}`);
}

// CheckOut(array);
// Summ(array);
// console.log(biggestPrice(array));
AveragePrice(array);
