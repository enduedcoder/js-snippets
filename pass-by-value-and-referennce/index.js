// // Pass by value: Primitive types are all pass-by-value
// let a = 1;
// let b = 'Hi';
// let c = 3;
// let d = c;

// console.log(`a = ${a} `);
// console.log(`b = ${b} `);
// console.log(`c = ${c} `);
// console.log(`d = ${d} `);

// // Pass by reference: Arrays, objects, classes are all pass-by-reference
// let a = [1, 2];
// let b = [1, 2];

// console.log(`a===b ${a === b}`); // false because it is comparing the address a and b has and not the values [1,2]
// console.log(`a==b ${a == b}`); // false because it is comparing the address a and b has and not the values [1,2]

// let c = [1, 2];
// let d = c;

// console.log(`c===d ${c === d}`); // true  since address is passed to d and now both c and d contains same address which contains the value
// console.log(`c==d ${c == d}`); // true

// Array functions
let c = [1, 2];
console.log(`c = ${c}`);
add(c, 3);
console.log(`c = ${c}`);

function add(array, element) {
  //address is passed here
  array.push(element); // here we are pushing to memeory address . push is just modifying the array not assigning again. array here has address . push will just add element to the location pointed by array

  //creating new address which assignmenet here
  // array = [element]; // we are copying the value from array to new array. Here we created a new memory location and assigned to array. and it is no longer pointing to c
}
