var raf = require('../detect')('requestAnimationFrame');

function logRandom() {
  console.log(Math.random());
  raf(logRandom);
}

// create a requestAnimationFrame fallback
raf = raf || function(fn) {
  setTimeout(fn, 1000 / 60);
};

// start logging random numbers (for some reason...)
logRandom();