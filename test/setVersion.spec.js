const chai = require('chai');

const assert = chai.assert;
const requestVersion = require('../index.js');

describe('requestVersion tests', () => {
  let req;
  const res = {
    send(resJSON) {},
  };
  const next = () => {};

  beforeEach(() => {
    req = {
      headers: { accept: '' }
    };
  })

  it('should set version on req', () => {
    req.headers.accept = 'application/vnd.qpp.cms.gov.v1+json';
    requestVersion.setVersion()(req, res, next);
    assert.equal(req.apiVersion, 1);
  })

  it('should remove whitespace and return correct version', () => {
    req.headers.accept = ' application/vnd.qpp.cms.gov.v1+json ';
    requestVersion.setVersion()(req, res, next);
    assert.equal(req.apiVersion, 1);
  })

  it('should defualt to specified version if no accept header is present', () => {
    delete req.headers.accept;
    requestVersion.setVersion({ defaultVersion: 2 })(req, res, next);
    assert.equal(req.apiVersion, 2);
  })

  it('should be undefined if no defualt version and no accept header is present', () => {
    delete req.headers.accept;
    requestVersion.setVersion()(req, res, next);
    assert.equal(req.apiVersion, undefined);
  })
});
