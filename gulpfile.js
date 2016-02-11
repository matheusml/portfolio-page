var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var connect = require('gulp-connect');
var files = ['public/index.html'];

gulp.task('files', function() {
  gulp.src(files).pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(files, ['files']);
});

gulp.task('connect', function() {
  connect.server({ root: 'public', livereload: true });
});

gulp.task('default', ['connect', 'watch']);
