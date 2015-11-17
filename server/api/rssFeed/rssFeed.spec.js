'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/rssFeeds', function() {

  it('should respond with XML array', function(done) {
    request(app)
      .get('/api/rssFeeds')
      .expect(200)
      .end(function(err, res) {
        //console.log('Error-->'+err);
        //console.log('Res-->'+res);
        if (err) return done(err);
        //res.body.should.be.instanceof(Array);
        done();
      });
  });
});