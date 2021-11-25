class Ship {
    constructor(src, x, y, w, h, c, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.ySpeed = ySpeed;
        this.xSpeed = xSpeed;
        this.src = src;
    }

    drawShip() {
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h)
    }

    drawShipImg() {
        canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h)
    }

    shipMovement() {
        if (leftKeyPressed && this.x > 0) { // moveleft 
            this.x -= this.xSpeed;
        }
        if (rightKeyPressed && this.x < canvas.width - this.w) { // move right
            this.x += this.xSpeed;
        }
        if (upKeyPressed && this.y > 0) { // move Up 
            this.y -= this.ySpeed;
        }
        if (downKeyPressed && this.y < canvas.height - this.h) { // move right
            this.y += this.ySpeed;
        }
    }
    
    

    enemyHit(item) {
        return (this.x <= (item.x + item.w)
                && (this.x + this.w) >= item.x)
                &&
                (this.y <= (item.y + item.h)
                && (this.y + this.h) >= item.y); 
    }

    hasHitEnemy(enemy) {
        return this.enemyHit(enemy);
    }

    hasCollided() {
        var self = this;
        var collided = false;

        enemies.forEach(function (enemy, i) {
//            console.log('hit');
            if (self.hasHitEnemy(enemy)) {
//                delete enemies[i];
                if(self.x + self.w > enemy.x && self.x < enemy.x + enemy.w && self.y + self.h > enemy.y && self.y < enemy.y + enemy.h){
                    gameRun = false;
                }
//                console.log('hit');
                collided = true;
                
            }
        });

//        enemies = enemies.filter(item => item !== undefined);
        return collided;

    }
}
