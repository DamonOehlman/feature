/**
  # feature

  Feature-detection at a highly targeted level.

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

  ## Reference

**/

exports.detect = require('./detect');
exports.css = require('./css');
