class Animal {
    constructor(name,legCount,speaks){
        this.name = name,
        this.legCount = legCount,
        this.speaks = speaks
    }
    speak(){
        console.log("hi there" + this.speaks);
    }
    showLegCount(){
        console.log("hi there" + this.legCount);
    }
}

let dog = new Animal("dog",4,"bhow bhow");
dog.speak();
dog.showLegCount();