# BASIC SCENE

The purpose of this repositiory is practicing creating a scene that is standalone in nature - *in a modular way*.

## 1) Create Modules

The main aim of this is to practice modularising phaser in order to improve mainatinability and retain simplicity within components.
With this goal in mind I create a game container and separate the game and scenes and assets

Each module ( /game/game.js and /game/scenes/scene1.js ) must export the game and scene classes respectively. We then declare them as modules in our /index.html file, to ensure they are treated as modules.

## 2) Instantiate the game

To start the game we create an init() function which we run when the whole document has loaded. Within it we create a new Game instance (*based on the game class we create*) and we pass to it a configuration object containing an instance of the scene we created.

## 3) Code

1. Game class - Simple game class that accepts a config object as a parameter

>`class Game extends Phaser.Game{`  
>&emsp;`constructor( GameConfig ){`  
>&emsp;&emsp;`super( GameConfig );`  
>&emsp;`}`  
>`}`

2. Scene class - simple scene extending the Phaser.Scene class. Used to create an independent scene such as a level, loading screen, settings screen e.t.c.

>`class Scene1 extends Phaser.Scene{`  
>&emsp; `constructor( ){`  
>&emsp;&emsp; `super( "Scene1" );`  
>&emsp; `}`  
>&emsp; `preload() {}`  
>&emsp; `create() {}`  
>&emsp; `update() {}`  
> `}`

3. Config object - used to pass parameters to the Game instance created. Has basic parameters and settings that initialize the phaser engine. The are a wide variety of properties that are used this exapmle contains five key ones.
    1. **width** and height - set the canvas size and game resolution the game will display in.
    2. **type** - set the renderer to use for the game. Available values are **Phaser.AUTO**, **Phaser.CANVAS**, **Phaser.HEADLESS** and **Phaser.WEBGL**.
    3. **physics** - set the physics systems to be used in the game, allows you to set global properties for the system as well.
    4. **scene** - pass one or more scenes - *as an array* - to the game. Scenes can be dynamically created, added and deleted.
    5. **backgroundColor** - sets the default background for the scene.
>`var config{`  
>&emsp; `width: 360,`  
>&emsp; `height: 360,`  
>&emsp; `type: Phaser.AUTO,`  
>&emsp; `physics: {`  
>&emsp;&emsp; `default: 'arcade',`  
>&emsp;&emsp; `arcade: {`  
>&emsp;&emsp;&emsp; `debug: true,`  
>&emsp;&emsp; `},`  
>&emsp; `},`  
>&emsp; `scene: [Scene1],`  
>&emsp; `backgroundColor: 0x6fccb8,`  
>`}`  

