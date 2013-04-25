var feature = require('../'),
    test = require('tape'),
    props = [
        'transform',
        'box-shadow'
    ];

test('style properties test', function(t) {
    t.plan(props.length * 2);

    props.forEach(function(prop) {
        t.ok(feature(prop), prop + ' property detected ok as expected');
        t.ok(typeof feature(prop) == 'function', prop + ' has accessor function');
    });
});