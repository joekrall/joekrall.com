const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");

  return {
      dir: { 
        input: 'src',
        data: "_data",
        includes: "_includes",
        layouts: "_layouts",
        output: '_site' 
      }
  }; 
};
