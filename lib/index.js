/**
 * Modules
 */

var assert = require('assert')
var is = require('@weo-edu/is')

/**
 * Create RGBA from `r`, `b`, `g`
 * @param  {Number} r red
 * @param  {Number} g green
 * @param  {Number} b blue
 * @return {RGBA}
 */

exports.rgb = function (r, g, b) {
  assert(arguments.length === 3, 'rgb() takes only 3 arguments')
  return new RGBA(r, g, b)
}

/**
 * Create RGBA from `r`, `b`, `g`, and `a`
 * @param  {Number} r red
 * @param  {Number} g green
 * @param  {Number} b blue
 * @param  {Number} a alpha
 * @return {RGBA}
 */

exports.rgba = function (r, g, b, a) {
  return new RGBA(r, g, b, a)
}

/**
 * Create RGBA from `rgb` and `a`
 * @param  {Object} rgb
 * @param  {Number} a
 * @return {RGBA}
 */

exports.alpha = function (rgb, a) {
  return new RGBA(rgb.r, rgb.g, rgb.b, a)
}

/**
 * Create RGBA from `rgba` and `percent`
 * @param  {Object} rgba
 * @param  {Number} percent shade by `percent` (between 0 and 1)
 * @return {RGBA}
 */

exports.shade = function (rgba, percent) {
  assert(typeof percent === 'number' && percent >= 0 && percent <= 1, 'Percent must be between 0 and 1')
  return new RGBA(rgba.r * percent, rgba.g * percent, rgba.b * percent, rgba.a)
}

/**
 * Create linear gradient style string
 * @param  {String} direction
 * @param  {Array} points
 * @return {String}
 */

exports.linearGradient = function (direction, points) {
  assert(typeof direction === 'string', 'You must include a direction string')
  assert(is.array(points), 'points must be an array of arrays')
  return 'linear-gradient(' + direction + ', ' + points.map(function (point) {
      return point.join(' ')
    }).join(', ') + ')'
}

/**
 * RGBA style string
 * @param {Number} r red
 * @param {Number} g green
 * @param {Number} b blue
 * @param {Number} a alpha
 */

function RGBA (r, g, b, a) {
  this.r = r
  this.g = g
  this.b = b
  this.a = a
}

/**
 * Converts RGBA to style string
 * @return {String}
 */

RGBA.prototype.toString = function () {
  var params = Math.round(this.r) + ', ' + Math.round(this.g) + ', ' + Math.round(this.b)
  if (is.undefined(this.a)) {
    return 'rgb(' + params + ')'
  }
  return 'rgba(' + params + ', ' + this.a + ')'
}
