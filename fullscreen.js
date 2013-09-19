/* jshint node: true */

var detect = require('./detect');
var variants = ['Fullscreen', 'FullScreen'];
var fullscreenFn;

while (variants.length) {
  fullscreenFn = detect.call(document.body, 'request' + variants.shift());
  if (fullscreenFn) {
    break;
  }
}

/**
  ## fullscreen

  ```js
  var fullscreen = require('feature/fullscreen');
  
  if (fullscreen) {
    fullscreen(); // you can pass an element to fullscreen here
  }
  ```
**/
module.exports = fullscreenFn && function(target) {
  // TODO: pass on args?
  fullscreenFn.call(target || document.body);
};