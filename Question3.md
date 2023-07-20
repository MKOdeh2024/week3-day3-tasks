# First Example 
function outer1() {
  var x = 10;

  var inner1 = function() {
    console.log(x);
  };

  inner1();
}

outer1(); // Output: 10

## Reasoning:
the inner1 function has a reference to the variable x from its lexical (enclosing) scope, which is the scope of outer1.
This reference is maintained even after the outer1 function has finished executing,when inner1() is called, it can still access and use the value of x that was available during its creation in the outer1 scope.


# Second Example 
function outer2() {
  var x = 10;

  var inner2 = function() {
    var x = 20;
    console.log(x);
  };

  inner2();
}

outer2(); // Output: 20

## Reasoning 
In the outer2 function, there is an outer variable x with the value 10. Inside the inner2 function, there is another variable x declared with the value 20, which shadows the outer x.
As a result, when inner2() is called, it logs the value of the inner x (which is 20) to the console.
The output of outer2() is 20. Variable shadowing allows a variable with the same name in an inner scope to take precedence over a variable in an outer scope.
(The **var** is function scope and reassignable). 
