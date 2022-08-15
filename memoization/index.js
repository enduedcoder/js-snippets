const prevValues = []; // we are doing caching with this

function square(n) {
  if (prevValues[n] != null) {
    return prevValues[n];
  }

  let result = 0;
  //complex logic on purpose
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      result += 1;
    }
  }
  prevValue[n] = result; // store rhe value at n positon in prevValue array. so that next time same input comes, the code result is readily available at the prevValue array
  return result;
}

console.log(square(34343434)); // this will take lot of time
