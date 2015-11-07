'use strict';

import {directive, inject} from '../../../app.decorators';

class NewGameDialogSetting implements ng.ui.bootstrap.IModalSettings {
  animation = true;
  controller = NewGameController;
  controllerAs = 'ctrl';
  templateUrl = 'app/components/dialogs/newGame.html';
}

@inject('$modalInstance')
class NewGameController {
  constructor(private $modalInstance: ng.ui.bootstrap.IModalServiceInstance) {
    //this.colors = [];
    //this.COLORS = ['RED', 'GREEN', 'BLUE', 'YELLOW', 'PURPLE'];
  }

  //restColors(self) {
  //  var others = _.without(this.colors, this.colors[self]);
  //  return _.difference(this.COLORS, others);
  //}
  //
  ok() {
    //this.$modalInstance.close(this.colors);
    this.$modalInstance.close();
  }
}

export default new NewGameDialogSetting();
