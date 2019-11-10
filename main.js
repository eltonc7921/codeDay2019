var player = [];
var bullets = [];
var zombies = [];


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
  for (let i = 0; i < bullets.length; i++) {
    bullets[i].display();
    bullets[i].move();
  }
  for (let i = 0; i < zombies.length; i++) {
    zombies[i].display();
  }
  for (let i = 0; i < player.length; i++) {
    player[i].move()
    player[i].display()
  }

  shoot();
}

function shoot() {
  if (frameCount % 60 == 0) {
    for (let i = 0; i < zombies.length; i++) {
      bullets.push(new OpBullet(zombies[i].x, zombies[i].y,2));
    }
  }
  if (frameCount % 60 == 0) {
     console.log(bullets[0].x);
  }
}
