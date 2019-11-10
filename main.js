var player = [];
var eBullets = [];
var zombies = [];
var pBullets = [];


function setup() {
  createCanvas(800, 800);
  player.push(new Player(width / 2, height / 2, 3))
  zombies.push(new Zombie(random(width), 0 + 25, 4)); //top
  zombies.push(new Zombie(0 + 25, random(height), 4));
  zombies.push(new Zombie(random(width), height - 25, 4));
  zombies.push(new Zombie(width - 25, random(height), 4));
  rectMode(CENTER);
}

function draw() {
  background(0);
  for (let i = 0; i < eBullets.length; i++) {
    eBullets[i].display();
    eBullets[i].move();
  }
  for (let i = 0; i < zombies.length; i++) {
    zombies[i].display();
  }
  for (let i = 0; i < player.length; i++) {
    player[i].move()
    player[i].display()
  }
  for (let i = 0; i < pBullets.length; i++) {
    pBullets[i].move();
    pBullets[i].display();
  }
  eShoot();
  boundaryKill(pBullets);
  boundaryKill(eBullets);
}

function eShoot() {
  if (frameCount % 60 == 0) {
    for (let i = 0; i < zombies.length; i++) {
      eBullets.push(new Bullet(zombies[i].x, zombies[i].y,2));
    }
  }
}

function mousePressed() {
  pBullets.push(new PBullet(player[0].x, player[0].y, 1.5))
}

function boundaryKill(array) { //removes "array" when its out of canvas
  for (let i = 0; i < array.length; i++) {

    if (array[i].y <= 0 || //top
      array[i].y >= height || //bottom
      array[i].x <= 0 || //left
      array[i].x >= width) { //right
      array.splice(i, 1);
    }
  }
}
