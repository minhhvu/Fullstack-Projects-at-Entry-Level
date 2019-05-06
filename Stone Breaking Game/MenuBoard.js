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
        timeNode.innerHTML = "Time: " + this.timer.toString(10);
        let levelNode = document.querySelector(LEVEL_CLASS);
        levelNode.innerHTML = "Level:" + this.level.toString(10);
    }

    //return the beginning time
    getBeginningTime(){
        return this.beginningTime;
    }
}