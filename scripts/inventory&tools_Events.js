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
