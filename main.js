function setup() {
  createCanvas(800, 800);
  player.push(new Player(width/2,height/2,3))
}

function draw() {
  background(220);
  for (let i= 0 ; i < player.length; i++){
  player[i].move()
  player[i].display()
}
}
