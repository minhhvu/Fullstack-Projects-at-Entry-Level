/*
This script is to  create a basic animation which the box moving from left to right.
The purpose of activity is to practice JS on topics:
    - Canvas
    - Animation
April 2019, Developed by: Minh Hai Vu
 */

//Constants of Animation
const DURATION = 3000; //3 seconds
const DISTANCE = 300;
const NUMBER_OF_INTERVAL = 200;

var canvas = document.getElementById("canvas").getContext("2d");
var state = 0;

//Animation
function moving() {
    state = (state + DISTANCE/NUMBER_OF_INTERVAL) % DISTANCE; //New position

    //Clear canvas
    canvas.clearRect(0,0,500,500);

    //Save the current state
    canvas.save();

    //Draw rectangle
    canvas.translate(90,200);
    canvas.fillStyle = "#F31997";
    canvas.fillRect(state,0,15,20);

    //Restore the canvas state
    canvas.restore();
	

}

//MAIN
setTimeout(function () {
    var status = 1;
    var animation = setInterval(moving, DURATION/NUMBER_OF_INTERVAL);
    window.animation;
    window.addEventListener("keydown",function(){
        console.log(status);
        if (status == 1){
            window.clearInterval(animation); //Stop Animation
            status = 0;
        }else{
            animation = setInterval(moving, DURATION/NUMBER_OF_INTERVAL);
            window.animation; //Turn on Animation
            status = 1;
        };
    });
}, 1500);