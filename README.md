# availity-uikit

> Availity UI Kit powered by [Bootstrap 4](http://v4-alpha.getbootstrap.com/) with modifications to match Availity style guidelines

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
$ npm install availity-uikit@next --save
```
## Icon Fonts

Availity uses [Fontello](http://fontello.com/) to manage icon fonts.  Our [font configuration](./packages/uikit/fonts/config.json) can be used on Fontello to edit the font catalog.

## Contributing

+ `npm install`
+ `npm start` runs Gatsby develop server on `http://localhost:8000`
+ Make changes to `*.scss` files in  `packages/uikit`
+ Update the documentation in `packages/uikit`
+ Run `npm run release`. This command does the following:
    + Parses `angular` style commits using `conventional-changelog` to determine the next version for the packages
    + Publishes `availity-uikit` to **npm** using Lerna.
+ Alternatively, run `npm run release ${VERSION}` and the release script will use `${VERSION}` as the version number for all packages.

## Disclaimer

Open source software components distributed or made available in the Availity Materials are licensed to Company under the terms of the applicable open source license agreements, which may be found in text files included in the Availity Materials.

## License

[MIT](./LICENSE)
