'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');
var util = require('util');
var middleware = require('./proxy');

module.exports = function(options) {

  function browserSyncInit(baseDir, browser) {
    browser = browser === undefined ? 'default' : browser;

    var routes = null;
    if(baseDir === options.paths.src || (util.isArray(baseDir) && baseDir.indexOf(options.paths.src) !== -1)) {
      routes = {
        '/node_modules': 'node_modules'
      };
    }

    var server = {
      baseDir: '.tmp',
      routes: routes
    };

    if(middleware.length > 0) {
      server.middleware = middleware;
    }

    browserSync.instance = browserSync.init({
      browser: browser,
      ghostMode: false,
      notify: false,
      open: false,
      server: server,
      startPath: '/'
    });
  }

  browserSync.use(browserSyncSpa({
    selector: '[ng-app]'// Only needed for angular apps
  }));

  //gulp.task('serve', ['watch'], function () {
  gulp.task('serve', ['build', 'html','watch'], function () {
    browserSyncInit([options.paths.tmp + '/serve', options.paths.src]);
  });

  gulp.task('serve:dist', ['build'], function () {
    browserSyncInit(options.paths.dist);
  });
};
