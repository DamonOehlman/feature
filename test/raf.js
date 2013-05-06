var raf = require('../animation-frame'),
    test = require('tape');

test('requestAnimationFrame support test', function(t) {
    if (raf) {
        t.plan(1);
        requestAnimationFrame(function() {
            t.pass('requestAnimationFrame successfully called');
        });
    }
});