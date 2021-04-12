// Запросить у пользователя длину окружности и периметр квадрата.
// Определить, может ли такая окружность поместиться в указанный квадрат.
let length = prompt("Введіть довжину кола");
let perimetr = prompt("Введіть периметр квадрата");
let diametr, a;

if (+length > 0 && +perimetr > 0) {
  diametr = +length / Math.PI;
  a = +perimetr / 4;
  if (diametr === a) {
    alert("Так, поміститься");
  } else {
    alert("Ні, не поміститься");
  }
}
