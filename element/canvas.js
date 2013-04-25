var crel = require('crel'),
    el = crel('canvas');

module.exports = el && (!! (el.getContext && el.getContext('2d'))) && crel.bind('canvas');