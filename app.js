import { Game } from "./game/game.js";
import { Scene1 } from "./game/scenes/scene1.js";

var game;
var config = {
  width: 360,
  height: 360,
  type: Phaser.AUTO,
  // scale : {
  //   mode : Phaser.Scale.FIT,
  //   autoCenter : Phaser.Scale.CENTER_BOTH
  // },
  physics : {
    default: 'arcade',
    arcade: {
      debug : true
    }
  },
  scene: [Scene1],
  backgroundColor: 0x6fccb8,
}

window.addEventListener("load", init);

function init(){
  // pass the configuraton to our game class
  game = new Game( config );
}