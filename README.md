# feature

Feature-detection at a highly targeted level. 

## Example Usage

Do we have CSS transforms available?

```js
var transforms = require('feature/css-transforms');
```

Because of Browserify's excellent static analysis, when `feature` is used within an application in this way, only the targeted feature detection is included in the resultant JS file.