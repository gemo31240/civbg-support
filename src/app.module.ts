'use strict';

import * as angular from 'angular';
import * as ngRoute from 'angular-route';
import * as uiBootstrap from 'angular-ui-bootstrap';
import {appName} from './constants';

angular.module(appName, [
  ngRoute,
  uiBootstrap
  //'ngAnimate',
  //'ngCookies',
  //'ngTouch',
  //'ngSanitize',
  //'ngResource',
  //'ui.router',
  //'ui.bootstrap',
  //'firebase'
]);