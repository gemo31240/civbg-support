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
var nodeResolve = require('resolve');

module.exports = function (options) {
  var browserifyOptions = {
    entries: '.tmp/app.js',
    cache: {},
    packageCache: {},
    plugin: [watchify]
  };

  function getNPMPackageIds() {
    // read package.json and get dependencies' package ids
    var packageManifest = {};
    try {
      packageManifest = require('../package.json');
    } catch (e) {
      // does not have a package.json manifest
      console.log('ERROR');
    }
    return _.keys(packageManifest.dependencies) || [];

  }

  gulp.task('browserify', ['browserify:app', 'browserify:vendor']);
  //gulp.task('browserify', function () {
  //  return browserify(browserifyOptions)
  //    .on('prebundle', function (bundle) {
  //      //getNPMPackageIds().forEach(function (id) {
  //      //  b.require(nodeResolve.sync(id), { expose: id });
  //      //});
  //      bundle.require('angular');
  //      bundle.require('jquery');
  //    })
  //    //.plugin(factor, {
  //    //  output: ['.tmp/app.bundle.js']
  //    //})
  //    .bundle()
  //    .on('error', options.handleErrors('browserify'))
  //    .pipe(source('bundle.js'))
  //    .pipe(buffer())
  //    .pipe(sourcemaps.init({loadMaps: true}))
  //    .pipe(sourcemaps.write('./'))
  //    .pipe(gulp.dest('.tmp'))
  //    .pipe(browserSync.reload({stream: true}));
  //});

  gulp.task('browserify:app', function () {
    var b = browserify(browserifyOptions);

    getNPMPackageIds().forEach(function (id) {
      b.external(nodeResolve.sync(id), {expose: id});
    });

    return b
      .bundle()
      .on('error', options.handleErrors('browserify'))
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('.tmp'))
    //.pipe(browserSync.reload({stream: true}));
  });

  gulp.task('browserify:vendor', function () {
    var b = browserify({debug: true});

    getNPMPackageIds().forEach(function (id) {
      b.require(nodeResolve.sync(id), {expose: id});
    });

    return b
      .bundle()
      .on('error', options.handleErrors('browserify'))
      .pipe(source('vendor.js'))
      //.pipe(buffer())
      //.pipe(sourcemaps.init({loadMaps: true}))
      //.pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('.tmp'));
  });
};
