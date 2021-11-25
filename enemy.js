     class Enemy {
         constructor(src, x, y, w, h, xSpeed, ySpeed) {
             this.src = src;
             this.x = x;
             this.y = y;
             this.w = w;
             this.h = h;
             this.ySpeed = ySpeed;
             this.xSpeed = xSpeed;
         }


         enemyMove() {
             this.y += this.ySpeed;
             this.x += this.xSpeed;
             if (this.x > canvas.width - this.w || this.x < 0) {
                 this.xSpeed *= -1;
             }

             if (this.y > canvas.height) {
                 this.y = 0 - this.h;
                 healthWidth -= 5;
                 if (healthWidth <= 0) {
                     gameRun = false;
                 }
             }
         }

         drawEnemyImg() {
             canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h)
         }
     }


     function makeEnemy() {
         var eWidth = Math.floor(Math.random() * (30 - 10) + 10); //(max - min) + min 
         var eHeight = Math.floor(Math.random() * (30 - 10) + 10); //(max - min) + min 
         var eXpos = Math.floor(Math.random() * ((canvas.width - eWidth) - 0) + 0);
         var eYpos = 0;
         var eXspeed = Math.floor(Math.random() * (7 - 3) + 3);
         var eYspeed = Math.floor(Math.random() * (7 - 3) + 3);


         var e = new Enemy(enemyImg, eXpos, eYpos, eWidth, eHeight, eXspeed, eYspeed);
         enemies.push(e);

         if (difficulty == 'easy') {
             enemyTotal = 4;
         }

         if (difficulty == 'hard') {
             enemyTotal = 8;
         }
     }
