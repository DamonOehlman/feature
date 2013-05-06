var browserPrefixes = ['ms', 'o', 'moz', 'webkit'];

module.exports = function() {
    for (var ii = browserPrefixes.length; (! window.requestAnimationFrame) && ii--; ) {
        window.requestAnimationFrame = window[browserPrefixes[ii] + 'RequestAnimationFrame'];
    }

    return window.requestAnimationFrame;
};