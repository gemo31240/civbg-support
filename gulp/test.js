'use strict';

var fs = require('fs');
var lodash = require('lodash');
var karma = require('karma').server;
var karmaConf = require('../karma.conf.js');
var running = false;

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var paths = gulp.paths;
var cached = false;

module.exports = function(options) {
  function hideStartingAndFinishedLog() {
    if (console.log.__patched) {
      return;
    }

    var console_log = console.log;
    console.log = function () {
      var args = Array.prototype.slice.call(arguments);
      if (args.length) {
        if (/^\[\u001b\[90m\d{2}:\d{2}:\d{2}\u001b\[39m\]$/.test(args[0]) &&
          (args[1] === 'Starting' || args[1] === 'Finished')) {
          return;
        }
      }
      return console_log.apply(console, args);
    };

    console.log.__patched = true;
  }

  function extractFiles() {
    var files;
    karmaConf({
      set: function (config) {
        files = config.files;
      }
    });
    return files;
  }

  function runTests(files, karmaOption, done) {
    if (running) {
      return;
    }

    var finished = function () {
      if (done) {
        done();
        done = null;
      }
      running = false;
    };

    karmaOption = lodash.merge(karmaOption || {}, {
      configFile: __dirname + '/../karma.conf.js',
      singleRun: 'run'
    });

    if (files) {
      karmaOption.files = files;
    }

    running = true;
    karma.start(karmaOption, finished);
  }

  function runTestsOnlyModified(files) {
    var includeFiles = lodash.chain(extractFiles())
      .filter(function (path) {
        // exclude *.spec.js files
        return path.indexOf('*.spec.js') === -1;
      })
      .value();

    var testFiles = lodash.chain(files)
      .map(function (filepath) {
        return (filepath.indexOf('.spec') === -1) ? filepath.replace('.js', '.spec.js') : filepath;
      })
      .filter(function (filepath) {
        return fs.existsSync(filepath);
      })
      .value();

    if (testFiles.length > 0) {
      runTests(includeFiles.concat(testFiles), {
        reporters: ['progress']
      });
    }
  }

  gulp.task('test-modified', function () {
    hideStartingAndFinishedLog();
    gulp.src([
      'app/**/*.js',
      'test/spec/**/*.js'
    ])
      .pipe($.cached('test'))
      .pipe($.util.buffer(function (err, files) {
        if (cached) {
          files = lodash.map(files, function (file) {
            return file.path;
          });
          runTestsOnlyModified(files);
        } else {
          cached = true;
        }
      }));
  });

  gulp.task('watch-test', function () {
    hideStartingAndFinishedLog();
    gulp.watch([
      paths.src + '/**/*.js'
    ], ['test-modified']);
  });

  gulp.task('test', function (done) {
    var testFiles = extractFiles();
    var config = {};

    karmaConf({
      set: function (_config_) {
        config = _config_;
      }
    });

    runTests(testFiles, {reporters: ['progress']}, done);
  });
};




