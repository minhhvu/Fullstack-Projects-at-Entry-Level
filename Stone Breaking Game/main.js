/*******************************************************************
	Summer 2019, Coded by Minh Hai Vu
********************************************************************/
let welcomeNode = document.getElementById('welcome-play');
new WelcomingScreen(welcomeNode);

let menu = new MenuBoard();
menu.display();

//var randomNum = new RandomNumbers(NUM_OF_STONES[menu.level-1]);
//var stone = new Stone();

let canvas = document.getElementById("canvas");
let timerNode = document.querySelector("div.menu-left-time");
let rotation = new Animation(menu.beginningTime, menu.level, canvas, timerNode);
rotation.start();

//var gameover = new GameOver();

//Start the game
//Set timeout for animation
window.setTimeout(callback, TIME_PER_TURN);

//Key down listener
document.addEventListener("keydown",function(){

});

//Trigger the rotation animation
callback = this.rotate;
window.setInterval(callback, 500);