# Contribution Guidelines

## Publishing

We use the npm registry under the `cmsgov` account.

To publish an update,

1. Update the version in `package.json`, remove `package.lock`, and run `npm install`. We follow [Semantic Versioning](https://semver.org/).
1. Login to npm: `npm login`.
1. Publish to npm: `npm publish`.