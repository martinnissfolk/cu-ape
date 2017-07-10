## Scribble canvas

A demo of HTML5 Canvas and Typescript.

### Installation

First install the necessary dependencies:

    npm install

To build and run using webpack-dev-server (this starts a Node.js Express server. Go to localhost:8080/ to launch the app. The transpiled script will be bundled and served from memory at localhost:8080/build/bundle.js):

    npm start

...or without the express server manually (open index.html and it will in point to the bundle.js written to disk in the build folder):

    npm run build