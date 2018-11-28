var detect = require('./detect');
var variants = ['Fullscreen', 'FullScreen'];
var fullscreenFn;

while (variants.length) {
  fullscreenFn = detect.call(document.body, 'request' + variants.shift());
  if (fullscreenFn) {
    break;
  }
}

module.exports = fullscreenFn && function (target) {
  // if this has been called in response to a browser event
  // go get the event target
  if (target instanceof Event) {
    target = target.target;
  }

  // TODO: pass on args?
  fullscreenFn.call(target || document.body);
};
