class Shift{
    constructor(start, end, location){
        this.start = start;
        this.end = end;
        this.location = location;
    }

    //Setters and getters
    setStart(start){
        this.start = start;
    }
    setEnd(end){
        let time = 
        this.end = end;
    }
    setLocation(locaton){
        this.location = location;
    }
    getLocation(){
        return this.location;
    }
    getStart(){
        return this.start;
    }
    getEnd(){
        return this.end;
    }

    getDuration(start, end){
        return end - start;
    }
}