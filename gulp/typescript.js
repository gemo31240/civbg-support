'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')();

module.exports = function (options) {
  gulp.task('ts:compile', function () {
    var project = $.typescript.createProject('tsconfig.json');

    return gulp.src(options.globs.appWithDefinitions)
      .pipe($.plumber())
      .pipe($.typescript(project))
      .js
      //.pipe(isDist ? $.concat('app.js') : $.util.noop())
      .pipe($.ngAnnotate({gulpWarnings: false}))
      //.pipe(isDist ? $.uglify() : $.util.noop())
      .pipe($.wrap('(function(){<%= contents %>}());'))
      //.pipe($.wrap({ src: './iife.txt'}))
      .pipe(gulp.dest('.tmp'));
  });
};
