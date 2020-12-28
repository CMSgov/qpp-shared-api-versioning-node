# qpp-shared-api-versioning-node
![Build - PR](https://github.com/CMSgov/qpp-shared-api-versioning-node/workflows/Build%20-%20PR/badge.svg?branch=master)

This package provides ExpressJS middleware that parses incoming HTTP headers to determine the type and version of the API to be consumed. It sets a `apiVersion` and `format` property on the `req` object.

The library will parse the version from the Accept header, expecting the following format:

`Accept: application/vnd.qpp.cms.gov.v1+json`

or

`Accept: application/vnd.qpp.cms.gov.v123+xml`

or

`Accept: application/vnd.qpp.cms.gov.v123`

## Requirements
node v10.15.x or higher

## Usage

### Set request version by 'Accept' header

```js
const requestVersion = require('@cmsgov/qpp-shared-api-versioning-node');

app.use(requestVersion.setVersion());
```

### Options

```js
const options = {
  defaultFormat: 'json'
  defaultVersion: 1,
  supportedVersions: [1, 2]
};
```

You can pass a `defaultFormat` to set a format if none are passed. Note: This will only be set if the format in the Accept header of the request matches `xml` or `json`.

You can pass in a `defaultVersion` value on options to set the default version if there is no version in the Accept header of the request:

```js
app.use(requestVersion.setVersion({ defaultVersion: 1 }));
```

If you pass in a `supportedVersions` array on options the requested version does not exist in the array, then the defualt version will be set.

### Downstream

If you define a middleware after requestVersion then you can verify that the version is indeed set:

```js
app.use((req, res, next) => {
  console.log(req.apiVersion);
  console.log(req.format);
  next();
});
```

## Installation

```bash
npm install @cmsgov/qpp-shared-api-versioning-node
```

## Tests

```bash
npm test
```

Project linting:

```bash
npm run lint
```

## Coverage

```bash
npm run test:coverage
```

## Want to Contribute?

Want to file a bug or contribute some code? Read up on our guidelines for [contributing].

[contributing]: /.github/CONTRIBUTING.md

## Public Domain
This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived
through the CC0 1.0 Universal public domain dedication.		

All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to
comply with this waiver of copyright interest.		

See the [formal LICENSE file](/LICENSE).


## Resources

- [QPP REST API - Versioning](https://confluence.cms.gov/display/QPPGUIDE/RESTful+API+style+guide#RESTfulAPIstyleguide-Versioning)
