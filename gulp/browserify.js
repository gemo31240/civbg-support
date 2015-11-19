'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var _ = require('lodash');
var $ = require('gulp-load-plugins')();

module.exports = function(options) {
  var browserifyOptions = {
    entries: '.tmp/app.js',
    cache: {},
    packageCache: {},
    plugin: [watchify]
  };

  gulp.task('browserify', function () {
    return browserify(browserifyOptions)
      .bundle()
      .on('error', options.handleErrors('browserify'))
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('.tmp'))
      .pipe(browserSync.reload({stream: true}));
  });
};
