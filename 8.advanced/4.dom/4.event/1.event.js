var oneH = document.querySelector("#one");
var twoH = document.querySelector("#two");
var threeH = document.querySelector("#three");

oneH.addEventListener("mouseover", function () {
  oneH.textContent = "Mouse Currently Over!";
  oneH.style.color = "red";
});

oneH.addEventListener("mouseout", function () {
  oneH.textContent = "Hoverover ME!";
  oneH.style.color = "black";
});

twoH.addEventListener("click", function () {
  twoH.textContent = "Just Clicked!";
  twoH.style.color = "blue";
});

threeH.addEventListener("dblclick", function () {
  threeH.textContent = "Just Double Clicked!";
  threeH.style.color = "red";
});
