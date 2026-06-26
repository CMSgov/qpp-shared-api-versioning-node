const versionRegEx = /application\/vnd\.qpp\.cms\.gov\.v(\d+)(\+(json|xml))?/;

class requestVersion {
  static setVersion (options) {
    const defaultVersion = options && options.defaultVersion ? options.defaultVersion : null;
    const defaultFormat = options && options.defaultFormat ? options.defaultFormat : null;

    // Stores options.supportedVersions as an Array if it's not already an Array
    let supportedVersions = null;
    if (options) {
      if (Object.prototype.hasOwnProperty.call(options, 'supportedVersions')) {
        if (!Array.isArray(options.supportedVersions)) {
          supportedVersions = [options.supportedVersions];
        } else {
          supportedVersions = options.supportedVersions;
        }
      }
    }

    return (req, res, next) => {
      const acceptHeader = this.removeWhitespaces(req.headers.accept);
      if (!versionRegEx.test(acceptHeader)) {
        return this.returnVersionAndFormat(defaultVersion, defaultFormat, req, next);
      } else {
        const version = acceptHeader.match(versionRegEx)[1];
        const format = acceptHeader.match(versionRegEx)[3] || defaultFormat;

        // If the version provided in the header doesn't match any supported version,
        // return the default version
        if (supportedVersions && supportedVersions.length > 0) {
          if (!supportedVersions.some(v => parseInt(v) === parseInt(version))) {
            return this.returnVersionAndFormat(defaultVersion, format, req, next);
          }
        }

        return this.returnVersionAndFormat(parseInt(version), format, req, next);
      }
    };
  }

  static removeWhitespaces (str) {
    if (typeof str === 'string') {
      return str.replace(/\s/g, '');
    }

    return '';
  }

  static returnVersionAndFormat (apiVersion, format, req, next) {
    req.apiVersion = apiVersion;
    req.format = format;

    return next();
  }
}

module.exports = requestVersion;
