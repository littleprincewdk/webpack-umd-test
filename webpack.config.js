const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve("src/index.js"),
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
  },
  devtool: "source-map",
};
