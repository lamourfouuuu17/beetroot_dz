// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

let hours = +prompt("hours");
let minutes = +prompt("minutes");
let seconds = +prompt("seconds");
alert(Time(hours, minutes, seconds));

//не працює, коли дані не передані у prompt, не знаю як зробити перевірку на пустоту

function Time(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;
  if (x && y && z) {
    return `${x}:${y}:${z}`;
  } else if (y === null || y === " " || y === undefined) {
    return `${x}:00:${z}`;
  } else if (z === null || z === " " || z === undefined) {
    return `${x}:${y}:00`;
  } else if (x === null || x === " " || x === undefined) {
    return `00:${y}:${z}`;
  }
}
