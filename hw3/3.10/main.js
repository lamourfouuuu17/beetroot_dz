// Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
//  При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
//  узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

let first_sec = +prompt("Введите первые секунды");
let first_min = +prompt("Введите первые минуты");
let first_hours = +prompt("Введите первые часы");
let second_sec = +prompt("Введите вторые секунды");
let second_min = +prompt("Введите вторые минуты");
let second_hours = +prompt("Введите вторые часы");
let first_sum;
let second_sum;
let diff;
alert(
  Func(first_sec, first_min, first_hours, second_sec, second_min, second_hours)
);

function Func(fS, fM, fH, sS, sM, sH) {
  let hours;
  let minutes;
  let seconds;
  fM = first_min * 60;
  fH = first_hours * 3600;
  first_sum = fS + fM + fH;

  sM = second_min * 60;
  sH = second_hours * 3600;
  second_sum = sS + sM + sH;

  diff = Math.abs(first_sum - second_sum); // взять модуль
  hours = Math.trunc(diff / 3600);
  minutes = Math.trunc((diff % 3600) / 60); //с остачи находим минуты
  seconds = diff % 60; // с остачи находим секунды
  return `${hours}:${minutes}:${seconds}`; //синтаксис
  // из diff найти часы,минуты,секунды
}
