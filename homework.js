class Hamster {
    constructor(owner, name, price) {
        this.owner = '';
        this.name = name;
        this.price = 15;
    }

    static wheelRun() {
        console.log('squeak squeak')
    }

    static eatFood() {
        console.log('nibble nibble')
    }

    static getPrice() {
        return this.price
    }

}

Hamster.wheelRun()
Hamster.eatFood()
Hamster.getPrice()

class Person {
    constructor(name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getWeight() {
        return this.weight
    }

    greet() {
        console.log(`Hello, ${this.name}!`)
    }

    eat() {
        this.weight++;
        this.mood++;
    }

    exercise() {
        this.weight--;
    }

    ageUp() {
        this.age++;
        this.height++;
        this.weight++;
        this.mood--;
        this.bankAccount += 10;
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.price;
    }
}

const timmy = new Person('Timmy', this.age, this.height, this.weight, this.mood, this.hamsters, this.bankAccount)

for (let i = 0; i < 5; i++) {
    timmy.ageUp()
  }
  // console.log(timmy)
  
  for (let i = 0; i < 5; i++) {
    timmy.eat()
  }
  // console.log(timmy)
  
  for (let i = 0; i < 5; i++) {
    timmy.exercise()
  }
  // console.log(timmy)
  
  for (let i = 0; i < 9; i++) {
    timmy.ageUp()
  }
  // console.log(timmy)

const gus = new Hamster(this.owner, 'Gus', this.price)
console.log(gus)

gus.owner = 'Timmy'
console.log(gus)

timmy.buyHamster(gus)
// console.log(timmy)

for (let i = 0; i < 15; i++) {
    timmy.ageUp()
  }
// console.log(timmy)

timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()
console.log(timmy)

class Dinner {
    constructor(appetizer, entree, dessert) {
          this.appetizer = appetizer;
          this.entree = entree;
          this.dessert = dessert;
      }
  }
  
  /* class Chef {
    constructor(mealType, appetizer, entree, dessert) {
      if (mealType === 'mexican') {
        return new Dinner('empanadas', 'tacos', 'tres leches cake')
      }
      return new Dinner(appetizer, entree, dessert)
    }
  } */
  
  class Chef {
    constructor(appetizer, entree, dessert) {
      return new Dinner(appetizer, entree, dessert)
    }
  }
  
  
  const mexican = new Chef('empanadas', 'tacos', 'tres leches cake')
  const sushi = new Chef('spring rolls', 'unagi maki', 'mochi')
  const italian = new Chef('arancini', 'ravioli', 'tiramisu')
  
  console.log(mexican)
  console.log(sushi)
  console.log(italian)