const { merge } = require("webpack-merge");
const HtmlWebapckPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const { dependencies } = packageJson;

const devConfig = {
    mode: "development",
    devServer: {
        // historApiFallback: {
        //     index: "index.html",
        // },
        port: 8081,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "marketing",
            filename: "remoteEntry.js",
            exposes: {
                "./MarketingApp": "./src/bootstrap",
            },
            shared: dependencies,
        }),
        new HtmlWebapckPlugin({
            template: "./public/index.html",
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
