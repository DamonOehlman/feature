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
  ### fullscreen

  If the [Fullscreen API](http://caniuse.com/#feat=fullscreen) is available
  this will allow you to fullscreen either the document or a target element.

  <<< examples/fullscreen.js

  Additionally, the function can be passed directly to an event handler and
  the function will fullscreen just the selected element.  This is useful
  in the case of videos, images, etc.

  <<< examples/fullscreen-onclick.js

**/
module.exports = fullscreenFn && function(target) {
  // if this has been called in response to a browser event
  // go get the event target
  if (target instanceof Event) {
    target = target.target;
  }

  // TODO: pass on args?
  fullscreenFn.call(target || document.body);
};
