'use strict';

const gulp = require('gulp');  // Base gulp package
const clean = require('gulp-clean');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps'); 
const babelify = require('babelify'); 
const browserify = require('browserify');
const watchify = require('watchify');
const merge = require('utils-merge'); 
const source = require('vinyl-source-stream'); 
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');

// Configuration
const config = {
	source: './src/web',
	target: './build/',
	javascriptSource: 'index.js',
	javascriptTarget: 'build.js'
}
const sourceTypes=['js','json'];
const resourceTypes=['html','css','jpg','png'];

function fileTypeMatcher(fileSuffixArray) {
	return fileSuffixArray.map(type=> config.source+'/**/*.'+type);
}

// clean build target
function cleanTarget() {
	return gulp.src(config.target, {read: false}).pipe(clean());
}

// copy static resources
function copyResources() {
	return gulp.src(fileTypeMatcher(resourceTypes))
		.pipe(gulp.dest(config.target));
}

// Completes the final file outputs
function bundle() {
	
	var args = merge(watchify.args, { debug: true }); // Merge in default watchify args with browserify arguments
  
	var bundler = browserify(config.source+'/'+config.javascriptSource, args) // Browserify
    .transform(babelify, {presets: ['es2015', 'react']}); // Babel tranforms

	bundler
		.bundle()
		.pipe(source(config.javascriptSource)) 
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(buffer())
		.pipe(rename(config.javascriptTarget))
		.pipe(sourcemaps.init({loadMaps: true})) 
		.pipe(uglify())
		.pipe(sourcemaps.write('./map'))
		.pipe(gulp.dest(config.target)); 
}

gulp.task('clean', function() { return cleanTarget(); });
gulp.task('build', ['clean'], function(){
	copyResources();
	bundle();
});
gulp.task('watch', ['build'], function() { 

	gulp.watch(fileTypeMatcher(sourceTypes),function() {
		bundle();
		gulp.src('').pipe(notify('Updated sources'));
	});
	gulp.watch(fileTypeMatcher(resourceTypes),function() {
		copyResources();
		gulp.src('').pipe(notify('Updated resources'));
	});
});
gulp.task('server', ['watch'], function() {
	
	browserSync.init([], {
      server: {
         baseDir: config.target
      }
   });
});
gulp.task('default', ['server']);
