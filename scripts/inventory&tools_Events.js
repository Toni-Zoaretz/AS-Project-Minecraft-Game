"use strict";
//events for trash box and tools:

let currenTool = "";

axe.addEventListener("click", function () {
  currenTool = "Axe";
  console.log(currenTool);
});

pickaxe.addEventListener("click", function () {
  currenTool = "Pickaxe";
  console.log(currenTool);
});

shovel.addEventListener("click", function () {
  currenTool = "Shovel";
  console.log(currenTool);
});

dirt.addEventListener("click", function () {
  currenTool = "dirtTrash";
});

grass.addEventListener("click", function () {
  currenTool = "grassTrash";
});

gravel.addEventListener("click", function () {
  currenTool = "gravelTrash";
});

trunck_tree.addEventListener("click", function () {
  currenTool = "trunck_treeTrash";
});

leaves.addEventListener("click", function () {
  currenTool = "leavesTrash";
});

flowers.addEventListener("click", function () {
  currenTool = "flowersTrash";
});

const sun = document.querySelectorAll(".sun");
for (let i = 0; i <= 4; i++) {
  sun[i].addEventListener("click", function () {
    for (let j = 0; j <= 4; j++) {
      sun[j].classList.toggle("sun");
      sun[j].classList.toggle("moon");
    }
    mainGame.classList.toggle("drakSky");
  });
}
