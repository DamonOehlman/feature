var raf = require('../animation-frame'),
    test = require('tape');

test('requestAnimationFrame support test', function(t) {
    t.plan(2);

    t.ok(raf, 'requestAnimationFrame function enabled');
    raf(function() {
        t.pass('requestAnimationFrame successfully called');
    });
});