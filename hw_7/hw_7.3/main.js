// Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

let circlef = document.querySelector(".first");

let circles = document.querySelector(".second");

let circlet = document.querySelector(".third");

let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  if (circlef.classList.contains("red")) {
    circlef.classList.remove("red");
    circles.classList.add("yellow");
  } else if (circles.classList.contains("yellow")) {
    circles.classList.remove("yellow");
    circlet.classList.add("green");
  } else if (circlet.classList.contains("green")) {
    circlet.classList.remove("green");
    circlef.classList.add("red");
  }
});
