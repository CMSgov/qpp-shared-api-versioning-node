const chai = require('chai');

const assert = chai.assert;
const requestVersion = require('../index.js');

describe('requestVersion tests', () => {
  let req;
  const res = {
    send (resJSON) {},
  };
  const next = () => {};

  beforeEach(() => {
    req = {
      headers: { accept: '' }
    };
  });

  it('should set version on req', () => {
    req.headers.accept = 'application/vnd.qpp.cms.gov.v1+json';
    requestVersion.setVersion()(req, res, next);
    assert.equal(req.apiVersion, 1);
  });

  it('should remove whitespace and return correct version', () => {
    req.headers.accept = ' application/vnd.qpp.cms.gov.v1+json ';
    requestVersion.setVersion()(req, res, next);
    assert.equal(req.apiVersion, 1);
  });

  it('should defualt to specified version if no accept header is present', () => {
    delete req.headers.accept;
    requestVersion.setVersion({ defaultVersion: 2 })(req, res, next);
    assert.equal(req.apiVersion, 2);
  });

  it('should be undefined if no defualt version and no accept header is present', () => {
    delete req.headers.accept;
    requestVersion.setVersion()(req, res, next);
    assert.equal(req.apiVersion, undefined);
  });

  it('should set defualt version if not supported and supportedVersions is passed in', () => {
    req.headers.accept = 'application/vnd.qpp.cms.gov.v3+json';
    requestVersion.setVersion({ defaultVersion: 1, supportedVersions: [1, 2] })(req, res, next);
    assert.equal(req.apiVersion, 1);
  });

  it('should set requested version if supported and supportedVersions is passed in', () => {
    req.headers.accept = 'application/vnd.qpp.cms.gov.v2+json';
    requestVersion.setVersion({ defaultVersion: 1, supportedVersions: [1, 2] })(req, res, next);
    assert.equal(req.apiVersion, 2);
  });
});
