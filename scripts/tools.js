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

dirt.addEventListener("click", function () {
  currenTool = "dirtTrash";
});

// functions to check if he use the right tool for the right item and remove it
//function to collect the items to the correct trash box

let dirtCollection = 0;
let grassCollection = 0;
let gravelCollection = 0;
let leavesCollection = 0;
let trunckTreeCollection = 0;
let flowersCollection = 0;

function setDiv(e) {
  let classList = e.target.classList;
  if (classList.contains("leaves") && currenTool === "Axe") {
    classList.remove("leaves");
    leavesCollection++;
    leaves.textContent = leavesCollection;
  }
  if (classList.contains("trunck_tree") && currenTool === "Axe") {
    classList.remove("trunck_tree");
    trunckTreeCollection++;
    trunck_tree.textContent = trunckTreeCollection;
  }
  if (classList.contains("flowers") && currenTool === "Axe") {
    classList.remove("flowers");
    flowersCollection++;
    flowers.textContent = flowersCollection;
  }
  if (classList.contains("gravel") && currenTool === "Pickaxe") {
    classList.remove("gravel");
    gravelCollection++;
    gravel.textContent = gravelCollection;
  }
  if (classList.contains("grass") && currenTool === "Shovel") {
    classList.remove("grass");
    grassCollection++;
    grass.textContent = grassCollection;
  }
  if (classList.contains("dirt") && currenTool === "Shovel") {
    classList.remove("dirt");
    dirtCollection++;
    dirt.textContent = dirtCollection;
  }
  if (
    classList.length === 0 &&
    currenTool === "dirtTrash" &&
    dirtCollection > 0
  ) {
    classList.add("dirt");
    dirtCollection--;
    dirt.textContent = dirtCollection;
  }
}
