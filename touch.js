 // http://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript
 module.exports = !!('ontouchstart' in window) // works on most browsers 
    || !!('onmsgesturechange' in window); // works on ie10