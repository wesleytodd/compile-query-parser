# The Express `compileQueryParser` method as a standalone module

[![NPM Version](https://img.shields.io/npm/v/compile-query-parser.svg)](https://npmjs.org/package/compile-query-parser)
[![NPM Downloads](https://img.shields.io/npm/dm/compile-query-parser.svg)](https://npmjs.org/package/compile-query-parser)
[![Build Status](https://travis-ci.org/wesleytodd/compile-query-parser.svg?branch=master)](https://travis-ci.org/wesleytodd/compile-query-parser)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

```
$ npm install --save compile-query-parser
```

## Usage

```javascript
var compileQueryParser = require('compile-query-parser')

var fnc = compileQueryParser(true) // same as 'simple'
var fnc = compileQueryParser(false) // disable query string parsing
var fnc = compileQueryParser('extended') // WARNING: allows the overriding of prototype methods
var fnc = compileQueryParser('simple') // uses querystring.parse
```

See Express docs for more: http://expressjs.com/en/4x/api.html#app.set

## Development

The tests can be run with `npm t`, which also runs the linter and any other builds steps for the module.
When a release is ready, use npm to bump the version and publish:

```
$ npm version minor
$ npm publish
```

Pull requests should be made against master or the currently active development branch.
