class Zombie {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;

  }

  display() {
    fill(255, 0, 0);
    noStroke()
    rect(this.x, this.y, 50, 50)
  }
}
