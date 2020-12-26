const path = require("path");
const nodeWebExternals = require("webpack-node-externals");

module.exports = {
  entry: ["regenerator-runtime/runtime", "./src/index.ts"],
  mode: "development",
  target: "node",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "babel-loader", exclude: /node_modules/ }],
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
  },
  externals: [nodeWebExternals()],
};
