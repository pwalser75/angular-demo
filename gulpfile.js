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

gulp.task('connect', function () {
	connect.server({
		root: 'build',
		port: 4000
	})
})

var bundler = watchify(browserify('./src/web/index.js', { debug: true }).transform(babel));

function cleanTarget() {
	return gulp.src('build', {read: false})
		.pipe(clean());
}
function compile() {
	return bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'));
}

function copyResources() {
	return gulp.src([
			'src/web/**/*.html', 
			'src/web/**/*.jpg', 
			'src/web/**/*.png',
			'src/web/**/*.css'
		]).pipe(gulp.dest('build'));
}

function watch() {
	bundler.on('update', function() {
		console.log('-> bundling...');
		compile();
	});
	gulp.watch(['./src/web/*.html','src/web/images/**/*.*'], ['copyResources']);
};

gulp.task('clean', function() { return cleanTarget(); });
gulp.task('compile', function() { return compile(); });
gulp.task('copyResources', function() { return copyResources(); });
gulp.task('watch', function() { return watch(); });

gulp.task('build', ['clean','compile','copyResources']);
gulp.task('default', ['build', 'watch', 'connect']);