class Animations{
    constructor(menu, canvasNode){
        this.canvasNode = canvasNode;
        this.menu = menu;
        this.isActive = [];
        this.target = [];
        for (let i=0; i<NUM_OF_STONES[this.menu.level]; i++){
            this.isActive[i] = true;
        }

        this.start = this.start.bind(this);
        this.rotate = this.rotate.bind(this);
        this.countdown = this.countdown.bind(this);
        this.isReachingStone = this.isReachingStone.bind(this);
        this.pickStone = this.pickStone.bind(this);
        this.reachBorder = this.reachBorder.bind(this);
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
        let angle = time % ROTATION_PERIOD *Math.PI/ROTATION_PERIOD - Math.PI /2; //rotate 180 in 3 seconds
        canvasNode0.translate(Math.floor((CANVAS_WIDTH-ROPE_WIDTH)/2),0);
        canvasNode0.rotate(angle);
        canvasNode0.fillStyle = STRING_COLOR;
        canvasNode0.fillRect(0,0, ROPE_WIDTH, ROPE_HEIGHT);
        canvasNode0.restore();

        //Draw stones
        canvasNode0.save();
        canvasNode0.translate(0,0);
        canvasNode0.fillStyle = "#ffffff";
        let numOfStone = NUM_OF_STONES[this.menu.level -1];
        for (let i=0; i<numOfStone; i++){
            if (this.isActive[i]) {
                let array = LEVEL_1_STONE_POSITIONS[i];
                let size = STONE_SIZE[array[2]];
                canvasNode0.fillRect(array[0], array[1], size[0], size[1]);
            }
        }
        canvasNode0.restore();
    }

    countdown(){
        let time = (new Date).getTime() - this.beginningTimer;
        time = TIME_PER_TURN - time; //the rest amount of seconds to play
        if (time<0) {
            time = 0;
        }
        this.menu.setTimer(time);
    }

    timeOut(){
        //Clear animations

        //Go to game over screen
        console.log("timeout");
    }

    setBeginningTime(){
        this.beginningTimer = (new Date).getTime();
    }

    isReachingStone(){
        let numOfStone = NUM_OF_STONES[this.menu.level-1];
        let angle = (this.pressingTime - this.beginningTimer) % ROTATION_PERIOD *Math.PI/ROTATION_PERIOD - Math.PI /2;;
        for (let i=0; i<numOfStone; i++){
            if (this.isActive[i]) {
                let array = LEVEL_1_STONE_POSITIONS[i];
                let size = STONE_SIZE[array[2]];
                let xOrigin = Math.floor((CANVAS_WIDTH - ROPE_WIDTH) / 2);
                if (Stone.isReached(array[0], array[1], size[0], size[1], angle, xOrigin)) {
                    console.log("reaching", i);
                    this.target[0] = array[0];
                    this.target[1] = array[1];
                    return i;
                }
                ;
            }
        }
        console.log("no");
        return -1;
    }

    setKeyPressedTime(){
        this.pressingTime = (new Date).getTime();
    }

    pickStone(){
        //Calculate the timer
        let time = this.pressingTime - this.beginningTimer;

        let canvasNode0 = this.canvasNode.getContext('2d');
        canvasNode0.clearRect(0,0,this.canvasNode.width, this.canvasNode.height);

        //Draw string
        canvasNode0.save();
        let angle = time % ROTATION_PERIOD *Math.PI/ROTATION_PERIOD - Math.PI /2; //rotate 180 in 3 seconds
        canvasNode0.translate(Math.floor((CANVAS_WIDTH-ROPE_WIDTH)/2),0);
        canvasNode0.rotate(angle);
        canvasNode0.fillStyle = ARROW_COLOR;
        let distance = ((new Date).getTime() - this.pressingTime)/1000*212;
        console.log(distance);
        canvasNode0.fillRect(0, distance, ROPE_WIDTH, ROPE_HEIGHT);
        canvasNode0.restore();

        //Draw stones
        canvasNode0.save();
        canvasNode0.translate(0,0);
        canvasNode0.fillStyle = "#ffffff";
        let numOfStone = NUM_OF_STONES[this.menu.level -1];
        for (let i=0; i<numOfStone; i++){
            if (this.isActive[i]) {
                let array = LEVEL_1_STONE_POSITIONS[i];
                let size = STONE_SIZE[array[2]];
                canvasNode0.fillRect(array[0], array[1], size[0], size[1]);
            }
        }
        canvasNode0.restore();
    }

    reachBorder(){

    }

    hideStone(num){
        this.isActive[num] = false;
    }
}