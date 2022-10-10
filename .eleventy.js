const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return DateTime
      .fromJSDate(dateObj)
      .toISO({ extendedZone: true });
  });
  eleventyConfig.addFilter("postDate", (dateStr) => {
    return DateTime
      .fromISO(dateStr)
      .toFormat('LLLL dd, yyyy');
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
