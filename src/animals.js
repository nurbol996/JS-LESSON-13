class Animals {
  constructor(age, name, weight, limbAmount) {
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.limbAmount = limbAmount;
  }
  move() {
    console.log("Животные двигаются.");
  }
  say() {
    console.log("Животные издают звуки.");
  }
  eat() {
    console.log("Животные едят.");
  }
  static isAnimals(obj) {
    return obj instanceof Animals;
  }
}

class Mammals extends Animals {}

class Birds extends Animals {
  move() {
    console.log("Птицы летают.");
  }
  say() {
    console.log("Птицы чирикают.");
  }
  eat() {
    console.log("Птицы едят червей.");
  }
  static isBird(obj) {
    return obj instanceof Birds;
  }
}

class Fish extends Animals {
  move() {
    console.log("Рыбы плавают.");
  }
  say() {
    console.log("Рыбы не издают звуки.");
  }
  eat() {
    console.log("Рыбы едят планктон.");
  }
  static isFish(obj) {
    return obj instanceof Fish;
  }
}

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
    console.log("Собака бегает.");
  }
  say() {
    console.log("Собака лает.");
  }
  eat() {
    console.log("Собака ест мясо.");
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
    console.log("Дельфин плавает.");
  }
  say() {
    console.log("Дельфин издает щелчки.");
  }
  eat() {
    console.log("Дельфин ест рыбу.");
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
    console.log("Человек ходит.");
  }
  say() {
    console.log("Человек говорит.");
  }
  eat() {
    console.log("Человек ест разную пищу.");
  }
  static isHuman(obj) {
    return obj instanceof Human;
  }
}

const dog1 = new Dog(5, "Бадди", 15, 4);
const dog2 = new Dog(3, "Макс", 20, 4);
const dolphin1 = new Dolphin(10, "Долли", 15, 0);
const dolphin2 = new Dolphin(8, "Немо", 12, 0);
const human1 = new Human(30, "Джон", 10, 2);
const human2 = new Human(25, "Эмма", 60, 2);
const bird1 = new Birds(2, "Воробей", 0.1, 2);
const bird2 = new Birds(1, "Ласточка", 0.05, 2);
const fish1 = new Fish(1, "Золотая рыбка", 0.01, 0);
const fish2 = new Fish(2, "Гуппи", 0.005, 0);

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

bird1.move();
bird1.say();
bird1.eat();
console.log(Birds.isBird(bird1));

fish1.move();
fish1.say();
fish1.eat();
console.log(Fish.isFish(fish1));