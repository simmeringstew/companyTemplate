const pluginSitemap = require('@quasibit/eleventy-plugin-sitemap');

const configSitemap = require('./src/config/sitemap');
const configServer = require('./src/config/server');

module.exports = function (eleventyConfig) {

  // automatic sitemap generation using _data/client.json
  eleventyConfig.addPlugin(pluginSitemap, configSitemap);

  // sets how the dev server is run
  eleventyConfig.setServerOptions(configServer);

  // passthrough these to public, not processed by eleventy
  eleventyConfig.addPassthroughCopy('./src/assets/css', { ignoreFiles: ['style.css'] });
  eleventyConfig.addPassthroughCopy('./src/assets/favicons');
  eleventyConfig.addPassthroughCopy('./src/assets/images');
  eleventyConfig.addPassthroughCopy('./src/assets/js');
  eleventyConfig.addPassthroughCopy('./src/assets/svgs');

  // other passthroughs
  eleventyConfig.addPassthroughCopy('./src/admin');
  eleventyConfig.addPassthroughCopy('./src/_redirects');
  eleventyConfig.addPassthroughCopy({ './src/robots.txt': '/robots.txt' });
  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'public',
    },
    htmlTemplateEngine: 'njk',
  };
};
