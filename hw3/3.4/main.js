// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

// з одним параметром чомусь не рахує(
  
x = +prompt("length");
y = +prompt("width");
alert(Formulas(x, y));

function Formulas(a, b = a) {
  // if (b === undefined || b === null || b === " ") {
  //   b = a;
  //   return a * a;
  // } else if (a === undefined || a === null || a === " ") {
  //   a = b;
  //   return b * b;
  // } else {
    return a * b;
  }
}
