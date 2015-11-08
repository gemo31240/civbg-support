// Karma configuration
// Generated on Sat Nov 07 2015 19:49:57 GMT+0900 (JST)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'mocha'],


    // list of files / patterns to load in the browser
    files: [
      '.tmp/bundle.js',
      'node_modules/power-assert/build/power-assert.js',
      //{pattern: 'src/*.ts', included: false},
      //{pattern: 'src/**/*.ts', included: false},
      {pattern: 'src/**/*.spec.ts', included: false}
      //{pattern: '.tmp/bundle.js', included: true},
      //{pattern: 'src/**/*.spec.js', included: false}
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.ts': ['browserify']
      //'src/**/*.ts': ['browserify']
    },


    browserify: {
      debug: true,
      plugin: [
        ['tsify', {target: 'ES5'}]
      ],
      //transform: [
        //['tsify', {target: 'ES5'}]
        //['babelify', {presets: ['es2015']}],
        //'espowerify'
      //]
    },

    //plugins: [
    //  'karma-mocha',
    //  'karma-browserify',
    //  'karma-phantomjs-launcher',
    //  'karma-ng-html2js-preprocessor'
    //],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    //browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  })
};