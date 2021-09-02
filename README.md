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

[http://availity.github.io/availity-uikit/v4](http://availity.github.io/availity-uikit/v4)

## Supported Browsers

-   Google Chrome > 2% market share
-   Mozilla Firefox > 2% market share
-   Microsoft Edge
-   Internet Explorer 11+ (Internet Explorer will no longer be supported starting August 21st, 2021)

## Installation

Add the `availity-uikit` with the package manager of your choice

npm

```bash
npm install availity-uikit --save
```

or

Yarn

```bash
yarn add availity-uikit
```

## Icon Fonts

Availity uses [Fontello](http://fontello.com/) to manage icon fonts. Our [font configuration](./packages/uikit/fonts/config.json) can be used on Fontello to edit the font catalog.

### Updating Fonts

-   Upload configuration to [Fontello](http://fontello.com/)
-   After making changes, download zip and extract `font` folder into the uikit [font](./packages/uikit/fonts/)
-   Replace the [font configuration](./packages/uikit/fonts/config.json) with the new one
-   `npm run updateFonts` and commit changes

## Contributing

This monorepo is managed with `yarn workspaces`. If you do not have `yarn` installed already then you will need to install it globally

```bash
npm i -g yarn
```

Install the dependencies

```bash
yarn install
```

Run the development server. Once running, it can be located at [http://localhost:8000](http://localhost:8000)

```bash
yarn start
```

Once the code has been merged into `master`, then you will need to publish the package to `npm`

```bash
yarn release
```

With the code published and the changes in GitHub, we will then need to deploy to `gh-pages`

```bash
yarn deploy
```

## Disclaimer

Open source software components distributed or made available in the Availity Materials are licensed to Company under the terms of the applicable open source license agreements, which may be found in text files included in the Availity Materials.

## License

[MIT](./LICENSE)
