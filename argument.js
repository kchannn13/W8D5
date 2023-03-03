function sum() {
  let total = 0
  console.log(arguments)
  // debugger;
  for (let i = 0; i < arguments[0].length; i++) {
    total += arguments[0][i];
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

// markov.says("meow", "Ned");

// markov.says.myBind(pavlov, "meow", "Kush")();
// markov.says.myBind(pavlov)("meow", "a tree");

// markov.says.myBind(pavlov, "meow")("Markov");

// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");

function curriedSum(numArgs) {
  let numbers = []
  
  return function _curriedSum(num) {
    numbers.push(num);
    debugger;
    if (numbers.length === numArgs) {
      return sum(numbers);
    } else {
      return _curriedSum;
    }
  }
};


const newSum = curriedSum(4);
console.log(newSum(5)(30)(20)(1)); // => 56 