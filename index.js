var prefixes = ['ms', 'O', 'Moz', 'Webkit'],
    props = {},
    style;

module.exports = function(prop) {
    var ii, propName;

    style = style || document.body.style;

    // if we already have a value for the target property, return
    if (props[prop] || style[prop]) return props[prop];

    // check for the property
    for (ii = prefixes.length; ii--; ) {
        propName = prefixes[ii] + prop.charAt(0).toUpperCase() + prop.slice(1);

        if (typeof style[propName] != 'undefined') {
            props[prop] = prefixes[ii].toLowerCase();
            break;
        }
    }
    
    return props[prop];
};