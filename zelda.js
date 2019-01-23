
let doorOpen = false;
let transitionOn = false;

//Here we define classes to be used in the project.
class Pos{
	constructor(x = 99, y = 94){
		this.x = x;
		this.y = y;
	}
}
class Speed{
	constructor(up = 0, down = 0, left = 0, right = 0){
		this.up = up;
		this.down = down;
		this.left = left;
		this.right = right;
	}
}

class Player{
	constructor(frameCount = 9, currentFrame = 0, srcX = 0, srcY = 416, oldKey = 'down', attack = false, hitMarkerX, hitMarkerY){
		this.pos = new Pos;
		this.speed = new Speed;
		this.frameCount = frameCount;
		this.currentFrame = currentFrame;
		this.srcY = srcY;
		this.oldKey = oldKey;
		this.srcX = srcX;
		this.attack = attack;
		this.hitMarkerX = hitMarkerX;
		this.hitMarkerY = hitMarkerY;
	}

	getFrame(dirX, dirY){

		this.hitMarkerX = this.pos.x + 26;
		this.hitMarkerY = this.pos.y + 26;

		this.pos.x += (this.speed.left + this.speed.right);
		this.pos.y -= (this.speed.down + this.speed.up);

		if(this.pos.x >= 194){
			this.pos.x = 194;
		}

		if(this.pos.x <= 2){
			this.pos.x = 2;
		}

		if(this.pos.y <= -6){
			this.pos.y = -6;
		}

		if(this.pos.y >= 190){
			this.pos.y = 190;
		}

		this.dirX = dirX;
		this.dirY = dirY;

		if((this.attack === true) && (this.srcX === 208) && this.srcY === 676){
			this.attack = false;
			this.srcX = 0;
			this.srcY = 468;
		}else if((this.attack === true) && (this.srcX === 260)){
			this.attack = false;
			this.srcX = 0;
			switch(this.oldKey){
				case 'down':
					this.srcY = 416;
					break;

				case 'left':
					this.srcY = 520;
					break;

				case 'right':
					this.srcY = 572;
					break;
			}
		}

		switch(dirY){
			case 0:
				switch(dirX){
					case 0:
						this.frameCount = 1;
						this.srcX = 0;
						break;

					case 2:
						this.srcX = 0;
						this.srcY = 572;
						this.frameCount = 9;
						this.oldKey = 'right';
						break;

					case -2:
						this.srcX = 0;
						this.srcY = 520;
						this.frameCount = 9;
						this.oldKey = 'left';
						break;
				}
				break;

			case -2:
				switch(dirX){
					case 0:
						this.srcX = 0;
						this.srcY = 416;
						this.frameCount = 9;
						this.oldKey = 'down';
						break;

					case 2:
						if(this.oldKey === 'right'){
							this.srcX = 0;
							this.srcY = 572;
							this.frameCount = 9;
						}else{
							this.srcX = 0;
							this.srcY = 416;
							this.frameCount = 9;
						}
						break;

					case -2:
						if(this.oldKey === 'left'){
							this.srcX = 0;
							this.srcY = 520;
							this.frameCount = 9;
						}else{
							this.srcX = 0;
							this.srcY = 416;
							this.frameCount = 9;
						}
						break;
				}
				break;

			case 2:
				switch(dirX){
					case 0:
						this.srcX = 0;
						this.srcY = 468;
						this.frameCount = 8;
						this.oldKey = 'up';
						break;

					case 2:
						if(this.oldKey === 'right'){
							this.srcX = 0;
							this.srcY = 572;
							this.frameCount = 9;
						}else{
							this.srcX = 0;
							this.srcY = 468;
							this.frameCount = 8;
						}
						break;

					case -2:
						if(this.oldKey === 'left'){
							this.srcX = 0;
							this.srcY = 520;
							this.frameCount = 9;
						}else{
							this.srcX = 0;
							this.srcY = 468;
							this.frameCount = 8;
						}
						break;
				}
				break;
		}

		if(this.attack === true){

			this.frameCount = 6;

			switch(this.srcY){
				case 520:
					this.srcX = 0;
					this.srcY = 728;
					break;

				case 468:
					this.srcX = 0;
					this.srcY = 676;
					this.frameCount = 5;
					break;

				case 572:
					this.srcX = 0;
					this.srcY = 780;
					break;

				case 416:
					this.srcX = 0;
					this.srcY = 624;
					break;
			}
		}

		this.currentFrame = (++this.currentFrame % this.frameCount);
		this.srcX += (this.currentFrame * 52);

		context.drawImage(playerImg, player.srcX, player.srcY, 52, 52, player.pos.x, player.pos.y, 52, 52);

		if(doorOpen === true){
			if((this.pos.x < 110) && (this.pos.x > 90)){
				if(this.pos.y < -4){
					this.pos.y = 190;
					enemy.hp = 3;
					doorOpen = false;
					context.fillStyle = "rgba(0, 0, 0, 0.75)";
					context.fillRect(0, 0, canvas.width, canvas.height);
					transitionOn = true;
					setTimeout(function(){ transitionOn = false }, 1000);

				}else if(this.pos.y > 188){
					this.pos.y = -6;
					enemy.hp = 3;
					doorOpen = false;
					context.fillStyle = "rgba(0, 0, 0, 0.75)";
					context.fillRect(0, 0, canvas.width, canvas.height);
					transitionOn = true;
					setTimeout(function(){ transitionOn = false }, 1000);
				}
			}

			if((this.pos.y < 110) && (this.pos.y > 90)){
				if(this.pos.x > 192){
					this.pos.x = 2;
					enemy.hp = 3;
					doorOpen = false;
					context.fillStyle = "rgba(0, 0, 0, 0.75)";
					context.fillRect(0, 0, canvas.width, canvas.height);
					transitionOn = true;
					setTimeout(function(){ transitionOn = false }, 1000);

				}else if(this.pos.x < 4){
					this.pos.x = 194;
					enemy.hp = 3;
					doorOpen = false;
					context.fillStyle = "rgba(0, 0, 0, 0.75)";
					context.fillRect(0, 0, canvas.width, canvas.height);
					transitionOn = true;
					setTimeout(function(){ transitionOn = false }, 1000);
				}
			}
		}

	}
}

class Enemy{
	constructor(enemyImg = new Image(), dirX = 0, dirY = 0, dir = 'down', srcX = 0, srcY = 0, currentFrame = 0, frameCount = 3, hp = 3, hitMarkerX, hitMarkerY, playerDistance){
		this.frameCount = frameCount;
		this.currentFrame = currentFrame;
		this.srcX = srcX;
		this.srcY = srcY;
		this.enemyImg = enemyImg;
		this.enemyImg.src = 'enemySpriteSheetOfficial.png';
		this.pos = new Pos;
		this.speed = new Speed;
		this.pos.x = Math.floor((Math.random() * 192) + 2);
		this.pos.y = Math.floor((Math.random() * 196) - 6);
		this.hp = hp;
		this.hitMarkerX = hitMarkerX;
		this.hitMarkerY = hitMarkerY;
		this.playerDistance = playerDistance;
	}

	getFrame(){
		let absoluteX = 0;
		let absoluteY = 0;
		let negX = false;
		let negY = false;
		this.speed.left = 0;
		this.speed.right = 0;
		this.speed.down = 0;
		this.speed.up = 0;

		this.hitMarkerX = this.pos.x + 26;
		this.hitMarkerY = this.pos.y + 26;

		this.playerDistance = Math.sqrt(Math.pow((this.hitMarkerX - player.hitMarkerX), 2) + Math.pow((this.hitMarkerY - player.hitMarkerY), 2));

		if(this.playerDistance < 100){
			if(this.pos.x > player.pos.x){
				this.speed.left = -1;
				negX = true;
			}

			if(this.pos.x < player.pos.x){
				this.speed.right = 1;
			}

			if(this.pos.y > player.pos.y){
				this.speed.up = 1;
			}

			if(this.pos.y < player.pos.y){
				this.speed.down = -1;
				negY = true;
			}

			absoluteX = Math.abs(this.pos.x - player.pos.x);
			absoluteY = Math.abs(this.pos.y - player.pos.y);

			if(absoluteX < absoluteY){
				if(negY === true){
					this.srcX = 0;
					this.srcY = 0;
					this.frameCount = 4;
				}else{
					this.srcX = 0;
					this.srcY = 52;
					this.frameCount = 4;
				}
			}

			if(absoluteX > absoluteY){
				if(negX === true){
					this.srcX = 0;
					this.srcY = 104;
					this.frameCount = 3;
				}else{
					this.srcX = 0;
					this.srcY = 156;
					this.frameCount = 3;
				}
			}

			if(absoluteX === absoluteY){
				this.srcX = 0;
				this.frameCount = 1;
			}

			this.currentFrame = (++this.currentFrame % this.frameCount);
			this.srcX += (this.currentFrame * 52);
		}

		let fellowEnemyX = this.pos.x - enemy.pos.x;
		let fellowEnemyY = this.pos.y - enemy.pos.y;

		if((Math.abs(fellowEnemyX)) < 10){
			if(fellowEnemyX > 0){
				this.speed.right = 1;
				this.pos.x += 1;
			}else if(fellowEnemyX < 0){
				this.speed.left = -1;
				this.pos.x -= 1;
			}
		}

		if((Math.abs(fellowEnemyY)) < 10){
			if(fellowEnemyY > 0){
				this.speed.down = -1;
				this.pos.y += 1;
			}else if(fellowEnemyY < 0){
				this.speed.up = 1;
				this.pos.y -= 1;
			}
		}

		if(this.playerDistance < 19){
			this.speed.left = 0;
			this.speed.right = 0;
			this.speed.down = 0;
			this.speed.up = 0;
		}

		this.pos.x += (this.speed.left + this.speed.right);
		this.pos.y -= (this.speed.down + this.speed.up);

		context.drawImage(this.enemyImg, this.srcX, this.srcY, 52, 52, this.pos.x, this.pos.y, 52, 52);
	}

	displayEnemy(){
		if(this.hp > 0){
			this.getFrame();
		}else{
			this.pos.x = Math.floor((Math.random() * 192) + 2);
			this.pos.y = Math.floor((Math.random() * 196) - 6);
			this.speed.left = 0;
			this.speed.right = 0;
			this.speed.down = 0;
			this.speed.up = 0;
			doorOpen = true;
		}
	}

}

class Room{
	constructor(roomTile = new Image(), wallSprite = new Image(), doorSprite = new Image(), cornerSprite = new Image(), openDoorSprite = new Image()){
		this.roomTile = roomTile;
		this.wallSprite = wallSprite;
		this.doorSprite = doorSprite;
		this.cornerSprite = cornerSprite;
		this.openDoorSprite = openDoorSprite;
		this.roomTile.src = 'Green_Tile.png';
		this.wallSprite.src = 'Wall_Tile.png';
		this.doorSprite.src = 'Closed_Door.png';
		this.cornerSprite.src = 'Corner_Tile.png';
		this.openDoorSprite.src = 'Open_Door.png';
	}

	createRoom(){
		for(let i = 5; i < window.innerHeight; i += 16){
			for(let j = 5; j < window.innerHeight; j += 16){
				context.drawImage(this.roomTile, 0, 0, 48, 48, i, j, 16, 16);
			}
		}

		for(let i = 0; i < window.innerHeight; i += 16){
			context.drawImage(this.wallSprite, 0, 0, 48, 72, i, 0, 16, 24);

			context.rotate(90*Math.PI/180);
			context.drawImage(this.wallSprite, 0, 0, 48, 72, i, -250, 16, 24);
			context.rotate(-90*Math.PI/180);

			context.rotate(180*Math.PI/180);
			context.drawImage(this.wallSprite, 0, 0, 48, 72, -i, -250, 16, 24);
			context.rotate(-180*Math.PI/180);

			context.rotate(270*Math.PI/180);
			context.drawImage(this.wallSprite, 0, 0, 48, 72, -i, 0, 16, 24);
			context.rotate(-270*Math.PI/180);
		}

		context.drawImage(this.cornerSprite, 0, 0, 72, 72, 0, 0, 24, 24);
		context.drawImage(this.doorSprite, 0, 0, 96, 72, 109, 0, 32, 24);

		context.rotate(90*Math.PI/180);
		context.drawImage(this.cornerSprite, 0, 0, 72, 72, 0, -250, 24, 24);
		context.drawImage(this.doorSprite, 0, 0, 96, 72, 109, -250, 32, 24);
		context.rotate(-90*Math.PI/180);

		context.rotate(180*Math.PI/180);
		context.drawImage(this.cornerSprite, 0, 0, 72, 72, -250, -250, 24, 24);
		context.drawImage(this.doorSprite, 0, 0, 96, 72, -141, -250, 32, 24);
		context.rotate(-180*Math.PI/180);

		context.rotate(270*Math.PI/180);
		context.drawImage(this.cornerSprite, 0, 0, 72, 72, -250, 0, 24, 24);
		context.drawImage(this.doorSprite, 0, 0, 96, 72, -141, 0, 32, 24);
		context.rotate(-270*Math.PI/180);

		if(enemy.hp <= 0){
			context.drawImage(this.openDoorSprite, 0, 0, 96, 72, 109, 0, 32, 24);

			context.rotate(90*Math.PI/180);
			context.drawImage(this.openDoorSprite, 0, 0, 96, 72, 109, -250, 32, 24);
			context.rotate(-90*Math.PI/180);

			context.rotate(180*Math.PI/180);
			context.drawImage(this.openDoorSprite, 0, 0, 96, 72, -141, -250, 32, 24);
			context.rotate(-180*Math.PI/180);

			context.rotate(270*Math.PI/180);
			context.drawImage(this.openDoorSprite, 0, 0, 96, 72, -141, 0, 32, 24);
			context.rotate(-270*Math.PI/180);
		}
	}
}

//We create the canvas and the context.
const canvas = document.getElementById('zelda');
const context = canvas.getContext('2d');

//Setting to false prevents pixel art from looking blurry.
context.imageSmoothingEnabled = false;

//Setting up player sprite sheet
let playerImg = new Image();
playerImg.src = 'linkSpriteSheetOfficial.png';

const player = new Player;
const room = new Room;
const enemy = new Enemy;
const enemy2 = new Enemy;

let fps = 20;
let now;
let then = Date.now();
let interval = 1000/fps;
let delta;

function draw() {

	requestAnimationFrame(draw);

	now = Date.now();
	delta = now - then;

	if (delta > interval) {
		// update time stuff

		then = now - (delta % interval);
		
		// ... Code for Drawing the Frame ...

//////////////////////////////////////////////////
		if(transitionOn === false){
			room.createRoom();

			dirX = player.speed.left + player.speed.right;
			dirY = player.speed.down + player.speed.up;

			enemy.displayEnemy();
			// enemy2.displayEnemy();

			player.getFrame(dirX, dirY);
		}


///////////////////////////////////////////////////

    }
}


document.onkeydown = function(e){
	if(e.keyCode==37){
		player.speed.left = -2;
	}

	if(e.keyCode==38){
		player.speed.up = 2;
	}

	if(e.keyCode==39){
		player.speed.right = 2;
	}

	if(e.keyCode==40){
		player.speed.down = -2;
	}

}

document.onkeyup = function(e){
	if(e.keyCode==37){
		player.speed.left = 0;
	}

	if(e.keyCode==38){
		player.speed.up = 0;
	}

	if(e.keyCode==39){
		player.speed.right = 0;
	}

	if(e.keyCode==40){
		player.speed.down = 0;
	}

	if(e.keyCode==32){
		if(player.attack === false){
			player.attack = true;
			player.currentFrame = 0;
		}

		if(enemy.playerDistance < 35){
			enemy.hp -= 1;

			switch(enemy.srcY){
				case 0:
					enemy.pos.y -= 20;
					break;

				case 52:
					enemy.pos.y += 20;
					break;

				case 104:
					enemy.pos.x += 20;
					break;

				case 156:
					enemy.pos.x -= 20;
					break;
			}

		}
	}
}

draw();



