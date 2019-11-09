function setup() {
  createCanvas(800, 800);
  player.push(new Player(width/2,height/2,3))
  zombies.push(new Zombie(random(width),0,0));
  zombies.push(new Zombie(random(width),0,0));
  rectMode(CENTER);
}

function draw() {
  background(220);
  for (let i= 0 ; i < player.length; i++){
    player[i].move()
    player[i].display()
  }
  for (let i =0; i < zombies.length; i++){
    zombies[i].display()
  }
}
