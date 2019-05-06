/*******************************************************************
	Summer 2019, Coded by Minh Hai Vu
********************************************************************/
let welcomeNode = document.getElementById('welcome-play');
new WelcomingScreen(welcomeNode);

var menu = new MenuBoard();
menu.display();

//var randomNum = new RandomNumbers(NUM_OF_STONES[menu.level-1]);
//var stone = new Stone();

let canvas = document.getElementById("canvas");
let timerNode = document.querySelector("div.menu-left-time");
var animation = new Animation(menu.level, canvas, timerNode);

//var gameover = new GameOver();

//MAIN
var rotationID = setInterval(animation.rotate, 100);
startGame();

function startGame() {

    //Key down listener
    document.addEventListener("keydown", function () {
        //animation.clearRotation();
    });

    //Set the playing time
    animation.setTime();

    //Set timeout for animation
    window.setTimeout(function (){
        window.clearInterval(rotationID);
        animation.timeOut();}, TIME_PER_TURN);

    //Trigger the rotation animation
    window.rotationID;
}