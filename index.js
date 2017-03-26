'use strict'

// Lazy load qs and querystring modules for
// browsers when the do not use them
var qs = {}
var _qs
Object.defineProperty(qs, 'parse', {
  get: function () {
    _qs = _qs || require('q' + 's')
    return _qs.parse
  }
})

var querystring = {}
var _querystring
Object.defineProperty(querystring, 'parse', {
  get: function () {
    _querystring = _querystring || require('query' + 'string')
    return _querystring.parse
  }
})

/**
 * Compile "query parser" value to function.
 *
 * @param  {String|Function} val
 * @return {Function}
 * @api private
 */

module.exports = function compileQueryParser (val) {
  var fn

  if (typeof val === 'function') {
    return val
  }

  switch (val) {
    case true:
      fn = querystring.parse
      break
    case false:
      break
    case 'extended':
      fn = parseExtendedQueryString
      break
    case 'simple':
      fn = querystring.parse
      break
    default:
      throw new TypeError('unknown value for query parser function: ' + val)
  }

  return fn
}

function parseExtendedQueryString (str) {
  return qs.parse(str, {
    allowPrototypes: true
  })
}
