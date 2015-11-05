'use strict';

import * as angular from 'angular';
import {appName} from './constants';

angular.module(appName)
  .config(($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) => {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'app/pages/main/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
