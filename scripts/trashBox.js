//function to take back from trash and push it back in the map
// addEvent btn for all trash box
// const dirt = document.querySelector("#dirt"); //trash
// const grass = document.querySelector("#grass"); //trash
// const gravel = document.querySelector("#gravel"); //trash
// const trunck_tree = document.querySelector("#trunck_tree"); //trash
// const leaves = document.querySelector("#leaves"); //trash
// const flowers = document.querySelector("#flowers"); //tras

//events for trash box -- side bar

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
