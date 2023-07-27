const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html")
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "build")
    },
    port: 3000,
    historyApiFallback: true,
  },

  resolve: {
    plugins: [new TsconfigPathsPlugin({configFile: "./tsconfig.json"})],
    extensions: [".ts", ".tsx", ".js", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {loader: "css-loader", options: { modules: true }},
          {
            loader: "sass-loader",
            options: {
              additionalData: `@import "./src/styles/variables.scss";`,
            },
          }
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
};
