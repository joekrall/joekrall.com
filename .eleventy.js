const rss = require("@11ty/eleventy-plugin-rss");
const footnote = require("markdown-it-footnote");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(rss);
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/assets/css/normalize.css");
  eleventyConfig.addPassthroughCopy("src/assets/css/fonts.css");
  eleventyConfig.addPassthroughCopy("src/assets/css/style.css");
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toUTC().toFormat("LLLL dd, yyyy");
  });
  eleventyConfig.addFilter("noRssOnlyPosts", (posts) => {
    return posts.filter((post) => !post.data.tags.includes("RSS Only"));
  });
  eleventyConfig.addGlobalData("generated", () => {
    return DateTime.now().toUTC();
  });
  eleventyConfig.amendLibrary("md", mdLib => mdLib.use(footnote));

  return {
      dir: { 
        input: "src",
        data: "_data",
        includes: "_includes",
        layouts: "_layouts",
        output: "_site",
      }
  }; 
};
