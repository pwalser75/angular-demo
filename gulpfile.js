/*
	AngularJS Demo Project
	======================
	
	Uses:
		sourcemaps (http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/)

*/

const gulp = require('gulp');
const clean = require('gulp-clean');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babel = require('babelify');
const sass = require('gulp-sass')
const connect = require('gulp-connect')

// build parameters

const sourceDir='src/web';
const targetDir='build';
const staticResourceTypes=['html','css','jpg','png'];
	
// build functions

var bundler = watchify(browserify(sourceDir+'/index.js', { debug: true }).transform(babel, {presets: ['es2015']}));
var staticTypeMatchers=staticResourceTypes.map(type=> sourceDir+'/**/*.'+type);

function cleanTarget() {
	return gulp.src(targetDir, {read: false}).pipe(clean());
}
function compile() {
	return bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(targetDir));
}

function copyResources() {
	return gulp.src(staticTypeMatchers)
		.pipe(gulp.dest(targetDir));
}

function watch() {
	bundler.on('update', function() {
		log('changes detected, bundling...');
		compile();
	});
	gulp.watch(staticTypeMatchers,function() {
		log('changes detected, copying static resources...');
		copyResources();
	});
};

function startServer() {
	connect.server({
		root: targetDir,
		port: 4000
	})
}

function log(message) {
	var date=new Date();
	var pad= x=> x<10? '0'+x:x;
	var time=pad(date.getHours())+':'+pad(date.getMinutes())+':'+pad(date.getSeconds());
	console.log('['+time+'] '+message);
}

// build tasks

gulp.task('watch', function() { return watch(); });
gulp.task('startServer', function() { return startServer(); });
gulp.task('build', function(){
	clean();
	compile();
	copyResources();
});
gulp.task('default', ['build', 'watch', 'startServer']);