let promiseObj = new Promise((resolve, reject) => {
  const testForType = '1';

  if (typeof testForType === 'number') {
    resolve('Valid');
  } else {
    reject('Invalid');
  }
});

promiseObj
  .then((message) => {
    console.log(`In THEN block ${message}`);
  })
  .catch((message) => {
    console.log(`In CATCH block ${message}`);
  });

// // then is calls resolve; then() receives parameter that is passed to resolve()
// // catch calls reject; catch() receives parameter that is passed to reject()
// //
