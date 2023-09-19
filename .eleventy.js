module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/stylesheet.css");
    eleventyConfig.addPassthroughCopy("./src/images");
    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};