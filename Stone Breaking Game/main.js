/*******************************************************************
	Summer 2019, Coded by Minh Hai Vu
********************************************************************/
let welcomeNode = document.getElementById('welcome-play');
var welcome = new WelcomingScreen(welcomeNode);

var menu = new MenuBoard();
menu.display();

let canvas = document.getElementById("canvas");
var animation = new Animations(menu, canvas);

//var gameover = new GameOver();

//MAIN
var rotationID = setInterval(animation.rotate, INTERVAL_TIME);
var timerID = setInterval(animation.countdown, INTERVAL_TIME)
welcome.addPlayingListener(startGame);

function startGame() {

    //Key down listener
    document.addEventListener("keydown", function () {
        window.clearInterval(rotationID);
        if (animation.isReachingStone()){
            animation.pickStone();
        } else {
            animation.reachBorder();
        };
    });

    //Set the playing time
    animation.setTime();

    //Set timeout for animation
    window.setTimeout(function (){
        window.clearInterval(rotationID);
        window.clearInterval(timerID);
        animation.timeOut();}, TIME_PER_TURN);

    //Trigger the rotation animation
    window.rotationID;
    window.timerID;
}