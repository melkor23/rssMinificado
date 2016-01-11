'use strict';

var app = require('../..');
var request = require('supertest');

describe('GetImage API:', function() {

  describe('GET /api/getImages', function() {
    var getImages;

    beforeEach(function(done) {
      request(app)
        .get('/api/getImages')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          getImages = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      getImages.should.be.instanceOf(Array);
    });

  });

});
