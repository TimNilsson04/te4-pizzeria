module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/reset.min.css");
    eleventyConfig.addPassthroughCopy("./src/stylesheet.css");
    eleventyConfig.addPassthroughCopy("./src/images");
    return {
        dir: {
            input: 'src',
            output: 'docs',
        },
    };
};