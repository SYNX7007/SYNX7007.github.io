class Enemy {
  
  constructor(speed) {
    this.x = random(width);
    this.y = random(height);
    
    if (random(1) > 0.5) {
      this.x += width;
    } else {
      this.x -= width;
    }
    
    if (random(1) > 0.5) {
      this.y += height;
    } else {
      this.y -= height;
    }
    this.pos = createVector(this.x, this.y);
    this.speed = speed;
    this.angle = 0;
  }
  
  
  draw() {
    angleMode(degrees);
    rectMode(CENTER);
    push();
    translate(this.pos.x, this.pos.y);
    this.angle = atan2(player.pos.y - this.pos.y, player.pos.x - this.pos.x);
    rotate(this.angle);
    fill(100, 255, 100);
    image(EnemyImg, 0, 0, 50, 50);
    //rect(0, 0, 20, 20);
    pop();

    /* enemybullet
    for (let Enemybullet of this.Enemybullets) {
      Enemybullet.draw();
      Enemybullet.update();
    }
    
    if (this.Enemybullets.length > 20) {
      this.Enemybullets.splice(0, 1);
    }*/
  }
  
  update() {
    let difference = p5.Vector.sub(player.pos, this.pos);
    difference.limit(this.speed);
    this.pos.add(difference);
  }

  /* this is for enemy bullet*/
  
  /*function Enemybullet(destinationX, destinationY, enemySprite) {

    this.id = 'bullet';
    this.x = enemySprite.getX()+(enemySprite.getWidth()/2);
    this.y = enemySprite.getY()+(enemySprite.getHeight()/2);

    var targetX = destinationX - this.x,
        targetY = destinationY - this.y,
        distance = Math.sqrt(targetX * targetX + targetY * targetY);

    this.velX = (targetX / distance) * 5;
    this.velY = (targetY / distance) * 5;

    this.finished = false;

    this.sprite = new Kinetic.Circle({
        x: this.x,
        y: this.y, 
        radius: 3,
        fill: 'black',
        name: 'enemyProjectile'
    });

    this.draw = function(index) {

        var mayDelete = false;

        this.x += this.velX;
        this.y += this.velY;

        this.sprite.setAbsolutePosition(this.x, this.y);*/
        //console.log(this.sprite.getX());

/*
        if(enemyCollision(this) == true) {
            mayDelete = true;
        }*/

       /* if (bulletLeftField(this.sprite) == true) {
            mayDelete = true;
        }

        if (mayDelete == true) {
            this.sprite.remove();
            enemies[index].bullets.splice(0, 1);
            createEnemyBullet(enemies[index]);
        }



        ammoLayer.draw();
    }*/
}
