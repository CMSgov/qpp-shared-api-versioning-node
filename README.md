# qpp-shared-api-versioning-node
This package provides ExpressJS middleware that parses incoming HTTP headers to determine the version of the API to be consumed and sets a `apiVersion` and `requestedApiVersion` property on the `req` object.

## Usage

### Set request version by 'Accept' header

By default, the library will parse the version from the Accept header, expecting the following format:
**Accept: application/vnd.cms.gov.v1+json;**
For more details about the Accept header format, please refer to the [RFC](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).


```js
const requestVersion = require('@cms/request-version');

app.use(requestVersion.setVersion());
```

#### Options

You can pass in a `defaultVersion` vlaue on options to set the default version if no Accept header is included in the request:

```js
app.use(requestVersion.setVersion({ defaultVersion: 1 }));
```


If you define a middleware after requestVersion then you can verify that the version is indeed set:

```js
app.use((req, res, next) => {
  console.log(req.version)
  next()
});
```

## Installation

```bash
npm install @cms/request-version
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

