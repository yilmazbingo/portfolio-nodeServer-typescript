const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeWebExternals = require("webpack-node-externals");

module.exports = {
  entry: ["regenerator-runtime/runtime", "./src/index.ts"],
  mode: process.env.NODE_ENV,
  target: "node",
  // "npm-run-all build dev:start" because of watching, dev:start wouldnot be execured
  // watch: true,
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "src", "dist"),
  },
  module: {
    // babel-loader was bundling separate files for decorators. use ts-loader
    rules: [{ test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ }],
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
  },
  externals: [nodeWebExternals()],
  plugins: [new CleanWebpackPlugin()],
};
