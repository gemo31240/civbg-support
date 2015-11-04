'use strict';

import {appName} from '../../../constants';

export default class NavbarComponent implements ng.IDirective {
  restrict = 'E';
  scope = {};
  controller = NavbarController;
  controllerAs = 'ctrl';
  templateUrl = 'app/components/navbar/navbar.html';
}

export class NavbarController {
  //public static $inject = ['$modal', 'Player'];

  $modal: ng.ui.bootstrap.IModalService;

  constructor($modal: ng.ui.bootstrap.IModalService) {
    this.$modal = $modal;
    //this.Players = Players;
  }

  newGame() {
    var modalInstance = this.$modal.open({
      animation: true,
      templateUrl: 'app/components/dialogs/newGame.html',
      controller: 'NewGameController',
      controllerAs: 'ctrl'
    });

    modalInstance.result.then((colors) => {
      //this.Players.start(colors);
    });
  }
}

angular.module(appName).directive('navbar', () => new NavbarComponent);
