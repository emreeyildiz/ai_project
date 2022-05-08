export default class Pacman {
  constructor(x, y, tileSize, velocity, tileMap) {
    this.x = x;
    this.y = y;
    this.tileSize = tileSize;
    this.velocity = velocity;
    this.tileMap = tileMap;
  }
}
// Pacman(
//     column * this.tileSize,
//     row * this.tileSize,
//     this.tileSize,
//     velocity,
//     this
// )
