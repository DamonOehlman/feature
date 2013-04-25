# feature

[![browser support](https://ci.testling.com/DamonOehlman/feature.png)](https://ci.testling.com/DamonOehlman/feature)

Feature-detection at a highly targeted level. 

## Example Usage

Do we have CSS transforms available?

```js
var transform = require('feature/css/transform');

// check if transforms are available
if (transform) {
    // if they are you can use the transform return value (which is in fact a function)
    // to get the value and modify the transform value
    transform(testElement, 'scale(2.0, 2.0)');
}
```

Because of Browserify's excellent static analysis, when `feature` is used within an application in this way, only the targeted feature detection is included in the resultant JS file.

## Standing on the Shoulders of Giants

The work in feature would not be possible without the excellent work painstakingly completed by the [Modernizr](https://github.com/Modernizr) team.