class Animation{
    constructor(level, canvasNode, timerNode){
        this.numOfStone = NUM_OF_STONES[level];
        this.canvasNode = canvasNode;
        this.timerNode = timerNode;
        this.start = this.start.bind(this);
        this.rotate = this.rotate.bind(this);
    }

    //Start the rotation animation
    start(){
        //Set timeout for animation
        let callback = this.timeOut;
        window.setTimeout(callback, TIME_PER_TURN);

        //Key down listener
        document.addEventListener("keydown",function(){

        });

        //Trigger the rotation animation
        callback = this.rotate;
        window.setInterval(callback, 500);
    }

    rotate(){
        //Calculate the timer
        let date = new Date();
        let time = date.getTime() - this.beginningTimer;

        let canvasNode0 = this.canvasNode.getContext('2d');
        canvasNode0.clearRect(0,0,this.canvasNode.width, this.canvasNode.height);

        //Draw string
        canvasNode0.save();
        let angle = time % 3000 *Math.PI/3000 - Math.PI /2; //rotate 180 in 3 seconds
        console.log(angle);
        canvasNode0.translate(Math.floor((CANVAS_WIDTH-ROPE_WIDTH)/2),0);
        canvasNode0.rotate(angle);
        canvasNode0.fillStyle = STRING_COLOR;
        canvasNode0.fillRect(0,0, ROPE_WIDTH, ROPE_HEIGHT);
        canvasNode0.restore();

        //Update timer

        //Draw stones
    }

    timeOut(){
        //Clear animations

        //Go to game over screen
        console.log("timeout");
    }

    setTime(){
        this.beginningTimer = (new Date).getTime();
    }
}