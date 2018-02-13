const path = require("path");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src", "index.js"),
        posts: path.resolve(__dirname, "src", "posts.js")
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "build"),
    },
    watch: true,
    module: {
    	rules: [
    		{
    			test: /\.css$/, 
    			use: [
    				{
    					loader: "css-loader",
    				}
    			]
    		},
    		{
    			test: /\.scss$/,
    			use: [
    				{ loader: "style-loader" },
    				{ loader: "css-loader" },
    				{ loader: "sass-loader" }
    			]
    		} 

    	]
    }
}