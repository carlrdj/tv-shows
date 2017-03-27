var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babel = require('babelify');
var watchify = require('watchify');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
	browserSync.init({
		server:{
			baseDir: './dist'
		}
	});
});

gulp.task('sass', function () {
	gulp
	.src('./index.scss')
	.pipe(sass())
	.pipe(rename('app.css'))
	.pipe(gulp.dest('./dist/css'))
	.pipe(browserSync.stream());
});

gulp.task('styles', function () {
	gulp.watch('./index.scss', ['sass']);
	gulp.watch('./dist/index.html').on('change', browserSync.reload);
});

gulp.task('html', function () {
	gulp
	.src('./index.html')
	.pipe(gulp.dest('./dist'));
});

gulp.task('index', function () {
	gulp.watch('./index.html', ['html']);
	gulp.watch('./dist/index.html').on('change', browserSync.reload);
});

gulp.task('images', function () {
	gulp
	.src('./assets/images/*')
	.pipe(gulp.dest('./dist/images'));
});

/*
gulp.task('bundle', function () {
	browserify('./src/index.js', {debug: true})
	.transform(babel, {presets: ['es2015']})
	.bundle()
	.pipe(source('index.js'))
	.pipe(rename('app.js'))
	.pipe(gulp.dest('./dist/js'))
	.pipe(browserSync.stream())
})


gulp.task('scripts', function () {
	gulp.watch(['./src/*.js', './header/*.js'], ['bundle']);
	gulp.watch('./dist/index.html').on('change', browserSync.reload)
});
*/

function compile(watch) {
	var bundle = browserify('./src/index.js', {debug: true});
	if (watch) {
		bundle = watchify(bundle);
		bundle.on('update', function () {
			console.log('Bundling ...');
			rebundler();
		})
	}
	function rebundler() {
		bundle
		.transform(babel, {presets: ['es2015']})
		.bundle()
		.pipe(source('index.js'))
		.pipe(rename('app.js'))
		.pipe(gulp.dest('./dist/js'));
	}
	rebundler();
}

gulp.task('build', function () { return compile(false)});
gulp.task('watch', function () { return compile(true)});
gulp.task('default', ['html', 'index', 'sass', 'styles', 'images', 'build', 'browser-sync']);