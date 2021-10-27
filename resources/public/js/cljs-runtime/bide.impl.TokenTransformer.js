goog.provide("bide.impl.TokenTransformer");
goog.require("goog.history.Html5History");
goog.scope(function() {
  bide.impl.TokenTransformer = function() {
  };
  bide.impl.TokenTransformer.prototype.retrieveToken = function(pathPrefix, location) {
    return location.pathname.substr(pathPrefix.length) + location.search;
  };
  bide.impl.TokenTransformer.prototype.createUrl = function(token, pathPrefix, location) {
    return pathPrefix + token;
  };
});

//# sourceMappingURL=bide.impl.TokenTransformer.js.map
