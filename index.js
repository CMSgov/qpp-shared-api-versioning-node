const versionRegEx = /application\/vnd\.qpp\.cms\.gov\.v(\d+)(\+(json|xml))?/;

class requestVersion {
  static setVersion (options) {
    const defaultVersion = options ? options.defaultVersion : null;
    const defaultFormat = 'json';
    const supportedVersions = options
      ? (Array.isArray(options.supportedVersions) ? options.supportedVersions : [options.supportedVersions])
      : null;

    return (req, res, next) => {
      const acceptHeader = this.removeWhitespaces(req.headers.accept);

      if (!versionRegEx.test(acceptHeader)) {
        return this.returnVersionAndFormat(defaultVersion, defaultFormat, req, next);
      } else {
        const version = acceptHeader.match(versionRegEx)[1];
        const format = acceptHeader.match(versionRegEx)[3] || defaultFormat;

        // Return
        if (supportedVersions) {
          if (!supportedVersions.some(v => parseInt(v) === parseInt(version))) {
            return this.returnVersionAndFormat(defaultVersion, format, req, next);
          }
        }

        return this.returnVersionAndFormat(version, format, req, next);
      }
    };
  }

  static removeWhitespaces (str) {
    if (typeof str === 'string') {
      return str.replace(/\s/g, '');
    }

    return '';
  }

  static returnVersionAndFormat(apiVersion, format, req, next) {
    req.apiVersion = apiVersion;
    req.format = format;

    return next();
  }
}

module.exports = requestVersion;
