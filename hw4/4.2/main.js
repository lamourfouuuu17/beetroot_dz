// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби,
//  и следующие функции для работы с этим объектом:
// Функция сложения 2-х объектов-дробей;
// Функция вычитания 2-х объектов-дробей;
// Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей;
// Функция сокращения объекта-дроби.

let obj1 = new Num(20, 60);
let obj2 = new Num(30, 4);
let znam;

function Num(ch, zn) {
  this.ch = ch;
  this.zn = zn;
}

function znamenatel(obj1, obj2) {
  let i = obj1.zn > obj2.zn ? obj1.zn : obj2.zn;
  for (i; true; i++) {
    if (i % obj1.zn === 0 && i % obj2.zn === 0) {
      znam = i;
      break;
    }
  }
  return znam;
}

function sum(obj1, obj2) {
  return `сума: ${
    obj1.ch * (znam / obj1.zn) + obj2.ch * (znam / obj2.zn)
  }/${znam}`;
}

function diff(obj1, obj2) {
  return `різниця: ${
    obj1.ch * (znam / obj1.zn) - obj2.ch * (znam / obj2.zn)
  }/${znam}`;
}

function multiple(obj1, obj2) {
  return `множення: ${obj1.ch * obj2.ch}/${obj1.zn * obj2.zn}`;
}

// function divide(obj1, obj2) {
//   for (let i = 2; true; i++) {
//     if (obj1.ch % i === 0 && (obj1.zn % i === 0 || obj2.ch % i === 0)) {
//     }
//     obj1.ch /= i;
//   }
// }
function divide(obj1, obj2) {
  let c, z, q, w;
  c = obj1.ch * obj2.zn;
  z = obj1.zn * obj2.ch;
  let a = c > z ? z : c;
  for (let i = a; true; i--) {
    if (c % i === 0 && z % i === 0) {
      q = c / i;
      w = z / i;
      break;
    }
  }
  return `ділення: ${q}/${w}`;
}

function sokr(obj1) {
  let q, w;
  let a = obj1.ch > obj1.zn ? obj1.zn : obj1.ch;
  for (let i = a; true; i--) {
    if (obj1.ch % i === 0 && obj1.zn % i === 0) {
      q = obj1.ch / i;
      w = obj1.zn / i;
      break;
    }
  }
  return `скорочення: ${q}/${w}`;
}

console.log(znamenatel(obj1, obj2));
console.log(sum(obj1, obj2));
console.log(diff(obj1, obj2));
console.log(multiple(obj1, obj2));
console.log(divide(obj1, obj2));
console.log(sokr(obj1));
