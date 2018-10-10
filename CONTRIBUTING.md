# Contribution Guidelines

## Publishing

We use the npm registry under the `cmsgov` account as well as a private Nexus registry.

To publish an update,

1. Update the version in `package.json`, remove `package.lock`, and run `npm install`. We follow [Semantic Versioning](https://semver.org/).
1. Login to npm: `npm login`.
1. Publish to npm: `npm publish`.
1. Login to Nexus: `npm login --registry=http://qppa-nexus.navapbc.com:8081/repository/npm-private/`
1. Publish to Nexus: `npm publish --registry=http://qppa-nexus.navapbc.com:8081/repository/npm-private/`
