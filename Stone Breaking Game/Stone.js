class Stone{
    constructor(){
    }

    static isReached(x,y,w,h,angle,xOrigin){
        if (x<xOrigin){
            var biggerAngle =Math.PI - Math.atan(y/(xOrigin-x));
            var smallerAngle =Math.PI - Math.atan((y+h)/(xOrigin-x-w));
        } else {
            var biggerAngle =Math.atan((y+h)/(x-xOrigin));
            var smallerAngle =Math.atan(y/(x+w-xOrigin));
        }


        if (angle+Math.PI/2>=smallerAngle && angle+Math.PI/2<=biggerAngle){
            return true;
        } else{
            return false;
        }
    }
}