const exampleNormalFunc1 = (a, b, c) => {
  return a * (b + c);
};

const exampleNormalFunc2 = (x, y) => {
  return x * y;
};

const exampleNormalFunc3 = (string) => {
  return string + " " + string + " " + string + "!";
};

const arrowHOF = (normalFunc) => {
  return (...args) => {
    return (repeats) => {
      const results = [];
      if (repeats === null) {
        repeats = 1;
        return normalFunc(...args);
      } else {
        for (let i = 0; i < repeats; i++) {
          results.push(normalFunc(...args));
        }
        return results.length === 1 ? results[0] : results;
      }
    };
  };
};

const hofNormalFunc1 = arrowHOF(exampleNormalFunc1);
const hofNormalFunc2 = arrowHOF(exampleNormalFunc2);
const hofNormalFunc3 = arrowHOF(exampleNormalFunc3);

console.log(hofNormalFunc1(3, 4, 5)(2)); // logs 60 twice
console.log(hofNormalFunc2(20, 35)(4)); // logs 700 four times
console.log(hofNormalFunc3("Meow")()); // logs "Meow Meow Meow!" once
