module.exports = function(config) {

    // Pass js files right through to Eleventy
    config.addPassthroughCopy("src/js");

    // Where to add input and output
    return {
        dir: {
            input: "src",
            output: "dist",
            data: "_data"
        }
    };
};