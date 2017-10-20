const versionRegEx = /application\/vnd\.qpp\.cms\.gov\.v(\d+)\+json/;

class requestVersion {
  static setVersion (options) {
    return (req, res, next) => {
      const acceptHeader = this.removeWhitespaces(req.headers.accept);

      if (!versionRegEx.test(acceptHeader)) {
        req.apiVersion = undefined;
        if (options && options.defaultVersion) {
          req.apiVersion = options.defaultVersion;
        }

        return next();
      }

      req.apiVersion = acceptHeader.match(versionRegEx)[1];

      return next();
    };
  }

  static removeWhitespaces (str) {
    if (typeof str === 'string') {
      return str.replace(/\s/g, '');
    }

    return '';
  }
}

module.exports = requestVersion;
