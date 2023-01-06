class Player {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.bullets = [];
    this.angle = 0;
  }

  draw() {
    rectMode(CENTER);
    push();
    translate(this.pos.x, this.pos.y);
    this.angle = atan2(mouseY - this.pos.y, mouseX - this.pos.x);
    rotate(this.angle);
    image(playerImg, 0, 0, 50, 50);
    pop();
    
    
    for (let bullet of this.bullets) {
      bullet.draw();
      bullet.update();
    }
    
    if (this.bullets.length > 20) {
      this.bullets.splice(0, 1);
    }
  }
  
  update() {
    
    let sidewaysSpeed = 0;
    let forwardSpeed = 0;
    if (keyIsDown(65)) {
      sidewaysSpeed = -2;
    }

    if (keyIsDown(68)) {
      sidewaysSpeed = 2;
    }

    if (keyIsDown(87)) {
      forwardSpeed = -2;
    }

    if (keyIsDown(83)) {
      forwardSpeed = 2;
    }
    
    this.pos.add(sidewaysSpeed, forwardSpeed);
  }
  
  shot(enemy) {
    for (let i = this.bullets.length - 1; i >= 0; i--) {
      if (dist(this.bullets[i].x, this.bullets[i].y, enemy.pos.x, enemy.pos.y) < 30) {
        this.bullets.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  
  shoot() {
    this.bullets.push(new Bullet(this.pos.x, this.pos.y, this.angle));
  }
}
