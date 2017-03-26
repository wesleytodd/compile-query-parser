/* global describe, it */
var assert = require('assert')
var compileQueryParser = require('../')
var querystring = require('querystring')

describe('compile-query-parser', function () {
  it('should return the funciton passed in', function () {
    var fnc = function () {}
    assert.equal(compileQueryParser(fnc), fnc)
  })
  it('should return nodes querystring when true', function () {
    assert.equal(compileQueryParser(true), querystring.parse)
  })
  it('should return undefined when passed false', function () {
    assert.equal(compileQueryParser(false), undefined)
  })
  it('should parse the extended querystring when passed "extended"', function () {
    var fnc = compileQueryParser('extended')
    var q = fnc('a[toString]=bar')
    assert.equal(q.a.toString, 'bar')
  })
  it('should parse the simple querystring when passed "simple"', function () {
    var fnc = compileQueryParser('simple')
    var q = fnc('a[toString]=bar&b=foo')
    assert.equal(q['a[toString]'], 'bar')
    assert.equal(q.a, undefined)
    assert.equal(q.b, 'foo')
  })
  it('should throw when it gets something it doesn\'t understand', function () {
    assert.throws(function () {
      compileQueryParser(1)
    })
  })
})
