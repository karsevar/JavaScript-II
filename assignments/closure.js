// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const repeatName = (name) => {
	return function() {
		return name += ' ' + name;
	}
} 

const name = repeatName('mason');
console.log(name());
console.log(name());
console.log(name());
// Interesting with each iteration the name printed to the console 
// doubles inplace of increasing by only one.


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
  	return ++count;
  }
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// Works perfectly!!! 

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
 
  let count = 1;

  return {
  	increment: function() {
  		return ++count;
  	},

  	decrement: function() {
  		return --count;
  	}
  }
};

const counterObject = counterFactory();
console.log(counterObject.increment());
// 1
console.log(counterObject.increment());
// 2
console.log(counterObject.increment());
// 3
console.log(counterObject.decrement());
// 4
console.log(counterObject.decrement());
// 3
console.log(counterObject.decrement());
// 2
console.log(counterObject.increment());
// 1
console.log(counterObject.increment());
// 2

// The behavior seems a little weird will need to check the logic.


