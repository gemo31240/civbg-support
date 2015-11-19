'use strict';

var gulp = require('gulp');
var series = require('run-sequence');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'uglify-save-license', 'del']
});

module.exports = function (options) {
  gulp.task('build', function () {
    series('ts:compile', 'browserify', 'inject', 'assets');
  });

  gulp.task('inject', function () {
    var injectStyles = gulp.src([
      options.paths.tmp + '/serve/app/**/*.css',
      '!' + options.paths.tmp + '/serve/app/vendor.css'
    ], {read: false});

    var injectScripts = gulp.src([
      options.paths.tmp + '/bundle.js'
      //'!' + options.paths.src + '/app/**/*.spec.js',
      //'!' + options.paths.src + '/app/**/*.mock.js'
    ], {read: false});

    var injectOptions = {
      ignorePath: [options.paths.src, options.paths.tmp],
      addRootSlash: false
    };

    return gulp.src(options.paths.src + '/*.html')
      .pipe($.inject(injectStyles, injectOptions))
      .pipe($.inject(injectScripts, injectOptions))
      .pipe(gulp.dest(options.paths.tmp));
  });

  gulp.task('html', function () {
    return gulp.src(options.globs.html, {base: 'src'})
      .pipe(gulp.dest(options.paths.tmp));
  });

  gulp.task('assets', function () {
    return gulp.src(options.globs.assets, {base: 'src'})
      .pipe(gulp.dest(options.paths.tmp));
  });
};
