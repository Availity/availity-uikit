# availity-uikit

> Availity UI Kit powered by [Bootstrap 4](http://v4-alpha.getbootstrap.com/) with modifications to match Availity style guidelines

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&logo=MIT)](http://opensource.org/licenses/MIT)
[![NPM](http://img.shields.io/npm/v/availity-uikit.svg?style=for-the-badge&&logo=npm)](https://npmjs.org/package/availity-uikit)

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

[http://availity.github.io/availity-uikit/v3]( http://availity.github.io/availity-uikit/v3)

## Supported Browsers

* Internet Explorer 11+
* Google Chrome > 2% market share
* Mozilla Firefox > 2% market share

## Installation

>
```bash
$ npm install availity-uikit --save
```
## Icon Fonts

Availity uses [Fontello](http://fontello.com/) to manage icon fonts.  Our [font configuration](./packages/uikit/fonts/config.json) can be used on Fontello to edit the font catalog.

### Updating Fonts

+ Upload configuration to [Fontello](http://fontello.com/)
+ After making changes, download zip and extract `font` folder into the uikit [font](./packages/uikit/fonts/)
+ Replace the [font configuration](./packages/uikit/fonts/config.json) with the new one
+ `npm run updateFonts` and commit changes

## Contributing

+ `npm install`
+ `npm start` runs Gatsby develop server on `http://localhost:8000`
+ Make changes to `*.scss` files in  `packages/uikit`
+ Update the documentation in `packages/docs`
+ Run `npm run release`. This command does the following:
    + Parses `angular` style commits using `conventional-changelog` to determine the next version for the packages
    + Publishes `availity-uikit` to **npm** using Lerna.
+ Alternatively, run `npm run release ${VERSION}` and the release script will use `${VERSION}` as the version number for all packages.
+ `npm run deploy` will deploy the docs to the `gh-pages` branch inside the `./v3` folder

## Disclaimer

Open source software components distributed or made available in the Availity Materials are licensed to Company under the terms of the applicable open source license agreements, which may be found in text files included in the Availity Materials.

## License

[MIT](./LICENSE)
