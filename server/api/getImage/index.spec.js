'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var getImageCtrlStub = {
  index: 'getImageCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var getImageIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './getImage.controller': getImageCtrlStub
});

describe('GetImage API Router:', function() {

  it('should return an express router instance', function() {
    getImageIndex.should.equal(routerStub);
  });

  describe('GET /api/getImages', function() {

    it('should route to getImage.controller.index', function() {
      routerStub.get
        .withArgs('/', 'getImageCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
