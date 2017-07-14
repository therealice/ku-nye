# Tibetan Ku Nye Massage

A Static website for https://kunye.netlify.com

## Requirements
* Node 7.8.0 (https://nodejs.org/)
* Yarn (https://yarnpkg.com/)

## Install
```
yarn
```

## Run in development
Start the dev server
```
yarn run start
```
Then open http://localhost:8080

## Build
The productions files will be placed in the **dist** folder.
```
yarn run build
```

## Deployment
The site is automatically built and deployed to netlify whenever the master branch in the repository is changed.

## Code

### CSS
The file critical.css is always inlined into the index.html file, while all other css files required are bundled as internal.css which is requested normally.

### Inline SVG
To inline SVG in index.html, write:
```
<%= require('!svg-inline-loader!./assets/<asset-file-name>') %>
```

## External resources

### Images
All jpegs should be compressed and be optimized as progressive jpegs. Use https://tinyjpg.com/ for compression and https://www.jpeg.io/ to get progressive jpegs.

### Social Icons
Are found on https://github.com/stephenhutchings/typicons.font/blob/master/src/svg/

### Performance Testing
* https://developers.google.com/speed/pagespeed/insights/
* https://www.webpagetest.org/