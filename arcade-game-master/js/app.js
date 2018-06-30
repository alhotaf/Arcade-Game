// Enemies our player must avoid
var Enemy = function( x , y , speed) {
   this.x = x;
   this.y = y;
   this.speed = speed;
   this.sprite = 'images/enemy-bug.png';
};


Enemy.prototype.update = function(dt) {
     this.x += this.speed * dt;
	   if (this.x > 510) {
        this.x = -50;
        this.speed = 100 + Math.floor(Math.random() * 500);
    }
	
	  if (player.x < this.x + 70 &&
        player.x + 70 > this.x &&
        player.y < this.y + 60 &&
        60 + player.y > this.y) {
        player.x = 200;
        player.y = 400; }
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
 
 var player = function (x , y) {
	 this.x = x;
	 this.y = y;
	 this.icon = 'images/char-boy.png';
 }
 
 
 player.prototype.update = function(dt) {
	 /* if (this.y > 380) {
        this.y = 380;
    }

     if (this.x > 400) {
        this.x = 400;
    }

     if (this.x < 0) {
        this.x = 0;
    }

    if (this.y < 0) {
        this.x = 200;
        this.y = 380;
    } */
	 
 };
 
 
 player.prototype.render = function() {
	 ctx.drawImage(Resources.get(this.icon), this.x, this.y);
 };
 
 
player.prototype.handleInput = function(keyPress) {
 if (keyPress == 'left' && this.x > 0) {
        this.x -= 102;
    };

if (keyPress == 'right' && this.x < 405) {
        this.x += 102;
    };

if (keyPress == 'up' && this.y > 0) {
        this.y -= 83;
    };

if (keyPress == 'down' && this.y < 405) {
        this.y += 83;
    };

 if (this.y < 0) {
        setTimeout(() => {
            this.x = 200;
            this.y = 400;
        }, 600);
    };
};

var allEnemies = [];	
 
var enemyLocation = [70, 145, 215];


enemyLocation.forEach(function(locationY) {
    var enemy = new Enemy(0, locationY, 100);
    allEnemies.push(enemy);
});

var Player = new player(205, 330); 

document.addEventListener('keyup', function(a) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[a.keyCode]);
});
