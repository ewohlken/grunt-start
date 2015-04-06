#Grunt-start

This is a basic boilerplate for local front-end development workflow that utilizes Grunt and Compass.

## NodeJs Dependencies
This boilerplate relies on some [NodeJs](http://nodejs.org) libraries. Use the installer on the site.

**Install the following items with Node before continuing.**

* [Compass](http://compass-style.org): A CSS authoring framework that uses Sass. Run `[sudo] gem install compass`
* [Sass-globbing](https://rubygems.org/gems/sass-globbing):Allows the use of globbing in Sass import directives Run `[sudo] gem install sass-globbing`
* [Grunt](http://gruntjs.com): The javascript task runner. Run `[sudo] npm install -g grunt-cli`
* [grunt-matchdep](https://www.npmjs.com/package/matchdep): Uses globule to filter npm module dependencies by name.

### Grunt libraries

**To locally install grunt and all of these dependencies automatically, navigate to the root of the repo you cloned and run `[sudo] npm install`**

* [grunt-contrib-compass](https://github.com/sindresorhus/grunt-contrib-compass): This task uses compass. If you'd like to switch the compiler to something you're more comfortable with, you'll have to update the GruntFile
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch): Runs predefined tasks whenever a watched file or file patterns are added, changed or deleted.
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify): Compresses JS code based on a number of configurable options
* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint): Runs JShint tests on JS code
* [grunt-template](https://github.com/mathiasbynens/grunt-template): Preprocesses HTML files and replaces variables in the code with data from a JSON object
* [grunt-include](https://www.npmjs.com/package/grunt-prettify): Preprocesses HTML files and concatenates them together based on include calls written in html
* [grunt-http-server](https://www.npmjs.com/package/grunt-http-server): Runs an HTPP server on your local machine
* [grunt-ftp-deploy](https://www.npmjs.com/zonak/grunt-ftp-deply): Deploys local files to a remote host via FTP
* [grunt-sftp-deploy](https://github.com/thrashr888/grunt-sftp-deploy): Deploys local files to a remote host via SFTP
