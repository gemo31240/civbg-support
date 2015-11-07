'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var $ = require('gulp-load-plugins')();

module.exports = function(options) {
  gulp.task('styles', function () {
    var sassOptions = {
      style: 'expanded'
    };
    var injectFiles = gulp.src(options.globs.sass, { read: false });
    var injectOptions = {
      transform: function(filePath) {
        filePath = filePath.replace(options.src + '/app/', '');
        return '@import \'' + filePath + '\';';
      },
      starttag: '// injector',
      endtag: '// endinjector',
      addRootSlash: false
    };
    var indexFilter = $.filter('index.scss');
    var vendorFilter = $.filter('vendor.scss');
    return gulp.src([
      options.paths.src + '/styles/index.scss',
      options.paths.src + '/styles/vendor.scss'
    ])
      .pipe(indexFilter)
      .pipe($.inject(injectFiles, injectOptions))
      .pipe(indexFilter.restore())
      .pipe(vendorFilter)
      .pipe(vendorFilter.restore())
      .pipe($.sourcemaps.init())
      .pipe($.sass(sassOptions)).on('error', options.handleErrors('Sass'))
      .pipe($.autoprefixer()).on('error', options.handleErrors('Autoprefixer'))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(options.paths.tmp))
      .pipe(browserSync.reload({ stream: true }));
  });
};
