'use strict';

import {directive, inject} from '../../../app.decorators';
import NewGameDialogSetting from '../newGameDialog/newGameDialog';

@directive('navbar')
class NavbarComponent implements ng.IDirective {
  restrict = 'E';
  scope = {};
  controller = NavbarController;
  controllerAs = 'ctrl';
  templateUrl = 'app/components/navbar/navbar.html';
}

@inject('$uibModal')
export class NavbarController {
  constructor(private $modal: ng.ui.bootstrap.IModalService) {
    //this.Players = Players;
  }

  newGame() {
    var modalInstance = this.$modal.open(NewGameDialogSetting);
    //var modalInstance = this.$modal.open({
    //  animation: true,
    //  templateUrl: 'app/components/dialogs/newGame.html',
    //  controller: 'NewGameController',
    //  controllerAs: 'ctrl'
    //});
    modalInstance.result.then((colors) => {
      console.log(colors);
      //this.Players.start(colors);
    });
  }
}

export default NavbarComponent;
