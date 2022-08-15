function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === 'Google') {
      resolve('Google says hi');
    } else {
      reject('we can only talk to Google');
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing request');
    resolve(`Extra information ${response}`);
  });
}

// // usage promise
// makeRequest('Google')
//   .then((response) => {
//     console.log('Response received');
//     return processRequest(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   });

// // usage async/ await
async function doWork() {
  try {
    const repsonse = await makeRequest('Facebook');
    console.log('Response recieved');
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

doWork();
