class OpBullet {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.xDisplacement = (this.x - player[0].x);
    this.yDisplacement = (this.y - player[0].y);
  }
  display() {
    ellipse(this.x, this.y, 10);
  }

  move() {
    this.x -= this.xDisplacement / 60/this.speed;
    this.y -= this.yDisplacement / 60/this.speed;
  }
}
