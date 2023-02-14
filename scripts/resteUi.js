"use strict";
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
  mainGame.innerHTML = "";
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
  mainGame.classList.remove("drakSky");
}
