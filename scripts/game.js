// target all page elements
// function to check if he use the right tool for the right element etc axe shovel
// function to count the item he picked
// function to collect and items  he packed to the amount boxes side bar
// function to pull out from the amount box and drip in on the screen
// event for the start game
// event for return main page
// event for new game
// event for every cube in the map

const mainGame = document.querySelector(".main-game");

function createMap(type, rowStart, rowEnd, columnStart, columnEnd) {
  for (let row = rowStart; row <= rowEnd; row++) {
    for (let column = columnStart; column <= columnEnd; ++column) {
      const materialElement = document.createElement("div");
      materialElement.style.gridRowStart = row;
      materialElement.style.gridColumnStart = column;
      materialElement.classList.add(`${type}`);
      mainGame.appendChild(materialElement);
    }
  }
}

createMap("sun", 2, 5, 2, 5);
createMap("sun", 3, 4, 2, 5);
createMap("dirt", 16, 21, 1, 21);
createMap("grass", 15, 15, 1, 21);
createMap("gravel", 12, 14, 18, 18);
createMap("gravel", 13, 14, 3, 3);
createMap("gravel", 14, 14, 11, 11);
createMap("trunck_tree", 12, 14, 6, 6);
createMap("trunck_tree", 11, 14, 15, 15);
createMap("leaves", 11, 12, 20, 20);

// leaves;
// trunck_tree;
// grass;
// dirt;
// gravel;
// sky;
// sun;
