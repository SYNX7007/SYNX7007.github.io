//https://steemit.com/utopian-io/@onepice/create-scenes-and-scene-transitions-at-phaser3-library
//create a scene with class
var GameScene1 = new Phaser.Class({

    //The scene is noted.
    Extends: Phaser.Scene,

    initialize:

    function GameScene1 ()
    {
        //We create the scene and set the key.
        Phaser.Scene.call(this, { key: 'GameScene1' });
    },

    
    
    preload: function ()
    {
        //load ship
        this.load.image('ship','assets/picture.jpg');
    },

    create: function ()
    {
        var txt1 = this.add.text(100,100, 'start');
        //Create the ship object
        var ship=this.physics.add.sprite(500,300,'ship');
        //Move ship object
        ship.setVelocityX(-10);
    },

        });


//settings required to configure the game
var config = {
    type: Phaser.AUTO,   
    width: 800,
    height:  600,
    physics: {
        default: 'arcade'
    },
    //set background color
    backgroundColor: 0x27ae60,
    scale: {
        //we place it in the middle of the page.
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    //set scenes
    scene:[GameScene1]
    
};


var game = new Phaser.Game(config);
