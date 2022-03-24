goog.provide("bide.impl.router");
goog.require("bide.impl.path");
goog.require("bide.impl.helpers");
goog.require("goog.object");
goog.scope(function() {
  var _path = bide.impl.path;
  var isArray = bide.impl.helpers.isArray;
  function Router() {
    this.items = [];
    this.map = {};
  }
  function Route() {
    this.re = null;
    this.name = null;
    this.keys = null;
    this.format = null;
  }
  function insert(router, path, name, options) {
    var route = new Route;
    route.re = _path.parse(path, options);
    route.keys = route.re._keys;
    route.format = _path.compileTokens(route.re._tokens);
    route.name = name;
    if (router == null) {
      router = new Router;
    }
    router.items.push(route);
    name = name.toString();
    if (router.map[name] === undefined) {
      router.map[name] = [route];
    } else {
      router.map[name].push(route);
    }
    return router;
  }
  function encodeQueryParams(params) {
    var encode = encodeURIComponent;
    var keys = goog.object.getKeys(params);
    var result = [];
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var val = params[key];
      if (val === undefined) {
      } else {
        if (val === null) {
          result.push(encode(key));
        } else {
          if (isArray(val)) {
            var _result = [];
            for (var y = 0; y < val.length; y++) {
              var _val = val[y];
              if (_val === undefined) {
              } else {
                if (_val === null) {
                  _result.push(encode(key));
                } else {
                  _result.push(encode(key) + "\x3d" + encode(_val));
                }
              }
            }
            result.push(_result.join("\x26"));
          } else {
            result.push(encode(key) + "\x3d" + encode(val));
          }
        }
      }
    }
    return result.join("\x26");
  }
  function parseQuery(query) {
    var result = {};
    if (!typeof val == "string") {
      return result;
    }
    query = query.trim().replace(/^(\?|#|&)/, "");
    if (!query) {
      return result;
    }
    var params = query.split("\x26");
    for (var i = 0; i < params.length; i++) {
      var parts = params[i].replace(/\+/g, " ").split("\x3d");
      var key = parts.shift();
      var val = parts.length > 0 ? parts.join("\x3d") : undefined;
      key = decodeURIComponent(key);
      if (val === undefined) {
        val = null;
      } else {
        val = decodeURIComponent(val);
      }
      if (result[key] === undefined) {
        result[key] = val;
      } else {
        if (isArray(result[key])) {
          result[key].push(val);
        } else {
          result[key] = [result[key], val];
        }
      }
    }
    return result;
  }
  function match(router, path) {
    var path, query;
    if (path.indexOf("?") !== -1) {
      var parts = path.split("?");
      path = parts[0];
      query = parseQuery(parts[1]);
    } else {
      path = path;
      query = null;
    }
    var items = router.items;
    var result = null;
    var item = null;
    for (var i = 0; i < items.length; i++) {
      item = items[i];
      result = item.re.exec(path);
      if (result !== null) {
        break;
      }
    }
    if (result === null) {
      return null;
    }
    var params = {};
    for (var i = 0; i < item.keys.length; i++) {
      var key = item.keys[i];
      var res = result[i + 1];
      if (res != null) {
        params[key.name] = res;
      }
    }
    if (isEmpty(params)) {
      params = null;
    }
    return [item.name, params, query];
  }
  function resolve(router, name, params, query) {
    var routes = router.map[name.toString()] || null;
    if (routes == null) {
      return null;
    }
    var result = null;
    if (isEmpty(params)) {
      for (var i = 0; i < routes.length; i++) {
        try {
          result = routes[i].format(params);
          break;
        } catch (e) {
        }
      }
    } else {
      for (var i = 0; i < routes.length; i++) {
        if (routes[i].keys.length === 0) {
          continue;
        }
        try {
          result = routes[i].format(params);
          break;
        } catch (e) {
        }
      }
    }
    if (query != null && result != null) {
      result = result + "?" + encodeQueryParams(query);
    }
    return result;
  }
  function isRouter(v) {
    return v instanceof Router;
  }
  function empty() {
    return new Router;
  }
  function isEmpty(obj) {
    for (var x in obj) {
      return false;
    }
    return true;
  }
  var module = bide.impl.router;
  module.insert = insert;
  module.match = match;
  module.resolve = resolve;
  module.isRouter = isRouter;
  module.empty = empty;
  module.parseQuery = parseQuery;
  module.encodeQueryParams = encodeQueryParams;
});

//# sourceMappingURL=bide.impl.router.js.map
