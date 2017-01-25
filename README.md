# availity-uikit

> Availity UI Kit powered by [Bootstrap 4](http://v4-alpha.getbootstrap.com/) with overrides to match our style guidelines.

## Table of Contents
* [Demo](#demo)
* [Supported Browsers](#supported-browsers)
* [Quickstart](#quickstart)
* [Icon Fonts](#icon-fonts)
* [Contributing](#contributing)
* [Authors](#authors)
* [Disclaimer](#disclaimer)
* [License](#license)

## Demo

[http://availity.github.io/availity-uikit]( http://availity.github.io/availity-uikit)


## Supported Browsers

* Internet Explorer 10+
* Google Chrome > 1% market share
* Mozilla Firefox > 1% market share

## Quickstart

+ Install with npm

>
```bash
$ npm install availity-uikit --save
```

+ Reference the compiled assets from the `/dist` in `index.html`
+ If you use a module bundler (Webpack, Browserify), require the dependencies `js/index.js` and `scss/availity-uikit.scss`


## Icon Fonts

Availity uses [Fontello](http://fontello.com/) to manage the UIKit icon fonts.  Our [font configuration](./fonts/config.json) can be used on Fontello to edit the font catalog.

## Contributing

### Dependencies

+ [node v4+](https://github.com/nodejs/node/releases)

#### CLI

+ `npm start`
    * runs webpack dev server on `http://localhost:3000`
    * watches library and docs changes and automatically compiles the assets into `./build`
+ `npm run build`
    * cleans `/dist`
    * runs the webpack module bundler
    * produces regular and minified assets in `/dist
+ `npm run docs`
    * runs metalsmith and outputs to `/build`
    * runs webpack module bundler and outputs to `/dist`
+ `npm run lint`
    * runs Eslint across dev and lib files

## Authors

**Robert McGuinness**
+ [rob.mcguinness@availity.com](rob.mcguinness@availity.com)

**Robert Ventrone**
+ [robert.ventrone@availity.com](robert.ventrone@availity.com)

**Robert Warner**
+ [rob.warner@availity.com](rob.warner@availity.com)

**Bobby Bennett**
+ [bobby.bennett@availity.com](bobby.bennett@availity.com)

## Disclaimer

Open source software components distributed or made available in the Availity Materials are licensed to Company under the terms of the applicable open source license agreements, which may be found in text files included in the Availity Materials.

## License

[MIT](./LICENSE)

Copyright (c) 2016 Availity, LLC
