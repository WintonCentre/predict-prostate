goog.provide("bide.impl.helpers");
goog.scope(function() {
  var self = bide.impl.helpers;
  if (!Object.keys) {
    Object.keys = function(o) {
      if (o !== Object(o)) {
        throw new TypeError("Object.keys called on a non-object");
      }
      var k = [], p;
      for (p in o) {
        if (Object.prototype.hasOwnProperty.call(o, p)) {
          k.push(p);
        }
      }
      return k;
    };
  }
  self.keys = function(o) {
    if (o == null) {
      return [];
    }
    return Object.keys(o);
  };
  self.isArray = Array.isArray || function(val) {
    return !!val && "[object Array]" == Object.prototype.toString.call(val);
  };
});

//# sourceMappingURL=bide.impl.helpers.js.map
