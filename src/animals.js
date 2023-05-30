class Animals {
    constructor(age, name, weight, limbAmount) {
      this.age = age;
      this.name = name;
      this.weight = weight;
      this.limbAmount = limbAmount;
    }
    move() {
      console.log("Animals move.");
    }
    say() {
      console.log("Animals make sounds.");
    }
    eat() {
      console.log("Animals eat.");
    }
    static isAnimals(obj) {
      return obj instanceof Animals;
    }
  }
  class Mammals extends Animals {}
  class Birds extends Animals {}
  class Fish extends Animals {}
  class Predators extends Mammals {
    static maxAge = 20;
    static maxWeight = 100;
    static isPredators(obj) {
      return obj instanceof Predators;
    }
  }
  class Whales extends Mammals {
    static maxAge = 100;
    static maxWeight = 2000;
  
    static isWhales(obj) {
      return obj instanceof Whales;
    }
  }
  class Primates extends Mammals {
    static maxAge = 50;
    static maxWeight = 100;
  
    static isPrimates(obj) {
      return obj instanceof Primates;
    }
  }
  class Dog extends Predators {
    constructor(age, name, weight, limbAmount) {
      super(age, name, weight, limbAmount);
    }
    move() {
      console.log("Dog runs.");
    }
    say() {
      console.log("Dog barks.");
    }
    eat() {
      console.log("Dog eats meat.");
    }
    static isDog(obj) {
      return obj instanceof Dog;
    }
  }
  class Dolphin extends Whales {
    constructor(age, name, weight, limbAmount) {
      super(age, name, weight, limbAmount);
    }
    move() {
      console.log("Dolphin swims.");
    }
    say() {
      console.log("Dolphin makes clicking sounds.");
    }
    eat() {
      console.log("Dolphin eats fish.");
    }
    static isDolphin(obj) {
      return obj instanceof Dolphin;
    }
  }
  class Human extends Primates {
    constructor(age, name, weight, limbAmount) {
      super(age, name, weight, limbAmount);
    }
    move() {
      console.log("Human walks.");
    }
    say() {
      console.log("Human speaks.");
    }
    eat() {
      console.log("Human eats various food.");
    }
    static isHuman(obj) {
      return obj instanceof Human;
    }
  }
  const dog1 = new Dog(5, "Buddy", 15, 4);
  const dog2 = new Dog(3, "Max", 20, 4);
  const dolphin1 = new Dolphin(10, "Dolly", 15, 0);
  const dolphin2 = new Dolphin(8, "Nemo", 12, 0);
  const human1 = new Human(30, "John", 10, 2);
  const human2 = new Human(25, "Emma", 60, 2);
  dog1.move();
  dog1.say();
  dog1.eat();
  console.log(Dog.isDog(dog1));
  dolphin1.move();
  dolphin1.say();
  dolphin1.eat();
  console.log(Dolphin.isDolphin(dolphin1));
  human1.move();
  human1.say();
  human1.eat();
  console.log(Human.isHuman(human1));