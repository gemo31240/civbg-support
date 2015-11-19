'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var series = require('run-sequence');
var watch = require('gulp-watch');

function isOnlyChange(event) {
  return event.type === 'changed';
}

module.exports = function (options) {
  gulp.task('watch', ['styles', 'build'], function () {
    //gulp.watch(options.globs.appWithDefinitions, series(['ts:compile', 'browserify']));
    watch(options.globs.app, function () {
      series('ts:compile', 'browserify', 'inject');
    });

    watch(options.globs.html, function () {
      series('styles', 'build', 'html');
    });

    watch(options.globs.sass, function () {
      series('styles');
    });
  });

  //gulp.task('watch', ['scripts:watch', 'inject'], function () {
  //
  //  gulp.watch([options.src + '/*.html', 'bower.json'], ['inject']);
  //
  //  gulp.watch([
  //    options.src + '/app/**/*.css',
  //    options.src + '/app/**/*.scss'
  //  ], function(event) {
  //    if(isOnlyChange(event)) {
  //      gulp.start('styles');
  //    } else {
  //      gulp.start('inject');
  //    }
  //  });
  //
  //
  //  gulp.watch(options.src + '/app/**/*.html', function(event) {
  //    browserSync.reload(event.path);
  //  });
  //});
};
