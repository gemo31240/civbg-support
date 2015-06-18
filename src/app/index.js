'use strict';

import MainController from './main/main.controller';
import NavbarController from './components/navbar/navbar.controller';
import TechTreeController from './components/techTree/techTree.controller';
import {ArmsInfoController, ArmsDropdownDirective} from './components/armsInfo/armsInfo.controller';
import NewGameController from './components/dialogs/newGame.controller';

import Players from './services/players';
import Tech from './services/tech';
import Firebase from './services/firebase';

angular.module('civbgSupport', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ui.router',
  'ui.bootstrap',
  'firebase'
])
  .constant('Tech', Tech)
  .service('Players', Players)
  .service('FireBase', Firebase.instance)
  .controller('MainController', MainController)
  .controller('NavbarController', NavbarController)
  .controller('TechTreeController', TechTreeController)
  .controller('ArmsInfoController', ArmsInfoController)
  .controller('NewGameController', NewGameController)
  .directive('armsDropdown', ArmsDropdownDirective.activate)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      });

    $urlRouterProvider.otherwise('/');
  })
;
