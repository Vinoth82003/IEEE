const rotate_obj = document.querySelector(".rotate-menu");
const rotate_btn = document.querySelector(".op1");
const rotate_btn1 = document.querySelector(".op2");
const rotate_btn2 = document.querySelector(".op3");
const rotate_btn3 = document.querySelector(".op4");

rotate_btn.addEventListener("click", () => {
  rotate_obj.style.transform = "rotate(45deg)";
});
rotate_btn1.addEventListener("click", () => {
  rotate_obj.style.transform = "rotate(135deg)";
});
rotate_btn2.addEventListener("click", () => {
  rotate_obj.style.transform = "rotate(225deg)";
});
rotate_btn3.addEventListener("click", () => {
  rotate_obj.style.transform = "rotate(315deg)";
});