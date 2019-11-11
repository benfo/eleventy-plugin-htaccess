const fs = require("fs");
const path = require("path");
const setHTTPS = require("./features/setHTTPS");

module.exports = {
  initArguments: {},
  configFunction: (eleventyConfig, options = {}) => {
    const defaultOptions = { https: false, output: "_site" };
    const opts = Object.assign({}, defaultOptions, options);
    let htPath = path.join(opts.output, ".htaccess");
    let htTemplatePath = path.join(__dirname, "templates", "htaccess");

    let htContent = fs.readFileSync(htTemplatePath, "utf-8", { flag: "w" });
    htContent = setHTTPS(htContent, opts.https);

    console.log(`Writing ${htPath}`);

    fs.writeFileSync(htPath, htContent);
  }
};
