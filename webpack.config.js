const path = require("path");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src", "index.js"),
        posts: path.resolve(__dirname, "src", "posts.js")
    },
    output: {
        filename: "[name].js",
        path: __dirname
    },
    watch: true
}