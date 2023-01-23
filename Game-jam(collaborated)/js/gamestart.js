var GameStart = function(game){};

GameStart.prototype = {

  	create: function(){

			this.game.stage.backgroundColor = '479cde';
            var scoreFont = "40px Arial";

			this.start = this.game.add.text(this.game.world.centerX
				, 50
				, "The Garbage Jumper", { font: scoreFont, fill: "#fff" });
			this.start.anchor.setTo(0.5, 0.5);
			this.start.align =  'center';


		    this.start = this.game.add.text(this.game.world.centerX
			, this.game.world.centerY
			, "Press \n Space to Start", { font: scoreFont, fill: "#fff" });
		    this.start.anchor.setTo(0.5, 0.5);
		    this.start.align = 'center';
		    this.game.world.bringToTop(this.start);

			this.start = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
			
	},

	update: function () {

		if (this.start.isDown) {
			this.startGame();
		}

	},
    
	startGame: function(){
		this.game.state.start("Main");
	}
	
}