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