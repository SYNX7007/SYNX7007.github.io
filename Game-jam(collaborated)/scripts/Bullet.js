class Bullet {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.speed = 20;
  }
  
  
  draw() {
    push();
    fill(0);
    circle(this.x, this.y, 8);
    pop();
  }
  
  update() {
    this.x += this.speed * cos(this.angle);
    this.y += this.speed * sin(this.angle);
  }
}