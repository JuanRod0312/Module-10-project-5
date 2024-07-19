// TODO: Define SuperHuman, SuperHero, and SuperVillain classes here

//SuperHuman class
class SuperHuman {
    constructor(name, powerLevel) 
    {
        this.name = name;
        this.powerLevel = powerLevel;
    }
}

class SuperHero extends SuperHuman {
    constructor(name, powerLevel, alias) 
    {
        super(name, powerLevel);
        this.alias = alias;
    }
}

class SuperVillain extends SuperHuman {
    constructor(name, powerLevel, alias) 
    {
        super(name, powerLevel);
        this.alias = alias;
    }
}