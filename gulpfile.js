var gulp = require('gulp')
var sass = require('gulp-sass')
var connect = require('gulp-connect')
var browserify = require('browserify')
var source = require('vinyl-source-stream')

gulp.task('connect', function () {
	connect.server({
		root: 'build',
		port: 4000
	})
})

gulp.task('browserify', function() {
    return browserify('src/web/app.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('build'));
})

gulp.task('copy-static', function() {
    gulp.src([
		'src/web/**/*.html', 
		'src/web/**/*.jpg', 
		'src/web/**/*.png'
	]).pipe(gulp.dest('build'));
})

gulp.task('watch', function() {
	gulp.watch('src/web/**/*.js', ['browserify']);
	gulp.watch(['src/web/*.html','src/web/images/**/*.*'], ['copy-static']);
})

gulp.task('build', ['copy-static','browserify'])

gulp.task('default', ['build', 'connect', 'watch'])
