const { merge } = require("webpack-merge");
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
        port: 8080,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                marketing: "marketing@http://localhost:8081/remoteEntry.js",
            },
            shared: dependencies,
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
