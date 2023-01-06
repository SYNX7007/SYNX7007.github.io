// Find my blog at https://codeheir.com/
// I do a lot of p5.js stuff that might interest you!

let player;
let enemy = [];

let framesTillCreate = 300;
let frame = 0;
let speed = 2;

function setup() {
  createCanvas(1200, 600);
  imageMode(CENTER);
  player = new Player();
  EnemyImg = loadImage('assets/enemy 1.png');
  playerImg = loadImage('assets/player.png');
  grassImg = loadImage('assets/grass.jpg');
  enemy.push(new Enemy(random(speed)));
}

function draw() {
  image(grassImg, 0, 0, width*2, height * 2);
  
  frame++;
  player.draw();
  player.update();
  
  for (let i = enemy.length - 1; i >= 0; i--) {
    enemy[i].draw();
    enemy[i].update();
    if (player.shot(enemy[i])) {
      enemy.splice(i, 1);
    }
  }
  
  if (frame > framesTillCreate && enemy.length < 300) {
    enemy.push(new Enemy(random(speed)));
    frame = 0;
    if (framesTillCreate > 20) {
      framesTillCreate *= 0.95;
    }
  }
  
  if (frameCount % 1000 == 0) {
    speed+=0.1;
  }
  
}

function mouseClicked() {
  player.shoot();
}