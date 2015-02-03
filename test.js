/*!
 * pick-from <https://github.com/jonschlinkert/pick-from>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var pickFrom = require('./');

describe('pickFrom', function () {
  it('should get the first value for `key` from the given objects', function () {
    pickFrom('a', [{b: 'c'}, {a: 'd'}]).should.eql('d');
    (pickFrom('a', [{b: 'c'}, {a: null}, {a: 'foo'}]) == null).should.be.true;
  });

  it('should get the first non-null value when `strict: true`', function () {
    pickFrom('a', [{b: 'c'}, {a: null}, {a: 'foo'}], true).should.eql('foo');
  });
});
