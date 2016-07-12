'use strict';

const gulp = require('gulp');  // Base gulp package
const clean = require('gulp-clean');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps'); 
const babelify = require('babelify'); 
const browserify = require('browserify');
const watchify = require('watchify');
const merge = require('utils-merge'); 
const source = require('vinyl-source-stream'); 
const buffer = require('vinyl-buffer');
const concatcss = require('gulp-concat-css');
const browserSync = require('browser-sync').create();
const url = require('url');
const proxy = require('proxy-middleware');

// Configuration
const config = {
	source: './src/web',
	target: './build/',
	javascriptSource: 'index.js',
	javascriptTarget: 'build.js',
	cssTarget: 'style.css',
	proxy: {
		url: 'http://localhost:8080/contacts/api',
		route: '/api'
	}
}
const sourceTypes=['js','json'];
const stylesheetTypes=['css', 'scss'];
const staticTypes=['html','jpg','png','svg','woff','woff2'];

function fileTypeMatcher(fileSuffixArray) {
	return fileSuffixArray.map(type=> config.source+'/**/*.'+type);
}

// clean build target
function cleanTarget() {
	return gulp.src(config.target, {read: false}).pipe(clean());
}

// copy static resources
function copyStatic() {
	return gulp.src(fileTypeMatcher(staticTypes))
		.pipe(gulp.dest(config.target));
}

// compile style sheets
function compileStylesheets() {
  return gulp.src(fileTypeMatcher(stylesheetTypes))
    .pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer())
	.pipe(concatcss(config.cssTarget))
    .pipe(gulp.dest(config.target));
}

// Completes the final file outputs
function bundle() {
	
	var args = merge(watchify.args, { debug: true }); // Merge in default watchify args with browserify arguments
  
	var bundler = browserify(config.source+'/'+config.javascriptSource, args) // Browserify
    .transform(babelify, {presets: ['es2015', 'react']}); // Babel tranforms

	return bundler
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
	copyStatic();
	compileStylesheets();
	bundle();
});

gulp.task('watch', ['build'], function() { 
	
	gulp.watch(fileTypeMatcher(staticTypes),function() {
		copyStatic()
			.pipe(browserSync.stream())
			.pipe(notify({message: 'Updated resources', onLast: true }));
	});
	gulp.watch(fileTypeMatcher(stylesheetTypes),function() {
		compileStylesheets()
			.pipe(browserSync.stream())
			.pipe(notify({message: 'Updated stylesheets', onLast: true }));
	});
	gulp.watch(fileTypeMatcher(sourceTypes),function() {
		bundle()
			.pipe(notify({message: 'Updated sources', onLast: true }));
	});
});

gulp.task('server', ['watch'], function() {
	
	var proxyOptions = url.parse(config.proxy.url);
    proxyOptions.route = config.proxy.route;

	browserSync.init({
		server: {
			baseDir: config.target,
			middleware: [proxy(proxyOptions)]
		}
	});
});

gulp.task('default', ['server']);
