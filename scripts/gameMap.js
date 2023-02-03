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