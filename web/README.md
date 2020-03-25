# The front-end

## Overview

Welcome to the `web` workspace. This is the codebase for the website users will see when they visit https://digitalhumanities.mit.edu.

This website uses the following technologies, methodologies, and libraries:

- [Eleventy](https://11ty.dev) for static site generation with [Liquid](https://shopify.github.io/liquid/) templates.
- [Webpack](https://webpack.js.org/) for bundling our app during development and in production
- Utility-first [SCSS](https://sass-lang.com/) via [wool](https://github.com/selfawarestudio/wool/)
- [autoprefixer](https://autoprefixer.github.io/) and [cssnano](https://cssnano.co/) [postcss](https://postcss.org/) plugins for further style optimizations
- [PurgeCSS](https://purgecss.com/) to remove unused styles from the production CSS bundle
- PJAX page navigation via [Highway.js](https://highway.js.org/)
- [GSAP](https://greensock.com/docs/v3) for animations
- [picoapp](https://github.com/estrattonbailey/picoapp) for managing JS modules across PJAX page transitions
- [Babel](https://babeljs.io/) to transpile modern JS syntax into ES5 for wider browser support
- [Terser](https://terser.org/) for minimizing the Javascript bundle for production

## Project Structure

```sh
├── src
│   ├── assets # fonts, favicons, etc.
│   ├── data # eleventy global data files
│   ├── scripts # javascript
│   │   ├── components # picoapp components
│   │   ├── lib # custom modules
│   │   ├── transitions # highway.js page transitions
│   │   ├── util # shared utilities
│   │   ├── app.js # picoapp setup
│   │   ├── index.js # (entry) add listeners and mount app
│   │   └── router.js # highway.js setup
│   ├── styles # scss
│   ├── templates # liquid templates
│   └── util # build-time utilities
├── README.md # you're currently reading me
├── package.json
└── webpack.config.js # webpack configuration
```
