let p = 0,
  n = 0,
  z = 0,
  o = 0,
  e = 0;

for (let i = 0; i < 10; i++) {
  let num = +prompt("Введіть число");

  if (num === 0) {
    z++;
  } else if (num > 0) {
    p++;
  } else if (num < 0) {
    n++;
  }

  if (num % 2 === 0) {
    e++;
  } else if (num % 2 !== 0) {
    o++;
  }
}

alert(`нульові: ${z}`);
alert(`більше нуля ${p}`);
alert(`менше нуля ${n}`);
alert(`парні ${e}`);
alert(`непарні ${o}`);
