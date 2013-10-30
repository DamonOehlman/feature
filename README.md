# feature

Feature-detection at a highly targeted level.


[![NPM](https://nodei.co/npm/feature.png)](https://nodei.co/npm/feature/)


[![browser support](https://ci.testling.com/DamonOehlman/feature.png)](https://ci.testling.com/DamonOehlman/feature)


## What about Modernizr?

[Modernizr](https://github.com/Modernizr) is wonderful, no doubt about it.
It is however, pretty massive and while it can be whittled down to a smaller
size using customization from the download page, I'm just a bit too lazy
for that.

By leveraging Browserify's excellent static analysis (powered by
[esprima](https://github.com/ariya/esprima)), when `feature` is
used within an application in a selective way, only the targeted feature
detection is included in the resultant JS file.

So if I was to write the following require:

```js
var fullscreen = require('feature/fullscreen');
```

Then only the
[fullscreen](https://github.com/DamonOehlman/feature/blob/master/fullscreen.js)
code from feature would be included in my application.  All the rest of the
module would simply be ignored.  So that's why. It's purely selfish, and
well you should feel free to keep on using Modernizr.

## css(prop)

Test for the prescence of the specified CSS property (in all it's
possible browser prefixed variants).  The returned function (if we
are able to access the required style property) is both a getter and
setter function for when given an element.

Consider the following example, with regards to CSS transforms:

```js
var crel = require('crel');
var transform = require('feature/css')('transform');
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
```

## detect

The core functionality of the feature module is powered by the `detect`
function, which can be imported like so:

```js
var detect = require('feature/detect');
```

Once you have the detect function available you can do nifty things like
detect whether your browser supports `requestAnimationFrame`:

```js
var raf = detect('requestAnimationFrame');
```

If it does then `raf` will be a function that is equivalent to the browser
prefixed requestAnimationFrame function (e.g. webkitRequestAnimationFrame).
It should be noted that feature does nothing to try and polyfill things that
don't exist, that is left to you to implement yourself.

## fullscreen

If the [Fullscreen API](http://caniuse.com/#feat=fullscreen) is available
this will allow you to fullscreen either the document or a target element.

```js
var fullscreen = require('feature/fullscreen');

if (fullscreen) {
  fullscreen(); // you can pass an element to fullscreen here
}
```

Additionally, the function can be passed directly to an event handler and
the function will adjust :)

```js
var fullscreen = require('feature/fullscreen');

document.getElementById('makeMeFS').addEventListener('click', fullscreen);
```
