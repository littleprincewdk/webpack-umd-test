(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory); // this will reserved, but i don`t want amd
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("lodash")); // this will disappear after compile
  } else {
    root.returnExports = factory(require("lodash")); // this will disappear after compile
  }
})(typeof self !== "undefined" ? self : this, function (lodash) {
  console.log(lodash.VERSION); // so lodash is undefined, this will throw an error: "TypeError: Cannot read property 'VERSION' of undefined";

  return "a umd module";
});

console.log(typeof define === "object"); // => console.log("function" === "object");
console.log(typeof module === "object"); // => console.log("object" === "object");
