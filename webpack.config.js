const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html")
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
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
          {loader: "resolve-url-loader"},
          {
            loader: "sass-loader?sourceMap",
            options: {
              additionalData: `@import "./src/styles/variables.scss";`,
              sourceMap: true
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
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: 'asset/resource'
      // },
    ]
  }
};
