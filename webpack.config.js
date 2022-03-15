const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");

module.exports = {
  devServer: {
    watchFiles: ["./src/assets/i18n/**/*.json"],
  },
  plugins: [
    new MergeJsonWebpackPlugin({
      output: {
        groupBy: [
          {
            pattern: "./src/assets/i18n/en/**/*.json",
            fileName: "./assets/i18n/en.json",
          },
          {
            pattern: "./src/assets/i18n/fr/**/*.json",
            fileName: "./assets/i18n/fr.json",
          },
        ],
      },
    }),
  ],
};
