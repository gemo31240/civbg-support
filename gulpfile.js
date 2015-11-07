'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var wrench = require('wrench');

var paths = {
  src: 'src',
  tmp: '.tmp'
};

var globs = {
  sass: ['src/app/**/*.scss'],
  html: ['src/index.html', 'src/**/*.html'],
  assets: 'src/assets/**/*.*',
  app: ['src/*.ts', 'src/app/**/*.ts', '!src/**/*.spec.ts'],
  // karma typescript preprocessor generates a bunch of .ktp.ts which gets picked
  // up by the watch, rinse and repeat
  appWithDefinitions: ['typings/**/*.ts', 'src/*.ts', 'src/app/**/*.ts', '!src/**/*.spec.ts', '!src/app/**/*.ktp.*'],
  integration: 'src/tests/integration/**/*.js',
  index: 'src/index.html'
};

var options = {
  globs: globs,
  paths: paths,
  handleErrors: function (title) {
    return function (err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  },
  wiredep: {
    directory: 'bower_components',
    exclude: [/bootstrap-sass-official\/.*\.js/, /bootstrap\.css/]
  }
};

wrench.readdirSyncRecursive('./gulp').filter(function (file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
  require('./gulp/' + file)(options);
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
