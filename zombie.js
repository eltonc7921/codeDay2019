class Zombie {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;

  }

  display() {
    noStroke()
    rect(this.x, this.y, 50, 50)
    fill(10, 200, 50);
  }
}
