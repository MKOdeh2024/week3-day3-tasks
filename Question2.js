const obj = {
  name: "John",
  greet: function (greeting) {
    console.log(`${greeting}, ${this.name}!`);
  },
};

const preserveThis = (func) => {
  return func.bind(func);
};

// Wrap the greet function using preserveThis
const preservedGreet = preserveThis(obj.greet);

// Call the wrapped function as a method of the object
preservedGreet("Hello"); // Output: "Hello, John!"
