const path = require("path");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "index.js")
    },
    output: {
        filename: "[name].js",
        path: __dirname
    },
    watch: true
}