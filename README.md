# availity-uikit

> Availity UI Kit powered by [Bootstrap 4](http://v4-alpha.getbootstrap.com/) with modifications to match Availity style guidelines

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge&logo=MIT)](http://opensource.org/licenses/MIT)
[![NPM](http://img.shields.io/npm/v/availity-uikit.svg?style=for-the-badge&&logo=npm)](https://npmjs.org/package/availity-uikit)

## Table of Contents

-   [Demo](#demo)
-   [Supported Browsers](#supported-browsers)
-   [Quickstart](#quickstart)
-   [Icon Fonts](#icon-fonts)
-   [Contributing](#contributing)
-   [Authors](#authors)
-   [Disclaimer](#disclaimer)
-   [License](#license)

## Demo

[http://availity.github.io/availity-uikit/v3](http://availity.github.io/availity-uikit/v3)

## Supported Browsers

-   Google Chrome > 2% market share
-   Mozilla Firefox > 2% market share
-   Microsoft Edge
-   Internet Explorer 11+ (Internet Explorer will no longer be supported starting August 21st, 2021)

## Installation

>

```bash
$ npm install availity-uikit --save
```

or

```bash
$ yarn add availity-uikit
```

## Icon Fonts

Availity uses [Fontello](http://fontello.com/) to manage icon fonts. Our [font configuration](./packages/uikit/fonts/config.json) can be used on Fontello to edit the font catalog.

### Updating Fonts

-   Upload configuration to [Fontello](http://fontello.com/)
-   After making changes, download zip and extract `font` folder into the uikit [font](./packages/uikit/fonts/)
-   Replace the [font configuration](./packages/uikit/fonts/config.json) with the new one
-   `npm run updateFonts` and commit changes

## Contributing

-   `yarn install`
-   `yarn start` runs Gatsby develop server on `http://localhost:8000`

## Disclaimer

Open source software components distributed or made available in the Availity Materials are licensed to Company under the terms of the applicable open source license agreements, which may be found in text files included in the Availity Materials.

## License

[MIT](./LICENSE)
