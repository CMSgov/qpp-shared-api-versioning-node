const versionRegEx = /application\/vnd\.qpp\.cms\.gov\.v(\d+)\+json/;

class requestVersion {
  static setVersion (options) {
    const defaultVersion = options ? options.defaultVersion : null;
    const supportedVersions = options
      ? (Array.isArray(options.supportedVersions) ? options.supportedVersions : [options.supportedVersions])
      : null;

    return (req, res, next) => {
      const acceptHeader = this.removeWhitespaces(req.headers.accept);

      if (!versionRegEx.test(acceptHeader)) {
        return this.setDefaultVersion(defaultVersion, req, next);
      }

      const version = acceptHeader.match(versionRegEx)[1];

      if (supportedVersions) {
        if (!supportedVersions.some(v => parseInt(v) === parseInt(version))) {
          return this.setDefaultVersion(defaultVersion, req, next);
        }
      }

      req.apiVersion = version;

      return next();
    };
  }

  static removeWhitespaces (str) {
    if (typeof str === 'string') {
      return str.replace(/\s/g, '');
    }

    return '';
  }

  static setDefaultVersion (defaultVersion, req, next) {
    req.apiVersion = undefined;
    if (defaultVersion) {
      req.apiVersion = defaultVersion;
    }

    return next();
  }
}

module.exports = requestVersion;
