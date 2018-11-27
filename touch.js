/* jshint node: true */
/* global window: false */
'use strict';

module.exports =
  !!('ontouchstart' in window) ||
  !!('onmsgesturechange' in window) ||
  (navigator.maxTouchPoints > 0) ||
  (navigator.msMaxTouchPoints > 0);