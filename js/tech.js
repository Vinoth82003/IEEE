const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");

const roll = document.querySelector(".content-viewer");

const event1 = document.querySelector(".tech-event1");
const event2 = document.querySelector(".tech-event2");
const event3 = document.querySelector(".tech-event3");
const event4 = document.querySelector(".tech-event4");

const para = document.querySelector(".para");

img1.addEventListener("click", function () {
  roll.style.left = "0%";
  event1.style.display = "block";
 event2.style.display = "none";
 event3.style.display = "none";
  event4.style.display = "none";
});
img2.addEventListener("click", function () {
  roll.style.left = "-100%";
  event2.style.display = "block";
  event1.style.display = "none";
  event3.style.display = "none";
  event4.style.display = "none";
});
img3.addEventListener("click", function () {
  roll.style.left = "-200%";
  event3.style.display = "block";
  event1.style.display = "none";
  event2.style.display = "none";
  event4.style.display = "none";
});
img4.addEventListener("click", function () {
  roll.style.left = "-300%";
 event4.style.display = "block";
 event1.style.display = "none";
 event3.style.display = "none";
 event2.style.display = "none";
});
