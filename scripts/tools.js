// function to check which toll he used:

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

// functions to check if he use the right tool for the right item and remove it

function setDiv(e) {
  let classList = e.target.classList;
  if (classList.contains("leaves") && currenTool === "Axe") {
    classList.remove("leaves");
  }
  if (classList.contains("trunck_tree") && currenTool === "Axe") {
    classList.remove("trunck_tree");
  }
  if (classList.contains("flowers") && currenTool === "Axe") {
    classList.remove("flowers");
  }
  if (classList.contains("gravel") && currenTool === "Pickaxe") {
    classList.remove("gravel");
  }
  if (classList.contains("grass") && currenTool === "Shovel") {
    classList.remove("grass");
  }
  if (classList.contains("dirt") && currenTool === "Shovel") {
    classList.remove("dirt");
  }
}
