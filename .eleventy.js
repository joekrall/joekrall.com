const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toUTC().toFormat('LLLL dd, yyyy');
  });
  eleventyConfig.addGlobalData('generated', () => {
    return DateTime.now().toUTC();
  });

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
