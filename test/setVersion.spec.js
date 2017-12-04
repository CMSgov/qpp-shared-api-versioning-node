const assert = require('chai').assert;

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

  it('should default to specified version if no accept header is present', () => {
    delete req.headers.accept;
    requestVersion.setVersion({ defaultVersion: 2 })(req, res, next);
    assert.equal(req.apiVersion, 2);
  });

  it('should be undefined if no default version and no accept header is present', () => {
    delete req.headers.accept;
    requestVersion.setVersion()(req, res, next);
    assert.equal(req.apiVersion, undefined);
  });

  it('should set default version if not supported and supportedVersions is passed in', () => {
    req.headers.accept = 'application/vnd.qpp.cms.gov.v3+json';
    requestVersion.setVersion({ defaultVersion: 1, supportedVersions: [1, 2] })(req, res, next);
    assert.equal(req.apiVersion, 1);
  });

  it('should set requested version if supported and supportedVersions is passed in', () => {
    req.headers.accept = 'application/vnd.qpp.cms.gov.v2+json';
    requestVersion.setVersion({ defaultVersion: 1, supportedVersions: [1, 2] })(req, res, next);
    assert.equal(req.apiVersion, 2);
  });

  it('should set format to json', () => {
    req.headers.accept = 'application/vnd.qpp.cms.gov.v1+json';
    requestVersion.setVersion()(req, res, next);
    assert.equal(req.apiVersion, 1);
    assert.equal(req.format, 'json');
  });

  it('should set format to xml', () => {
    req.headers.accept = 'application/vnd.qpp.cms.gov.v1+xml';
    requestVersion.setVersion()(req, res, next);
    assert.equal(req.apiVersion, 1);
    assert.equal(req.format, 'xml');
  });

  it('should set format to json if format is not specified', () => {
    req.headers.accept = 'application/vnd.qpp.cms.gov.v1';
    requestVersion.setVersion()(req, res, next);
    assert.equal(req.apiVersion, 1);
    assert.equal(req.format, null);
  });

  it('should set not set format if format is unrecognized and theres no default format', () => {
    req.headers.accept = 'application/vnd.qpp.cms.gov.v1+other';
    requestVersion.setVersion()(req, res, next);
    assert.equal(req.apiVersion, 1);
    assert.equal(req.format, null);
  });

  it('should set format to json if default format is set to json and accept any version without a default format', () => {
    req.headers.accept = 'application/vnd.qpp.cms.gov.v1+other';
    requestVersion.setVersion({ defaultFormat: 'json' })(req, res, next);
    assert.equal(req.apiVersion, 1);
    assert.equal(req.format, 'json');
  });

  it('should not set format to json if format is unrecognized and there isnt any default', () => {
    req.headers.accept = 'application/badheader';
    requestVersion.setVersion()(req, res, next);
    assert.equal(req.apiVersion, null);
    assert.equal(req.format, null);
  });

  it('should set format to json and apiVersion to default if header is unrecognized', () => {
    req.headers.accept = 'application/badheader';
    requestVersion.setVersion({ defaultVersion: 2 })(req, res, next);
    assert.equal(req.apiVersion, 2);
    assert.equal(req.format, null);
  });

  it('should set format to default and not set apiVersion if header is unrecognized', () => {
    req.headers.accept = 'application/badheader';
    requestVersion.setVersion({ defaultFormat: 'xml' })(req, res, next);
    assert.equal(req.apiVersion, null);
    assert.equal(req.format, 'xml');
  });

  it('should set format to json and apiVersion to default if header is unrecognized', () => {
    req.headers.accept = 'application/badheader';
    requestVersion.setVersion({ defaultVersion: 2, defaultFormat: 'json' })(req, res, next);
    assert.equal(req.apiVersion, 2);
    assert.equal(req.format, 'json');
  });
});
