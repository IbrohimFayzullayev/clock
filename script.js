"use strict";
let h = document.querySelector(".hour");
const sec = document.querySelector(".second");
const min = document.querySelector(".minute");
const time = document.querySelector(".time");
const dark = document.querySelector(".dark__btn");
const b = document.querySelector("body");
const back = document.querySelectorAll(".black");
setInterval(function () {
  let d = new Date();
  let options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  let uz = new Intl.DateTimeFormat("ru-RU", options).format(d);
  time.textContent = uz;
  let degreSec = d.getSeconds() * 6;
  let degMin = d.getMinutes() * 6;
  let dH;
  if (d.getHours() > 12) {
    let a = d.getHours() - 12;
    dH = 30 * a + d.getMinutes() / 2;
  } else {
    dH = 30 * d.getHours() + d.getMinutes() / 2;
  }
  sec.style.webkitTransform = "rotate(" + degreSec + "deg)";
  min.style.webkitTransform = "rotate(" + degMin + "deg)";
  h.style.webkitTransform = "rotate(" + dH + "deg)";
}, 1000);
let check = true;
dark.addEventListener("click", function () {
  let arr = [...back];
  if (check) {
    b.style.backgroundColor = "black";
    for (let i = 0; i < arr.length; i++) {
      back[i].style.backgroundColor = "white";
    }
    dark.style.color = "black";
    time.style.color = "white";
    check = false;
  } else {
    b.style.backgroundColor = "white";
    for (let i = 0; i < arr.length; i++) {
      back[i].style.backgroundColor = "black";
    }
    dark.style.color = "white";
    time.style.color = "black";
    check = true;
  }
});
