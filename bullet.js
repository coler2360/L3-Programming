    class Bullet {
        constructor(x, y, w, h, ySpeed, c) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.ySpeed = ySpeed;
            this.c = c;
        }
        drawBullet() {
            canvasContext.fillStyle = this.c;
            canvasContext.fillRect(this.x, this.y, this.w, this.h)
        }
        

        bulletMove() {
            this.y -= this.ySpeed;
        }

        outOfBounds() {
            return this.y - this.h < 0 || this.x - this.w < 0 || this.x > canvas.width || this.y > canvas.height;
        }

        hasHitItem(item) {
            return ((this.x + this.w) >= item.x //width
                    &&
                    this.x <= (item.x + item.w)) &&
                (this.y >= item.y &&
                    this.y <= (item.y + item.h));
        }

        hasHitEnemy(enemy) {
            return this.hasHitItem(enemy);
        }

        hasCollided() {
            var self = this;
            var collided = false;

            enemies.forEach(function (enemy, i) {
                console.log('hit');
                if (self.hasHitEnemy(enemy)) {
                    delete enemies[i];
                    collided = true;
                }
            });

            enemies = enemies.filter(item => item !== undefined);
            return collided;

        }
    }

    function makeBullet() {
        const BULLET_WIDTH = 3;
        const BULLET_HEIGHT = 10;
        var bulletXpos = player.x + player.w / 2 - BULLET_WIDTH / 2;
        var bulletYpos = player.y - BULLET_HEIGHT;
        var bulletYspeed = 8;
        var color = 'red';

        var b = new Bullet(bulletXpos, bulletYpos, BULLET_WIDTH, BULLET_HEIGHT, bulletYspeed, color);
        bullets.push(b);
    }
