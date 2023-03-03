function sum(...args) {
  let total = 0
  // debugger;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

// console.log(sum(1, 2, 3, 4)) // === 10;
// console.log(sum(1, 2, 3, 4, 5)) // === 15;

Function.prototype.myBind = function(context, ...args){
  const otherFunc = this
  // debugger
  return function(...calltime){
    return otherFunc.call(context, ...args, ...calltime);
  }
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");

markov.says.myBind(pavlov, "meow", "Kush")();
markov.says.myBind(pavlov)("meow", "a tree");