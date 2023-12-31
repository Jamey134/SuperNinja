class Ninja {
    constructor(name, health = 90, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength
        
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(this.name, this.health, this.speed, this.strength)
    }
    drinkSake(){
        this.health += 10
    }
}

const ninja1 = new Ninja("Hyabusa", 90, 3, 3);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name);
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.wisdom = wisdom;
    }

speakWisdom(){
    super.drinkSake
    console.log("It is during our darkest moments that we must focus to see the light.")
}

}

const sensei1 = new Sensei("Kakashi")

sensei1.speakWisdom()
sensei1.showStats()