var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');
var webpack_config = require('./webpack.config.js');

gulp.task('copy', function() {
  gulp.src(['./src/views/layouts/**/*.html'])
      .pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
  gulp.src(['./src/styles/layouts/**/*.scss'])
      .pipe(sass())
      .pipe(gulp.dest('dist'));
});

gulp.task('webpack', function() {
  gulp.src(['./src/views/**/*.js', './src/views/**/*.jsx'])
      .pipe(webpack(webpack_config))
      .pipe(gulp.dest('dist'));
});

gulp.task('build', ['copy', 'sass', 'webpack']);

gulp.task('watch', function() {
  gulp.watch(['./src/views/**/*.html'], ['copy']);
  gulp.watch(['./src/styles/**/*.scss'], ['sass']);
  gulp.watch(['./src/views/**/*.js', './src/views/**/*.jsx'], ['webpack']);
});

