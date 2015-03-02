# availity-uikit

[![Join the chat at https://gitter.im/Availity/availity-uikit](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Availity/availity-uikit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> Availity UI Kit powered by Bootstrap 3

## Table of Contents
* [Intro](#intro)
* [Quickstart](#quickstart)
* [Icon Fonts](#icon-fonts)
* [Authors](#authors)
* [Disclaimer](#disclaimer)
* [License](#license)


## Intro
Availity UIKit is based on [Bootstrap 3](http://getbootstrap.com/) with overrides to match our style guidelines.


## Quickstart
* Install the Availity UIKit with Bower.

>
```bash
$ bower install availity-uikit --save
```

or with NPM:


>```bash
$ npm install availity-uikit --save
```

* Include the required libraries is your `index.html`

>
```html
<!-- place in header -->
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/availity-uikit/0.0.1/css/availity-uikit.min.css"/>
<!-- place before closing body tag -->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/availity-uikit/0.0.1/js/availity-uikit.min.js"></script>
```

#### Directory Layout

>
```
.
├── /build/                     # The folder for compiled docs
├── /dist/                      # CSS style sheets and Javascript ready for distribution
├── /docs/                      # Raw documentation assets for README.md and style guide
├── /node_modules/              # npm 3rd-party libraries and utilities
├── /bower_components/          # bower 3rd-party libraries and utilities
├── /fonts/                     # Icon fonts and web text fonts
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



## Disclaimer
Open source software components distributed or made available in the Availity Materials are licensed to Company under the terms of the applicable open source license agreements, which may be found in text files included in the Availity Materials.


## License
Copyright (c) 2015 Availity, LLC
Released under the MIT license