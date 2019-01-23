class Player{

	constructor(playerNumber, y, downSpeed, upSpeed){
	this.y = y;
	this.playerImg = new Image();
	this.playerImg.src = './images/linkSpriteSheetOfficial.png';
	this.downSpeed = downSpeed;
	this.upSpeed = upSpeed;
	this.playerNumber = playerNumber;
	}

	updateFrame(){
		console.log(this.downSpeed);
		var downSpeed = this.downSpeed;
		var upSpeed = this.upSpeed;
		var y = this.y;
		function move(e){

			if(e.keyCode==38){
				upSpeed = 2;
			}

			if(e.keyCode==40){
				downSpeed = -2;
				console.log('downPress');
				console.log(downSpeed);
			}

		}
		console.log(this.downSpeed);
		function stop(e){

			if(e.keyCode==38){
				upSpeed = 0;
			}

			if(e.keyCode==40){
				downSpeed = 0;
			}

		}

		y -= upSpeed + downSpeed;


		context.fillRect(0, 0, canvas.width, canvas.height);
		context.drawImage(this.playerImg, 0, 416, 52, 52, 75, y, 52, 52);
		document.onkeydown = move;
		document.onkeyup = stop;
	}

}
