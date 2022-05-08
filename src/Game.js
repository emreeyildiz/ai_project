import TileMap from "./TileMap.js";
const canvas = document.getElementById("gamecanvas");
const tileSize = 32;
const veloicty = 1;
const ctx = canvas.getContext("2d");
const tileMap = new TileMap(tileSize);
const pacman = tileMap.getPacman(velocity)

function gameLoop() {
  tileMap.draw(ctx);

}



tileMap.setCanvasSize(canvas)
setInterval(gameLoop, 1000, 75);
