export class Scene1 extends Phaser.Scene{
  constructor(){
    super( "Scene1" );
    this.BASE_URL = "game/";
  }

  preload(){
    this.load.image("spr_ball", this.BASE_URL + "assets/sprites/ball.png" );
  }

  create(){
    this.spr_ball = this.add.image( 180, 180, "spr_ball" ).setOrigin( 0.5 );
  }

  update(){

  }
}