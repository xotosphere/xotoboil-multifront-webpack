const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const outputPath = path.resolve(__dirname, "dist");
module.exports = {
    entry: "./src/index.ts",
    cache: false,
    mode: "development",
    devtool: "source-map",
    optimization: {
        minimize: false,
    },
    output: {
        publicPath: "http://localhost:3001/",
    },
    resolve: {
        extensions: [".jsx", ".js", ".json", ".ts", ".tsx"],
    },
    devServer: {
        contentBase: outputPath,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "navigation",
            library: { type: "var", name: "navigation" },
            filename: "remoteEntry.js",
            remotes: {},
            exposes: {
                "./Header": "./src/Header",
                "./Footer": "./src/Footer",
            },
            shared: ["react", "react-dom", "single-spa-react"],
        }),
    ],
};
