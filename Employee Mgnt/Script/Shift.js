class Shift{
    constructor(start, end, location,){
        if (typeof start !== "date") throw new Error("start must be a time");
        if (typeof end !== "date") throw new Error("end must be a date");
        if (typeof location !== "string") throw new Error("Location must be a String");

        this.start = new Date(start).toLocaleTimeString;
        this.end = new Date(end).toLocaleTimeString;
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