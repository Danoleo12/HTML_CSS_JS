class Position{
    constructor(positionName, Wage){
        this.positionName = positionName;
        this.Wage = Wage;
    }

    getWage(){
        return this.wage;
    }
    getPosition(){
        return this.positionName;
    }
    setWage(wage){
        this.wage = wage;
    }
    setPosition(){
        this.positionName = positionName;
    }
}