var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var exec = require('gulp-exec');

//building js with dependencies by webpack
gulp.task("default", function(callback) {

	gulp.start('test');

	webpack(require('./webpack.config.js'), 
		function(err, stats) {

			if(err) 
				throw new gutil.PluginError("webpack", err);

			gutil.log("[webpack]", stats.toString({}));

			callback();
		}
	);

	gulp.src("./src/*.js")
		.pipe(exec('jsdoc src/ -r -t /usr/local/lib/node_modules/docdash/ -d doc'))
});

require('gulp-npm-test')(gulp, {
	withoutNpmRun: false
});