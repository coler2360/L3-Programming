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