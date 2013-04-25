var css = require('../').css,
    test = require('tape'),
    props = [
        'transform',
        'box-shadow',
        'border-radius'
    ];

test('style properties test', function(t) {
    t.plan(props.length * 2);

    props.forEach(function(prop) {
        t.ok(css(prop), prop + ' property detected ok as expected');
        t.ok(typeof css(prop) == 'function', prop + ' has accessor function');
    });
});