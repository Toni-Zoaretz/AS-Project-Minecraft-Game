// target all page elements
const dirt = document.querySelector("#dirt"); //trash
console.log(typeof dirt.textContent);
const grass = document.querySelector("#grass"); //trash
const gravel = document.querySelector("#gravel"); //trash
const trunck_tree = document.querySelector("#trunck_tree"); //trash
const leaves = document.querySelector("#leaves"); //trash
const flowers = document.querySelector("#flowers"); //trash
const startAgain = document.querySelector(".btn-start"); //btn-start
const returnMainScreen = document.querySelector(".btn-return-main"); //btn-main-screen
const axe = document.querySelector("#axe"); //axe
console.log(axe.textContent);
const pickaxe = document.querySelector("#pickaxe"); //pikaxe
console.log(pickaxe.textContent);
const shovel = document.querySelector("#shovel"); //shovel
console.log(shovel.textContent);

//function to collect the items to the correct trash box

// function to count the item he picked

// function to pull out from the amount box and drip in on the screen

//  start again btn function and inital ui

startAgain.addEventListener("click", restart);

function restart() {
  dirtCollection = 0;
  grassCollection = 0;
  gravelCollection = 0;
  leavesCollection = 0;
  trunckTreeCollection = 0;
  flowersCollection = 0;
  leaves.textContent = leavesCollection;
  trunck_tree.textContent = trunckTreeCollection;
  flowers.textContent = flowersCollection;
  gravel.textContent = gravelCollection;
  grass.textContent = grassCollection;
  dirt.textContent = dirtCollection;
  fillEmptyDivs(1, 22, 1, 22);

  createMap("sun", 2, 2, 2, 2);
  createMap("sun", 3, 3, 3, 3);
  createMap("sun", 2, 2, 3, 3);
  createMap("sun", 3, 3, 2, 3);
  createMap("dirt", 16, 21, 1, 21);
  createMap("grass", 15, 15, 1, 21);
  createMap("gravel", 12, 14, 18, 18);
  createMap("gravel", 13, 14, 3, 3);
  createMap("gravel", 14, 14, 11, 11);
  createMap("trunck_tree", 12, 14, 6, 6);
  createMap("trunck_tree", 12, 14, 15, 15);
  createMap("leaves", 8, 11, 5, 7);
  createMap("leaves", 8, 11, 14, 16);
  createMap("flowers", 14, 14, 8, 8);
  createMap("flowers", 14, 14, 16, 16);
  createMap("flowers", 14, 14, 2, 2);
}

// event for return main page
// returnMainScreen.addEventListener("click", function () {});

// event for new game
// event for every cube in the map
