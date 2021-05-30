let h = +prompt("hours");
let m = +prompt("minutes");
let s = +prompt("seconds");
alert(Func(h, m, s));

function Func(a, b, c) {
  a *= 3600;
  b *= 60;
  return a + b + c;
}
