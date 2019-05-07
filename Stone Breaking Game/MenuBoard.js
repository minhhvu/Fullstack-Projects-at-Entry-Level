class MenuBoard {
    constructor(){
        this.score = 0;
        this.isPlaying = true;
        this.timer = TIME_PER_TURN;
        this.music = true;
        this.level = 1;
    }

    //Show information for score, level, time
    display(){
        let scoreNode = document.querySelector(SCORE_CLASS);
        scoreNode.innerHTML = "Score: " + this.score.toString(10);
        let timeNode = document.querySelector(TIME_CLASS);
        timeNode.innerHTML = "Time: " + (this.timer/1000).toString(10);
        let levelNode = document.querySelector(LEVEL_CLASS);
        levelNode.innerHTML = "Level:" + this.level.toString(10);
    }


    setScore(score){
        this.score = score;
        let scoreNode = document.querySelector(SCORE_CLASS);
        scoreNode.innerHTML = "Score: " + this.score.toString(10);
    }

    setTimer(timer){
        this.timer = Math.round(timer/1000); //convert to seconds
        let timeNode = document.querySelector(TIME_CLASS);
        timeNode.innerHTML = "Time: " + (this.timer).toString(10);
    }

    setLevel(level){
        this.level = level;
        let levelNode = document.querySelector(LEVEL_CLASS);
        levelNode.innerHTML = "Level:" + this.level.toString(10);
    }
}