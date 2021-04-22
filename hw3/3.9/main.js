// Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

let sec = +prompt("Введите кол-во секунд");

let seconds;
let hours;
let minutes;
alert(FuncSeconds(sec));

function FuncSeconds(s) {
  hours = Math.trunc(s / 3600);
  minutes = Math.trunc((s % 3600) / 60); //с остачи находим минуты
  seconds = s % 60; // с остачи находим секунды
  return `${hours}:${minutes}:${seconds}`; //синтаксис
}
