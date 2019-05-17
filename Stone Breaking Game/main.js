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
var rotationID;// = setInterval(animation.rotate, INTERVAL_TIME);
var timerID;// = setInterval(animation.countdown, INTERVAL_TIME);
var pickingAnimationID; //= setInterval(animation.pickStone, 15);
welcome.addPlayingListener(startGame);

function callback() {
    console.log("press");
    window.clearInterval(rotationID);
    document.removeEventListener("keydown",callback); //Block the event listener for a while
    animation.setKeyPressedTime();
    let num = animation.isReachingStone();
    window.setTimeout(function () {
        rotationID = setInterval(animation.rotate, INTERVAL_TIME);
        window.rotationID;
        document.addEventListener("keydown",callback);
    },2500);
    if (num>=0){
        window.setTimeout(function () {
            window.clearInterval(pickingAnimationID);
            animation.hideStone(num);
        },1500);
        console.log("Yes", num, animation.target);
        pickingAnimationID = setInterval(animation.pickStone, 15);
        window.pickingAnimationID;
    } else {
        animation.reachBorder();
    };
}

function startGame() {

    //Key down listener
    document.addEventListener("keydown", callback);

    //Set the playing time
    animation.setBeginningTime();

    //Set timeout for animation
    window.setTimeout(function (){
        window.clearInterval(rotationID);
        window.clearInterval(timerID);
        document.removeEventListener("keydown",callback);
        animation.timeOut();}, TIME_PER_TURN);

    //Trigger the rotation animation
    rotationID = setInterval(animation.rotate, INTERVAL_TIME);
    timerID = setInterval(animation.countdown, INTERVAL_TIME);
    window.rotationID;
    window.timerID;
}