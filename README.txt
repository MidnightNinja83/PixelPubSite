Getting Started PixelPubSite:

http://keystonejs.com/getting-started/

1) Install both the latest version of node.js and MongoDB (community)

2) Install yeoman: http://yeoman.io/codelab/setup.html

3) follow instructions to install site: http://keystonejs.com/getting-started/

4) Follow directions for mongoDB: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

5) The project uses browserify good documentation on how to setup up browserify modules: https://spapas.github.io/2015/05/27/using-browserify-watchify/

6) If you get issues installing all of the packages (npm install) try the following
	npm install --global --production windows-build-tools
	npm install --global node-gyp
	download the https://slproweb.com/download/Win64OpenSSL-1_0_2n.exe

in the public\js\browserify directory, run the following:
watchify src/main.js -o dist/bundle.js -v

Start Local:

"<path>\mongod.exe" --dbpath <path>\data

> "D:\DevSpace\bin\mongod.exe" --dbpath d:\DevSpace\mongodb\data

> nav to project folder > node keystone

Start server:

navigate to PixelPubSite folder

forever start keystone.js

Since you are most likely developing on a windows platform:

https://www.npmjs.com/package/npm-windows-upgrade

It is good to read up on this windows upgrade tool