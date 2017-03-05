var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");

//building js with dependencies by webpack
gulp.task("default", function(callback) {

	gutil.log("[mocha]", 'test before building');
	gulp.start('test');

	webpack(require('./webpack.config.js'), 
		function(err, stats) {

			if(err) 
				throw new gutil.PluginError("webpack", err);

			gutil.log("[webpack]", stats.toString({}));

			callback();
		}
	);
});

require('gulp-npm-test')(gulp, {
	withoutNpmRun: false
});