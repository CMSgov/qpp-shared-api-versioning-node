# qpp-shared-api-versioning-node
This package provides ExpressJS middleware that parses incoming HTTP headers to determine the version of the API to be consumed and sets a `apiVersion` property on the `req` object.

The library will parse the version from the Accept header, expecting the following format:
**Accept: application/vnd.cms.gov.v1+json**

## Usage

### Set request version by 'Accept' header

```js
const requestVersion = require('@cms/request-version');

app.use(requestVersion.setVersion());
```

### Options

```js
const options = {
  defaultVersion: 1,
  supportedVersions: [1, 2]
};
```

You can pass in a `defaultVersion` value on options to set the default version if no Accept header is included in the request:

```js
app.use(requestVersion.setVersion({ defaultVersion: 1 }));
```

If you pass in a `supportedVersions` array on options the requested version does not exist in the array, then the defualt version will be set.

### Downstream

If you define a middleware after requestVersion then you can verify that the version is indeed set:

```js
app.use((req, res, next) => {
  console.log(req.apiVersion)
  next()
});
```

## Installation

```bash
npm install @cmsgov/request-version
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

## Author

Branon Barrett <branon.barrett@semanticbits.com>

