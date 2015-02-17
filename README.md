# availity-uikit

> Availity UI Kit powered by Bootstrap 3

## Table of Contents
* [Intro](#intro)
* [Quickstart](#quickstart)
* [Authors](#authors)
* [License](#license)


## Intro
Availity UIKit is based on [Boostrap 3](http://getbootstrap.com/) with overrides to match our style guidelines.


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
├── /node_modules/              # 3rd-party libraries and utilities
├── /fonts/                     # Icon fonts and web text fonts
├── /images/                    # Graphics (.png, .jpg, .svg etc.)
├── /gulp/                      # Gulp tasks and utility classes
│── gulpfile.js                 # Configuration file for automated builds
│── bower.json                  # Bower list of 3rd party libraries
└── package.json                # NPM list of 3rd party libraries and utilities
```


## Authors

**Robert McGuinness**
+ [rob.mcguinness@availity.com](rob.mcguinness@availity.com)

**Robert Ventrone**
+ [robert.ventrone@availity.com](robert.ventrone@availity.com)

**Robert Warner**
+ [rob.warner@availity.com](rob.warner@availity.com)



## License
Copyright (c) 2015 Availity, LLC
Released under the MIT license