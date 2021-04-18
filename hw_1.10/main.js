let day = +prompt("День");
let month = +prompt("Місяць");
let year = +prompt("Рік");

if (day <= 27) {
  alert(`${day + 1}.${month}.${year}`);
}

let month31 =
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12;
let month30 = month === 4 || month === 6 || month === 9 || month === 11;

if ((day < 31 && month31) || (day < 30 && month30)) {
  alert(`${day + 1}.${month}.${year}`);
} 
else if ((day === 31 && month31 && month !== 12) || (day === 30 && month30)) {
  alert(`01.${month + 1}.${year}`);
} 
else if (day === 31 && month === 12) {
  alert(`01.01.${year + 1}`);
} 
else if (month === 2 && day <= 29) {
  if (
    (year % 4 == 0 && year % 100 != 0 && day === 28) ||
    (year % 400 == 0 && day === 28)
  ) {
    alert(`29.${month}.${year}`);
  } 
  else{
    alert(`01.${month + 1}.${year}`);
  }
}
