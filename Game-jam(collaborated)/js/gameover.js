var GameOver = function(game){};

GameOver.prototype = {

  	create: function(){

			this.game.stage.backgroundColor = '479cde';

			this.quit = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
			this.resume = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
			this.showScore();
			var image = game.add.image(426, 125, 'trashpicker');
			image.anchor.setTo(0.5 , 0.5);
	},

	update: function () {

		if (this.resume.isDown) {
			this.restartGame();
		}
		if (this.quit.isDown) {
			this.quitGame();
		}

	},
	
	showScore: function () {

		var scoreFont = "40px Arial";
		var scoreFont2 = "10px Arial";

		this.scoreLabel = this.game.add.text(this.game.world.centerX
			, this.game.world.centerY / 2, "0", { font: scoreFont, fill: "#fff" });
		this.scoreLabel.anchor.setTo(0.5, 0.5);
		this.scoreLabel.align = 'center';
		this.game.world.bringToTop(this.scoreLabel);
		this.scoreLabel.text = "\n!!!Stop Land Pollution!!!\n\n\n\nDistance travelled is " + (score);

		this.highScore = this.game.add.text(this.game.world.centerX
			, this.game.world.centerY, "0", { font: scoreFont, fill: "#fff" });
		this.highScore.anchor.setTo(0.5, 0.5);
		this.highScore.align = 'center';
		this.game.world.bringToTop(this.highScore);

		this.hs = window.localStorage.getItem('HighScore');

		if (this.hs == null) {
			this.highScore.setText("\n\n\n\n\nHighest Distance Travlled " + score + '\n"The world generates 2.01 billion tonnes\nof municipal solid waste annually"');
			window.localStorage.setItem('HighScore', score)
		}
		else if (parseInt(this.hs) < score) {
			this.highScore.setText("\n\n\n\n\nHighest Distance Travlled " + (score) + '\n"The world generates 2.01 billiontonnes\nof municipal solid waste annually"');
			window.localStorage.setItem('HighScore', score)

		}
		else {
			this.highScore.setText("\n\n\n\n\nHighest Distance Travlled " + this.hs + '\n"The world generates 2.01 billion tonnes\nof municipal solid waste annually"');
		}

		this.restart = this.game.add.text(this.game.world.centerX/8
			, this.game.world.centerY * 2
			, "Press: \nSpace to retry \nEcs to Start Screen ", { font: scoreFont2, fill: "#fff" });
		this.restart.anchor.setTo(0.5, 1);
		this.restart.align = 'left';
		this.game.world.bringToTop(this.restart);

	},


	restartGame: function(){
		this.game.state.start("Main");
	},

	quitGame: function(){
		this.game.state.start("GameStart");
	}

}