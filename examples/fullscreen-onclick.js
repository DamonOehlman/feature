var fullscreen = require('../fullscreen');
var crel = require('crel');
var img = crel('img', {
  src: 'http://upload.wikimedia.org/wikipedia/commons/d/d3/Jim_jim_falls.jpg',
});

img.addEventListener('click', fullscreen);

document.body.appendChild(img);
