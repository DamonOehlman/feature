var prefixes = ['ms', 'O', 'Moz', 'Webkit'],
    props = {},
    style;

function createGetterSetter(propName) {
    return function(element, value) {
        // if we have a value update 
        if (typeof value != 'undefined') {
            element.style[propName] = value;
        }

        return getComputedStyle(element, propName);
    };
}

module.exports = function(prop) {
    var ii,
        propName,
        pascalCaseName;

    style = style || document.body.style;

    // if we already have a value for the target property, return
    if (props[prop] || style[prop]) return props[prop];

    // convert a dash delimited propertyname (e.g. box-shadow) into pascal cased name (BoxShadow)
    pascalCaseName = prop.split('-').reduce(function(memo, val) {
        return memo + val.charAt(0).toUpperCase() + val.slice(1);
    }, '');

    // check for the property
    for (ii = prefixes.length; ii--; ) {
        propName = prefixes[ii] + pascalCaseName;

        if (typeof style[propName] != 'undefined') {
            props[prop] = createGetterSetter(propName);
            break;
        }
    }
    
    return props[prop];
};