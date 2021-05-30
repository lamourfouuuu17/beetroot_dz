// Написать функцию, которая принимает 2 числа и возвращает -1,
// если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function Numbers(a, b) {
  a = +prompt("first number");
  b = +prompt("second number");
  if (a < b) alert(-1);
  else if (a > b) alert(1);
  else if (a === b) alert(0);
}

Numbers();
