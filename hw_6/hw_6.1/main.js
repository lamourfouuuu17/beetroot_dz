// Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get GetRadius() {
    return this.radius;
  }

  set SetRadius(r) {
    this.radius = r;
  }

  get GetDiametr() {
    return this.radius * 2;
  }

  area() {
    console.log(Math.PI * this.radius ** 2);
  }

  line() {
    console.log(2 * Math.PI * this.radius);
  }
}

let p = new Circle(10);

p.SetRadius = 5;
p.area();
p.line();
