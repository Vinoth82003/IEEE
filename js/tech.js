const move_obj = document.querySelector(".event-roller");
const move_btn1 = document.querySelector(".img1");
const move_btn2 = document.querySelector(".img2");
const move_btn3 = document.querySelector(".img3");
const move_btn4 = document.querySelector(".img4");

move_btn1.addEventListener("click", () => {
  move_obj.style.left = "0px";
});
move_btn2.addEventListener("click", () => {
  move_obj.style.left = "-917px";
});
move_btn3.addEventListener("click", () => {
  move_obj.style.left = "-1834px";
});
move_btn4.addEventListener("click", () => {
  move_obj.style.left = "-2751px";
});
