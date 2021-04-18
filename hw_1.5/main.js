let word = prompt("Введіть 5 значне число");
let new_word;

if (word.length < 6) {
  new_word = word.split("").reverse().join("");
  if (word == new_word) {
    alert("Palindrom");
  } else {
    alert("Not a palindrom");
  }
} else {
  alert("Wrong amount of numbers");
}
