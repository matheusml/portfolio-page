var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var connect = require('gulp-connect');

gulp.task('default', ['connect', 'watch', 'build']);
gulp.task('build', ['css']);

gulp.task('files', function() {
  	gulp.src('public/**/*').pipe(connect.reload());
});

gulp.task('watch', function() {
  	gulp.watch(['public/**/*', '!public/dist/*'], ['build', 'files']);
});

gulp.task('connect', function() {
  	connect.server({ root: 'public', livereload: true });
});

gulp.task('js', function() {
    return gulp.src(['public/js/**/*.js'])
        .pipe(concat('bundle.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'));
});

gulp.task('css', function(){
    return gulp.src(['public/css/bootstrap.min.css',
                     'public/css/*.css'])
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('public/dist'))
});