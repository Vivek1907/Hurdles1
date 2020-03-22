var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;

var database;
var distance = 0;
var form, player, game;
var allPlayers;


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  player.getCount();
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
