Getting Started PixelPubSite:

http://keystonejs.com/getting-started/

1) Install both the latest version of node.js and MongoDB (community)

2) Install yeoman: http://yeoman.io/codelab/setup.html

3) follow instructions to install site: http://keystonejs.com/getting-started/

4) Follow directions for mongoDB: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

5) The project uses browserify good documentation on how to setup up browserify modules: https://spapas.github.io/2015/05/27/using-browserify-watchify/

in the public\js\browserify directory, run the following:
watchify src/main.js -o dist/bundle.js -v


Start server:

navigate to PixelPubSite folder

forever start keystone.js

Since you are most likely developing on a windows platform:

https://www.npmjs.com/package/npm-windows-upgrade

It is good to read up on this windows upgrade tool