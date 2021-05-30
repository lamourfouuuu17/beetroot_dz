// Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест
//  (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним

// Функция сортировки аудиторий по названию (по алфавиту).

function Academy(name, count, facultyName) {
  this.name = name || "none";
  this.facultyName = facultyName || "none";

  if (count < 20 && count > 10) {
    this.count = parseFloat(count);
  } else console.log("Error");
}

let arr = [
  new Academy("101", "12", "History"),
  new Academy("102", "12", "Computer science"),
  new Academy("103", "15", "History"),
  new Academy("104", "19", "Music"),
  new Academy("105", "12", "Computer science"),
  new Academy("106", "15", "History"),
];

// Вывод на экран всех аудиторий;
function showClasses(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Class is ${arr[i].name}`);
  }
}

// Вывод на экран аудиторий для указанного факультета;
function showClassesFaculty(fName, arr) {
  let classes = arr.filter(function (item) {
    if (fName === item.facultyName) {
      console.log(`Name: ${item.name}`);
    }
  });
}

// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из
// названия, количества студентов и названия факультета;
function showRightClasses(obj, arr) {
  let classes = arr.filter(function (item) {
    if (obj.facultyName === item.facultyName && obj.count <= item.count) {
      console.log(`For ${obj.name} is ${item.name}`);
    }
  });
}

// Функция сортировки аудиторий по количеству мест;
function SortByNum(arr) {
  for (let i = 0; i < arr.length; i++) {}
}

let obj = new Academy("KA-96", "15", "History");
// showClasses(arr);
// showClassesFaculty("History", arr);
// showRightClasses(obj, arr);
SortByNum(arr);
