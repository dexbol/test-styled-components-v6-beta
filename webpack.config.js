export default {
  mode: "development",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-react", {runtime: 'automatic'}]],
            },
          },
        ],
      },
    ],
  },
};
