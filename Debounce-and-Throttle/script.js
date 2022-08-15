const input = document.querySelector('input');
const defaultText = document.getElementById('default');
const debounceText = document.getElementById('debounce');
const throttleText = document.getElementById('throttle');

const updateDebounceText = debounce((text) => {
  debounceText.innerText = text;
}, 250);

const updateThrottleText = throttle((text) => {
  throttleText.innerText = text;
}, 250);

// const updateDebounceText = debounce(() => {
//     incrementCounter(debounceText);
//   }, 250);

//   const updateThrottleText = throttle(() => {
//     incrementCounter(throttleText);
//   }, 250);

if (input) {
  input.addEventListener('input', (e) => {
    defaultText.innerText = e.target.value;
    updateDebounceText(e.target.value);
    updateThrottleText(e.target.value);
  });
}

function debounce(cb, delay = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout); // This is what ensures that the callback function isn’t called until the time has been exhausted. If we

    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function throttle(cb, delay = 1000) {
  console.log('sdcsdc');
  let shouldWait = false;
  let waitingArgs;

  const timeFunc = () => {
    if (waitingArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);

      waitingArgs = null;
      setTimeout(timeFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;

    setTimeout(timeFunc, delay);
  };
}

// // exaample 2

// document.addEventListener('mousemove', (e) => {
//   incrementCounter(defaultText);
//   updateDebounceText();
//   updateThrottleText();
// });

// function incrementCounter(element) {
//   element.innerText = (parseInt(element.innerText) || 0) + 1;
// }
