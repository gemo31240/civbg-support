'use strict';

import {directive, inject} from '../../../app.decorators';
import NewGameDialogSetting from '../newGameDialog/newGameDialog';

@directive('civbgSupportNavbar')
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
  }

  public newGame() {
    this.$modal.open(NewGameDialogSetting);
  }
}

export default NavbarComponent;
