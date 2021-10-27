goog.provide("bide.impl.path");
goog.require("bide.impl.helpers");
goog.scope(function() {
  var isArray = bide.impl.helpers.isArray;
  var PATH_REGEXP = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:([\\w\\-]+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");
  function parseTokens(str) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = "";
    var res;
    while ((res = PATH_REGEXP.exec(str)) != null) {
      var m = res[0];
      var escaped = res[1];
      var offset = res.index;
      path += str.slice(index, offset);
      index = offset + m.length;
      if (escaped) {
        path += escaped[1];
        continue;
      }
      var next = str[index];
      var prefix = res[2];
      var name = res[3];
      var capture = res[4];
      var group = res[5];
      var modifier = res[6];
      var asterisk = res[7];
      if (path) {
        tokens.push(path);
        path = "";
      }
      var partial = prefix != null && next != null && next !== prefix;
      var repeat = modifier === "+" || modifier === "*";
      var optional = modifier === "?" || modifier === "*";
      var delimiter = res[2] || "/";
      var pattern = capture || group || (asterisk ? ".*" : "[^" + delimiter + "]+?");
      tokens.push({name:name || key++, prefix:prefix || "", delimiter:delimiter, optional:optional, repeat:repeat, partial:partial, asterisk:!!asterisk, pattern:escapeGroup(pattern)});
    }
    if (index < str.length) {
      path += str.substr(index);
    }
    if (path) {
      tokens.push(path);
    }
    return tokens;
  }
  function encodeURIComponentPretty(str) {
    return encodeURI(str).replace(/[\/?#]/g, function(c) {
      return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function encodeAsterisk(str) {
    return encodeURI(str).replace(/[?#]/g, function(c) {
      return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
  }
  function escapeString(str) {
    return str.replace(/([.+*?=^!:${}\(\)\[\]|\/\\])/g, "\\$1");
  }
  function escapeGroup(group) {
    return group.replace(/([=!:$\/()])/g, "\\$1");
  }
  function flags(options) {
    return options.sensitive ? "" : "i";
  }
  function regexpToRegexp(path) {
    var groups = path.source.match(/\((?!\?)/g);
    var keys = [];
    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({name:i, prefix:null, delimiter:null, optional:false, repeat:false, partial:false, asterisk:false, pattern:null});
      }
    }
    return [path, keys];
  }
  function tokensToRegExp(tokens, options) {
    options = options || {};
    var strict = options.strict;
    var end = options.end !== false;
    var route = "";
    var lastToken = tokens[tokens.length - 1];
    var endsWithSlash = typeof lastToken === "string" && /\/$/.test(lastToken);
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === "string") {
        route += escapeString(token);
      } else {
        var prefix = escapeString(token.prefix);
        var capture = "(?:" + token.pattern + ")";
        if (token.repeat) {
          capture += "(?:" + prefix + capture + ")*";
        }
        if (token.optional) {
          if (!token.partial) {
            capture = "(?:" + prefix + "(" + capture + "))?";
          } else {
            capture = prefix + "(" + capture + ")?";
          }
        } else {
          capture = prefix + "(" + capture + ")";
        }
        route += capture;
      }
    }
    if (!strict) {
      route = (endsWithSlash ? route.slice(0, -2) : route) + "(?:\\/(?\x3d$))?";
    }
    if (end) {
      route += "$";
    } else {
      route += strict && endsWithSlash ? "" : "(?\x3d\\/|$)";
    }
    return new RegExp("^" + route, flags(options));
  }
  function compileTokens(tokens) {
    var matches = new Array(tokens.length);
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === "object") {
        matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$");
      }
    }
    return function(obj, opts) {
      var path = "";
      var data = obj || {};
      var options = opts || {};
      var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (typeof token === "string") {
          path += token;
          continue;
        }
        var value = data[token.name];
        var segment;
        if (value == null) {
          if (token.optional) {
            if (token.partial) {
              path += token.prefix;
            }
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to be defined');
          }
        }
        if (isArray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
          }
          if (value.length === 0) {
            if (token.optional) {
              continue;
            } else {
              throw new TypeError('Expected "' + token.name + '" to not be empty');
            }
          }
          for (var j = 0; j < value.length; j++) {
            segment = encode(value[j]);
            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
            }
            path += (j === 0 ? token.prefix : token.delimiter) + segment;
          }
          continue;
        }
        segment = token.asterisk ? encodeAsterisk(value) : encode(value);
        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
        }
        path += token.prefix + segment;
      }
      return path;
    };
  }
  function parse(path, options) {
    if (options === undefined) {
      options = {};
    }
    var tokens = parseTokens(path);
    var re = tokensToRegExp(tokens, options);
    var keys = [];
    for (var i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] !== "string") {
        keys.push(tokens[i]);
      }
    }
    re._tokens = tokens;
    re._keys = keys;
    return re;
  }
  var self = bide.impl.path;
  self.parse = parse;
  self.compileTokens = compileTokens;
});

//# sourceMappingURL=bide.impl.path.js.map
