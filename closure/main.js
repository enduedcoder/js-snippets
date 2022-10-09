// Basic
let firstName = 'Kate';

function printName() {
  console.log(firstName);
}

// printName();

// Function inside of other function
// through closure , inner function is able to access the outer function even after the outer function is done with its execution (outter variable is gone out of scope)
//inner function saves the outerVariable and knows what the outer variable is even if the outer function that defined this outer variable is not longer executed anymore, exits out of function.

function outerFunction(outerVariable) {
  const outer2 = 'hi'; //Basic use-case: inner function has access to outer function variable even after the outer function has returned.
  return function innerFunction(innerVariable) {
    console.log('Outer variable ', outerVariable);
    console.log('Inner variable ', innerVariable);
    console.log('Outer2 variable ', outer2);
  };
}
const newFunction = outerFunction('outside');
newFunction('inside');

// USe case with fetch()
function outerFunctionWithUrl(url) {
  fetch(url).then(() => {
    console.log(url);
  });
}
const newFunctionWithUrl = outerFunctionWithUrl('outside');
newFunction('inside');
