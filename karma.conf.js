// Karma configuration
// Generated on Sat Nov 07 2015 19:49:57 GMT+0900 (JST)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/jquery/dist/jquery.js',
      'src/app.ts',
      {pattern: 'src/**/*.html', included: true},
      {pattern: 'test/**/*.js', included: false},
      {pattern: 'src/**/*.spec.js', watched: false, included: true, served: true}
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.html': ['ng-html2js'],
      'src/**/*.ts': ['browserify'],
      'src/**/*.js': ['browserify'],
      'test/**/*.js': ['browserify']
    },


    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'templates'
    },


    browserify: {
      debug: true,
      //bundleDelay: 1000,
      plugin: [
        ['watchify'],
        ['tsify', {target: 'ES5'}]
      ],
      transform: [
        ['babelify', {presets: ['es2015'], plugins: ['babel-plugin-espower']}]
      ]
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


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
    singleRun: false
  })
};
