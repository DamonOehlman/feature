var feature = require('../'),
    test = require('tape'),
    props = [
        'transform'
    ];

test('style properties test', function(t) {
    t.plan(props.length);

    props.forEach(function(prop) {
        t.ok(feature(prop), prop + ' property detected ok as expected');
    });
});