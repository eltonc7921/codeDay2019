class Player {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.move = function() {
      this.x = constrain(this.x, 25, height - 25);
      this.y = constrain(this.y, 25, height - 25);
      if (keyIsDown(83)) {
        // press w to move up
        this.y += this.speed;
      } else if (keyIsDown(87)) {
        // press s to move  down
        this.y -= this.speed;
      }
      if (keyIsDown(65)) {
        // press a to move left
        this.x -= this.speed;
      } else if (keyIsDown(68)) {
        // press d to move right
        this.x += this.speed;
      }
    }
    this.display = function() {
      fill(0,255,125);
      ellipse(this.x, this.y, 50, 50);
    }
  }
}
