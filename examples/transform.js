var transform = require('../css')('transform');
var crel = require('crel');
var el = crel('div', 'test');

// if we have transforms available, then apply one
if (transform) {
  transform(el, 'translate(500px, 100px)');
}

// add the test div to the document
document.body.appendChild(el);

// log out the el position
console.log(el.getBoundingClientRect().left);
// ~~> 508