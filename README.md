# availity-uikit

> Availity UI Kit powered by Bootstrap 3 and sprinkles of 4

## Table of Contents
* [Intro](#intro)
* [Demo](#demo)
* [Supported Browsers](#supported-browsers)
* [Quickstart](#quickstart)
* [Icon Fonts](#icon-fonts)
* [Authors](#authors)
* [Disclaimer](#disclaimer)
* [License](#license)

## Intro

Availity UIKit is based on [Bootstrap 3](http://getbootstrap.com/) with overrides to match our style guidelines.


## Demo

[http://availity.github.io/availity-uikit]( http://availity.github.io/availity-uikit)


## Supported Browsers

* Internet Explorer 9+
* Google Chrome > 1% market share
* Mozilla Firefox > 1% market share

> Internet Explorer 9 and below requires a CSS post processor in order to get circumvent the 4095 limit on selector on style sheets 

* [gulp-bless](https://github.com/BlessCSS/gulp-bless)
* [bless.js](https://github.com/BlessCSS/bless)
* [grunt-bless](https://github.com/BlessCSS/grunt-bless) 

## Quickstart

+ Install the Availity UIKit with Bower

>
```bash
$ bower install availity-uikit --save
```

**OR**

+ Install the Availity UIKit with npm

>
```bash
$ npm install availity-uikit --save
```

+ Include the required libraries is your `index.html`

#### Directory Layout

>
```
.
├── /build/                     # The folder for compiled docs
├── /dist/                      # CSS style sheets and Javascript ready for distribution
├── /docs/                      # Raw documentation assets for README.md and style guide
├── /node_modules/              # npm 3rd-party libraries and utilities
├── /bower_components/          # bower 3rd-party libraries and utilities
├── /js/                        # Javascript source files
├── /fonts/                     # Icon fonts and web text fonts
├── /less/                      # Less source files
├── /images/                    # Graphics (.png, .jpg, .svg etc.)
├── /gulp/                      # Gulp tasks and utility classes
│── gulpfile.js                 # Configuration file for automated builds
│── bower.json                  # Bower list of 3rd party libraries
└── package.json                # NPM list of 3rd party libraries and utilities
```

## Icon Fonts
Availity uses [Fontello](http://fontello.com/) to manage the UIKit icon fonts (glyphicons).  Our font configuration can be found in the [config.json](./fonts/config.json). The UIKit currently uses icon fonts from the following libraries:

+ [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
+ [Typicons](http://typicons.com/)
+ [Elusive Icons](http://elusiveicons.com/)

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
Copyright (c) 2015 Availity, LLC
