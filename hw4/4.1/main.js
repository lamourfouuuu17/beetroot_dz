// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
// и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. s = v * t, t = s / v
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

let Car = {
  prod: "sfc",
  model: "acs",
  year: 24,
  speed: 20, // чи обов'язково тут прописувати значення

  Info: function (p, m, y, s) {
    this.prod = p;
    this.model = m;
    this.year = y;
    this.speed = s;
    return `prod: ${p}, model: ${m}, year: ${y}, speed: ${s}`;
  },

  CalcSpeed: function (distance) {
    let time;
    let extra_time;
    time = distance / this.speed;
    extra_time = Math.trunc(time / 4);
    time += extra_time;
    return time;
  },
};

console.log(Car.Info("peugeot", "308", 1999, 40));
console.log(Car.CalcSpeed(400));
