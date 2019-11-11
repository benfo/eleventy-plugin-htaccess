# Eleventy Plugin Htaccess

A plugin for [Eleventy](https://github.com/11ty/eleventy/) that creates an htaccess file on build with default settings.

## Installation

```text
npm i eleventy-plugin-htaccess -D
```

## Usage

Open up your Eleventy config file and add the plugin.

```javascript
const htaccess = require("eleventy-plugin-htaccess");

config.addPlugin(htaccess);
```

Read more about [Eleventy plugins](https://www.11ty.io/docs/plugins/).

## Options

| Name   | Type   | Description                                                               | Default |
| ------ | ------ | ------------------------------------------------------------------------- | ------- |
| https  | bool   | Force https                                                               | false   |
| output | string | The [output directory](https://www.11ty.io/docs/config/#output-directory) | \_site  |

### Example Options

```javascript
config.addPlugin(htaccess, {
  https: true,
  output: "dist"
});
```
