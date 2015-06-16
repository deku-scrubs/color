var Color = require('..')
var assert = require('assert')

describe('color', function () {
  it('.rgb should produce valid string', function() {
    var color = Color.rgb(255, 255, 255)
    
    assert.equal(color.toString(), 'rgb(255, 255, 255)')
  })

  it('.rgba should produce valid string', function() {
    var color = Color.rgba(255, 255, 255, .1)

    assert.equal(color.toString(), 'rgba(255, 255, 255, 0.1)')
  })

  it('.linearGradient should produce valid string', function() {
    var point1 = [Color.rgb(255, 255, 255), '5%']
    var point2 = [Color.rgb(255, 0, 0), '25%']
    var gradient = Color.linearGradient('to right', [point1, point2])

    assert.equal(gradient, 'linear-gradient(to right, rgb(255, 255, 255) 5%, rgb(255, 0, 0) 25%)')

  });

  it('.shade should produce valid string', function() {
    var color = Color.rgb(255,255,255)
    var percent = 0.929

    assert.equal(Color.shade(color, percent).toString(), 'rgb(237, 237, 237)')
  });
})