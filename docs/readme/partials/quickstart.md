+ Install the Availity UIKit with Bower.

>
```bash
$ bower install availity-uikit --save
```

+ Include the required libraries is your `index.html`

>
```html
<!-- place in header -->
<link rel="stylesheet" href="//bower_components/availity-uikit/dist/availity-uikit.min.css"/>
<!-- place before closing body tag -->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.js"></script>
<script src="//bower_components/availity-uikit/dist/js/availity-uikit.min.js"></script>
```

### Directory Layout

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
